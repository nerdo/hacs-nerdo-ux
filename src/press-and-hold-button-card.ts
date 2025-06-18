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
import './press-and-hold-button-card-editor';

// Ensure editor is loaded
customElements.get('press-and-hold-button-card-editor') || import('./press-and-hold-button-card-editor');

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
  
  private holdTimer?: number;

  public static getStubConfig(): PressAndHoldButtonCardConfig {
    return {
      type: 'custom:press-and-hold-button-card',
      entity: 'switch.example',
      name: 'Press & Hold Button',
      hold_duration: 3000,
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
      hold_duration: 3000,
      show_name: true,
      show_state: true,
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
            @pointerup=${this.handlePointerUp}
            @pointerleave=${this.handlePointerUp}
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
    this.startHold();
  }

  private handlePointerUp(): void {
    this.stopHold();
  }

  private handleContextMenu(e: Event): void {
    e.preventDefault();
  }

  private startHold(): void {
    if (this.isHolding) return;

    this.isHolding = true;
    this.isAnimating = true;

    const duration = this.config.hold_duration || 3000;
    
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

    const entity = this.hass.states[this.config.entity];
    if (!entity) return;

    const domain = this.config.entity.split('.')[0];
    const service = entity.state === 'on' ? 'turn_off' : 'turn_on';

    this.hass.callService(domain, service, {
      entity_id: this.config.entity,
    });
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
        --hold-duration: 3000ms;
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
  documentationURL: 'https://github.com/yourusername/homeassistant-press-and-hold-button',
});