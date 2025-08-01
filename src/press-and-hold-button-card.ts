import {
  LitElement,
  html,
  css,
  CSSResultGroup,
  TemplateResult,
  PropertyValues,
} from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, LovelaceCard, LovelaceCardConfig, handleAction } from 'custom-card-helpers';
import { BUILD_TIMESTAMP } from './build-info';
import { DEFAULT_CONFIG } from './constants';
import './press-and-hold-button-card-editor';

// Ensure editor is loaded
customElements.get('press-and-hold-button-card-editor') || import('./press-and-hold-button-card-editor');

console.log(`🚀 Nerdo UX loaded, built at ${BUILD_TIMESTAMP}`);

// Make build timestamp globally available for debugging
(window as any).__NERDO_UX_BUILD_TIMESTAMP__ = BUILD_TIMESTAMP;


interface PressAndHoldButtonCardConfig extends LovelaceCardConfig {
  type: string;
  entity: string;
  name?: string;
  hold_duration?: number;
  movement_tolerance?: number;
  icon?: string;
  show_name?: boolean;
  show_state?: boolean;
  show_icon?: boolean;
  icon_height?: number;
  cap_style?: 'none' | 'rounded';
  hold_action?: 'default' | 'toggle' | 'more-info' | 'call-service';
  service?: string; // Service to call (e.g., "light.turn_on") 
  service_data?: Record<string, unknown>; // Service arguments as JSON object
}

@customElement('press-and-hold-button-card')
export class PressAndHoldButtonCard extends LitElement implements LovelaceCard {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private config!: PressAndHoldButtonCardConfig;
  @state() private isHolding = false;
  @state() private isAnimating = false;
  
  public static get buildTimestamp(): string {
    return BUILD_TIMESTAMP;
  }
  
  public get buildTimestamp(): string {
    return BUILD_TIMESTAMP;
  }
  
  private holdTimer?: number;
  private startY?: number;
  private startX?: number;

  public static getStubConfig(hass?: HomeAssistant): PressAndHoldButtonCardConfig {
    // Find a real switchable entity if hass is available
    let defaultEntity = 'switch.example';
    if (hass) {
      const switchableEntities = Object.keys(hass.states).filter(entityId => {
        const domain = entityId.split('.')[0];
        return ['switch', 'light', 'input_boolean'].includes(domain);
      });
      if (switchableEntities.length > 0) {
        defaultEntity = switchableEntities[0];
      }
    }

    return {
      type: 'custom:press-and-hold-button-card',
      entity: defaultEntity,
      hold_duration: DEFAULT_CONFIG.HOLD_DURATION,
      movement_tolerance: DEFAULT_CONFIG.MOVEMENT_TOLERANCE,
      show_name: DEFAULT_CONFIG.SHOW_NAME,
      show_state: DEFAULT_CONFIG.SHOW_STATE,
      show_icon: DEFAULT_CONFIG.SHOW_ICON,
      icon_height: DEFAULT_CONFIG.ICON_HEIGHT,
      cap_style: DEFAULT_CONFIG.CAP_STYLE,
      hold_action: DEFAULT_CONFIG.HOLD_ACTION,
    };
  }

  public setConfig(config: PressAndHoldButtonCardConfig): void {
    if (!config) {
      throw new Error('Invalid configuration');
    }
    if (!config.entity) {
      throw new Error('You need to define an entity');
    }

    this.config = {
      hold_duration: DEFAULT_CONFIG.HOLD_DURATION,
      movement_tolerance: DEFAULT_CONFIG.MOVEMENT_TOLERANCE,
      show_name: DEFAULT_CONFIG.SHOW_NAME,
      show_state: DEFAULT_CONFIG.SHOW_STATE,
      show_icon: DEFAULT_CONFIG.SHOW_ICON,
      icon_height: DEFAULT_CONFIG.ICON_HEIGHT,
      cap_style: DEFAULT_CONFIG.CAP_STYLE,
      hold_action: DEFAULT_CONFIG.HOLD_ACTION,
      ...config,
    };
  }

  public getCardSize(): number {
    return 1;
  }

  public static getConfigElement(): any {
    return document.createElement('press-and-hold-button-card-editor');
  }

  protected render(): TemplateResult {
    if (!this.config || !this.hass) {
      return html``;
    }

    const entity = this.hass.states[this.config.entity];
    if (!entity) {
      return html`
        <ha-card>
          <div class="error">Entity not found: ${this.config.entity}</div>
        </ha-card>
      `;
    }

    const name = this.config.name || entity.attributes.friendly_name || entity.entity_id;
    const icon = this.config.icon || entity.attributes.icon || 'mdi:power';
    const isOn = entity.state === 'on';
    const iconHeight = this.config.icon_height || 80;

    return html`
      <ha-card>
        <div class="card-content">
          <div
            class="button ${isOn ? 'on' : 'off'} ${this.isHolding ? 'holding' : ''}"
            style="--icon-height: ${iconHeight}px"
            @pointerdown=${this.handlePointerDown}
            @pointerup=${(e: PointerEvent) => this.handlePointerUp(e)}
            @pointerleave=${(e: PointerEvent) => this.handlePointerUp(e)}
            @pointercancel=${(e: PointerEvent) => this.handlePointerUp(e)}
            @pointermove=${this.handlePointerMove}
            @contextmenu=${this.handleContextMenu}
          >
            <div class="progress-ring ${this.isHolding ? 'active' : ''} ${this.isAnimating ? 'animating' : ''} ${isOn ? 'turning-off' : 'turning-on'}">
              <svg class="progress-svg" viewBox="0 0 100 100">
                <circle
                  class="progress-background"
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="8"
                  opacity="0.2"
                />
                <circle
                  class="progress-bar"
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="8"
                  stroke-dasharray="300"
                  stroke-dashoffset="300"
                  stroke-linecap="${this.config.cap_style === 'rounded' ? 'round' : 'butt'}"
                  transform="rotate(-90 50 50)"
                />
              </svg>
            </div>
            ${this.config.show_icon !== false
              ? html`
                  <ha-icon
                    class="icon"
                    .icon=${icon}
                  ></ha-icon>
                `
              : ''}
          </div>
          ${this.config.show_name !== false
            ? html`<div class="name">${name}</div>`
            : ''}
          ${this.config.show_state === true
            ? html`<div class="state">${entity.state}</div>`
            : ''}
        </div>
      </ha-card>
    `;
  }

  private handlePointerDown(e: PointerEvent): void {
    e.preventDefault();
    e.stopPropagation();
    
    // Store initial touch position for scroll detection
    this.startX = e.clientX;
    this.startY = e.clientY;
    
    // Set pointer capture to ensure we get all pointer events
    (e.target as Element).setPointerCapture(e.pointerId);
    
    this.startHold();
  }

  private handlePointerMove(e: PointerEvent): void {
    if (!this.isHolding || this.startX === undefined || this.startY === undefined) {
      return;
    }

    // Calculate movement distance
    const deltaX = Math.abs(e.clientX - this.startX);
    const deltaY = Math.abs(e.clientY - this.startY);
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
    // If user has moved more than the configured tolerance, consider it a scroll/drag and cancel hold
    const tolerance = this.config.movement_tolerance || DEFAULT_CONFIG.MOVEMENT_TOLERANCE;
    if (distance > tolerance) {
      this.handlePointerUp(e);
    }
  }

  private handlePointerUp(e?: PointerEvent): void {
    if (e) {
      // Release pointer capture
      try {
        (e.target as Element).releasePointerCapture(e.pointerId);
      } catch (err) {
        // Ignore errors if pointer capture is already released
      }
    }
    
    // Reset position tracking
    this.startX = undefined;
    this.startY = undefined;
    
    this.stopHold();
  }

  private handleContextMenu(e: Event): void {
    e.preventDefault();
  }

  private startHold(): void {
    if (this.isHolding) return;

    this.isHolding = true;
    this.isAnimating = true;

    const duration = this.config.hold_duration || DEFAULT_CONFIG.HOLD_DURATION;
    
    // Set CSS custom property for animation duration and listen for completion
    this.updateComplete.then(() => {
      const progressRing = this.shadowRoot?.querySelector('.progress-ring') as HTMLElement;
      if (progressRing) {
        progressRing.style.setProperty('--hold-duration', `${duration}ms`);
        
        // Listen for animation completion
        const handleAnimationEnd = (event: AnimationEvent) => {
          if (event.animationName === 'fillProgress' && this.isHolding) {
            this.executeAction();
            this.stopHold();
          }
          progressRing.removeEventListener('animationend', handleAnimationEnd);
        };
        
        progressRing.addEventListener('animationend', handleAnimationEnd);
      }
    });

    // Backup timer in case animation fails
    this.holdTimer = window.setTimeout(() => {
      if (this.isHolding) {
        this.executeAction();
        this.stopHold();
      }
    }, duration + 200);
  }

  private stopHold(): void {
    if (!this.isHolding) return;

    this.isHolding = false;
    this.isAnimating = false;

    if (this.holdTimer) {
      clearTimeout(this.holdTimer);
      this.holdTimer = undefined;
    }
  }

  private executeAction(): void {
    if (!this.config.entity) {
      console.error('Press and Hold Button Card: No entity configured');
      return;
    }

    const entity = this.hass.states[this.config.entity];
    if (!entity) {
      console.error(`Press and Hold Button Card: Entity not found: ${this.config.entity}`);
      return;
    }
    
    console.log(`Press and Hold Button Card: Executing action for ${this.config.entity}`);
    
    const actionType = this.config.hold_action || 'default';
    
    switch (actionType) {
      case 'default':
        this.executeDefaultAction(entity);
        break;
        
      case 'toggle':
        this.executeToggleAction(entity);
        break;
        
      case 'more-info':
        this.executeMoreInfoAction();
        break;
        
      case 'call-service':
        this.executeCustomServiceAction();
        break;
        
      default:
        console.error(`Press and Hold Button Card: Unknown action: ${actionType}`);
        return;
    }
  }

  private executeDefaultAction(entity: any): void {
    const domain = entity.entity_id.split('.')[0];
    
    switch (domain) {
      case 'button':
        // Button entities should be pressed, not toggled
        console.log('Default action for button: press');
        handleAction(this, this.hass, {
          entity: this.config.entity,
          hold_action: {
            action: 'call-service',
            service: 'button.press',
            target: { entity_id: this.config.entity }
          }
        }, 'hold');
        break;
        
      case 'light':
      case 'switch':
      case 'input_boolean':
        // These entities support toggle
        console.log('Default action for toggleable entity: toggle');
        handleAction(this, this.hass, {
          entity: this.config.entity,
          hold_action: { action: 'toggle' }
        }, 'hold');
        break;
        
      case 'cover':
        // Covers can be toggled (open/close)
        console.log('Default action for cover: toggle');
        handleAction(this, this.hass, {
          entity: this.config.entity,
          hold_action: { action: 'toggle' }
        }, 'hold');
        break;
        
      default:
        // For other entities, show more info
        console.log('Default action for other entity: more-info');
        this.executeMoreInfoAction();
        break;
    }
  }

  private executeToggleAction(entity: any): void {
    const domain = entity.entity_id.split('.')[0];
    
    // Check if entity supports toggle
    if (['light', 'switch', 'input_boolean', 'cover', 'fan', 'media_player'].includes(domain)) {
      console.log('Toggle action for compatible entity');
      handleAction(this, this.hass, {
        entity: this.config.entity,
        hold_action: { action: 'toggle' }
      }, 'hold');
    } else {
      console.warn(`Entity ${this.config.entity} does not support toggle action. Domain: ${domain}`);
      // Fallback to more-info for incompatible entities
      this.executeMoreInfoAction();
    }
  }

  private executeMoreInfoAction(): void {
    console.log('More info action');
    handleAction(this, this.hass, {
      entity: this.config.entity,
      hold_action: { action: 'more-info' }
    }, 'hold');
  }

  private executeCustomServiceAction(): void {
    if (!this.config.service) {
      console.error('No service specified for call-service action');
      return;
    }

    // Validate service format
    const serviceParts = this.config.service.split('.');
    if (serviceParts.length !== 2) {
      console.error(`Invalid service format: ${this.config.service}. Expected: domain.service`);
      return;
    }

    console.log(`Custom service action: ${this.config.service}`);

    const serviceData = this.config.service_data || {};
    
    handleAction(this, this.hass, {
      entity: this.config.entity,
      hold_action: {
        action: 'call-service',
        service: this.config.service,
        service_data: serviceData,
        target: { entity_id: this.config.entity }
      }
    }, 'hold');
  }

  static get styles(): CSSResultGroup {
    return css`
      ha-card {
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
      }

      .card-content {
        padding: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
      }

      .button {
        position: relative;
        width: calc(var(--icon-height) * 2);
        height: calc(var(--icon-height) * 2);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        cursor: pointer;
        background: var(--card-background-color, #ffffff);
        border: 2px solid var(--divider-color, #e1e1e1);
        -webkit-touch-callout: none;
        -webkit-tap-highlight-color: transparent;
        touch-action: none;
      }

      .button.on {
        background: var(--primary-color);
        border-color: var(--primary-color);
        color: white;
      }

      .button.off {
        background: var(--card-background-color, #ffffff);
        border-color: var(--divider-color, #e1e1e1);
        color: var(--primary-text-color);
      }

      .button.holding {
        transform: scale(0.95);
      }

      .progress-ring {
        position: absolute;
        top: -4px;
        left: -4px;
        width: calc(var(--icon-height) * 2 + 8px);
        height: calc(var(--icon-height) * 2 + 8px);
        opacity: 0;
        transition: opacity 0.2s ease;
        z-index: 10;
        pointer-events: none;
        --hold-duration: 1500ms;
      }

      .progress-ring.active {
        opacity: 1;
      }

      .progress-ring.active.animating .progress-bar {
        animation: fillProgress var(--hold-duration) linear forwards;
      }

      @keyframes fillProgress {
        from {
          stroke-dashoffset: 300;
        }
        to {
          stroke-dashoffset: 0;
        }
      }

      .progress-ring.turning-on {
        color: var(--success-color, #4caf50);
      }

      .progress-ring.turning-off {
        color: var(--warning-color, #ff9800);
      }

      .progress-svg {
        width: 100%;
        height: 100%;
        transform: rotate(-90deg);
      }

      .progress-bar {
        transition: stroke-dashoffset 0.1s linear;
      }

      .icon {
        --mdc-icon-size: calc(var(--icon-height) * 1.5);
        font-size: calc(var(--icon-height) * 1.5);
        width: calc(var(--icon-height) * 1.5);
        height: calc(var(--icon-height) * 1.5);
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .name {
        font-weight: 500;
        text-align: center;
        color: var(--primary-text-color);
      }

      .state {
        font-size: 12px;
        color: var(--secondary-text-color);
        text-transform: capitalize;
      }

      .error {
        color: var(--error-color);
        padding: 16px;
        text-align: center;
      }
    `;
  }

  protected updated(changedProps: PropertyValues): void {
    super.updated(changedProps);
    
    if (changedProps.has('config')) {
      this.stopHold();
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.stopHold();
  }
}

declare global {
  interface Window {
    customCards: any[];
  }
}

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'press-and-hold-button-card',
  name: 'Press and Hold Button Card',
  description: 'A button card that requires press and hold to toggle entities',
  preview: true,
  documentationURL: 'https://github.com/nerdo/hacs-nerdo-ux',
});