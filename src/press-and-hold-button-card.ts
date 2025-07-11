import {
  LitElement,
  html,
  css,
  CSSResultGroup,
  TemplateResult,
  PropertyValues,
} from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, LovelaceCard, LovelaceCardConfig } from 'custom-card-helpers';
import { BUILD_TIMESTAMP } from './build-info';
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
  icon?: string;
  show_name?: boolean;
  show_state?: boolean;
  show_icon?: boolean;
  icon_height?: number;
  tap_action?: any;
  hold_action?: any;
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
      hold_duration: 1500,
      show_name: true,
      show_state: false,
      show_icon: true,
      icon_height: 80,
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
      hold_duration: 1500,
      show_name: true,
      show_state: false,
      show_icon: true,
      icon_height: 80,
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
                  stroke-dasharray="283"
                  stroke-dashoffset="283"
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
    
    // If user has moved more than 10px, consider it a scroll/drag and cancel hold
    if (distance > 10) {
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

    const duration = this.config.hold_duration || 1500;
    
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
    if (!this.config.entity) return;

    // If no tap_action is configured, or it's set to toggle, handle toggle ourselves
    const actionConfig = this.config.tap_action || { action: 'toggle' as const };
    
    if (actionConfig.action === 'toggle') {
      // For toggle action, call the service directly
      const entity = this.hass.states[this.config.entity];
      if (!entity) return;

      const domain = this.config.entity.split('.')[0];
      
      // Determine the appropriate service based on domain and state
      let service: string;
      if (domain === 'button' || domain === 'input_button' || domain === 'scene') {
        service = 'press';
      } else if (entity.state === 'on') {
        service = 'turn_off';
      } else {
        service = 'turn_on';
      }

      this.hass.callService(domain, service, {
        entity_id: this.config.entity,
      });
    } else {
      // For other actions, use the hass-action event system
      const configWithEntity = { ...actionConfig };
      if (!configWithEntity.entity) {
        configWithEntity.entity = this.config.entity;
      }
      
      this.dispatchEvent(new CustomEvent('hass-action', {
        bubbles: true,
        composed: true,
        detail: {
          config: configWithEntity,
          action: 'tap'
        }
      }));
    }
  }

  static get styles(): CSSResultGroup {
    return css`
      ha-card {
        cursor: pointer;
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
        touch-action: manipulation;
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
          stroke-dashoffset: 283;
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