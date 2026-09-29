import { css, html, LitElement, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { cssColor } from './css-color';
import { HoldController } from './hold-controller';

const DEFAULT_HOLD_MS = 1000;
const DEFAULT_TOLERANCE_PX = 20;

// A hold-to-act control that renders inside a Home Assistant tile, as a custom
// card feature. It acts on its own `entity`, which need not be the tile's.

interface FeatureConfig {
  type: string;
  entity: string;
  color?: string;
  busy_entity?: string;
  hold_duration?: number;
  movement_tolerance?: number;
  icon?: string;
  /** `ring` (default): a round button with a progress ring. `bar`: a full-width bar. */
  style?: 'ring' | 'bar';
  label_on?: string;
  label_off?: string;
  service?: string;
  service_data?: Record<string, unknown>;
}

@customElement('press-and-hold-card-feature')
export class PressAndHoldCardFeature extends LitElement {
  @property({ attribute: false }) public hass?: any;
  @property({ attribute: false }) public context?: { entity_id?: string };
  @property({ attribute: false }) private config?: FeatureConfig;

  private readonly hold = new HoldController(this, {
    duration: () => this.config?.hold_duration ?? DEFAULT_HOLD_MS,
    tolerance: () => this.config?.movement_tolerance ?? DEFAULT_TOLERANCE_PX,
    onComplete: () => this.busyGate(),
  });

  public setConfig(config: FeatureConfig): void {
    this.config = config;
  }

  // While busy, a hold does not start at all, so no fill shows.
  private readonly handlePointerDown = (event: PointerEvent): void => {
    if (this.isBusy) {
      event.preventDefault();
      return;
    }
    this.hold.pointerDown(event);
  };

  // While the busy entity is on, a hold does nothing.
  private busyGate(): void {
    if (this.isBusy) return;
    this.actionDispatch();
  }

  private get isBusy(): boolean {
    const busyEntity = this.config?.busy_entity;
    return busyEntity !== undefined && this.hass?.states[busyEntity]?.state === 'on';
  }

  // Sends the configured service with its service_data. Unlike the round
  // button (custom-card-helpers' handleAction), it adds no target.
  private actionDispatch(): void {
    const config = this.config;
    if (!config?.service || !this.hass) return;
    const [domain, service] = config.service.split('.', 2);
    this.hass.callService(domain, service, config.service_data ?? {});
  }

  protected render(): TemplateResult {
    const config = this.config;
    const entity = config && this.hass?.states[config.entity];
    const isOn = entity?.state === 'on';
    const holdMs = config?.hold_duration ?? DEFAULT_HOLD_MS;
    const busy = this.isBusy;
    const label = isOn ? config?.label_on : config?.label_off;
    const style = config?.style === 'bar' ? 'bar' : 'ring';
    const iconTemplate = config?.icon
      ? html`<ha-icon class="icon" .icon=${config.icon}></ha-icon>`
      : '';
    const labelTemplate = label ? html`<span class="label">${label}</span>` : '';
    const ring =
      style === 'ring'
        ? html`<svg class="progress ${isOn ? 'turning-off' : 'turning-on'}" viewBox="0 0 100 100">
            <circle class="progress-track" cx="50" cy="50" r="45"></circle>
            <circle class="progress-bar" cx="50" cy="50" r="45"></circle>
          </svg>`
        : '';
    return html`<div class="feature ${style}"><div
      class="control ${style} ${isOn ? 'on' : 'off'} ${busy ? 'busy' : ''} ${this.hold.holding ? 'holding' : ''}"
      aria-busy=${busy ? 'true' : 'false'}
      aria-disabled=${busy ? 'true' : 'false'}
      style="--control-color: ${cssColor(config?.color)}; --hold-duration: ${holdMs}ms"
      @pointerdown=${this.handlePointerDown}
      @pointermove=${this.hold.pointerMove}
      @pointerup=${this.hold.pointerUp}
      @pointercancel=${this.hold.pointerUp}
      @pointerleave=${this.hold.pointerUp}
      @contextmenu=${(event: Event) => event.preventDefault()}
    >${ring}${iconTemplate}${style === 'bar' ? labelTemplate : ''}</div>${
      style === 'ring' ? labelTemplate : ''
    }</div>`;
  }

  static styles = css`
    .control {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      touch-action: none;
      user-select: none;
      -webkit-user-select: none;
      -webkit-touch-callout: none;
      box-sizing: border-box;
      height: var(--feature-height, 42px);
      border-radius: var(--feature-border-radius, 12px);
      border: 2px solid var(--control-color);
    }
    .feature {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
    }
    /* Round button, like the press-and-hold button card. */
    .control.ring {
      flex: none;
      width: var(--feature-height, 42px);
      border-radius: 50%;
      overflow: visible;
    }
    .control.ring.holding {
      transform: scale(0.95);
    }
    .progress {
      position: absolute;
      inset: -6px;
      width: calc(100% + 12px);
      height: calc(100% + 12px);
      transform: rotate(-90deg);
      pointer-events: none;
    }
    .progress circle {
      fill: none;
      stroke: currentColor;
      stroke-width: 8;
    }
    .progress.turning-on {
      color: var(--success-color, #4caf50);
    }
    .progress.turning-off {
      color: var(--warning-color, #ff9800);
    }
    .progress-track {
      opacity: 0;
    }
    .progress-bar {
      stroke-dasharray: 300;
      stroke-dashoffset: 300;
      stroke-linecap: round;
    }
    .control.holding .progress-track {
      opacity: 0.2;
    }
    .control.holding .progress-bar {
      animation: fill-ring var(--hold-duration) linear forwards;
    }
    @keyframes fill-ring {
      to {
        stroke-dashoffset: 0;
      }
    }
    .control.bar {
      flex: 1;
    }
    .control.on {
      background-color: var(--control-color);
    }
    .control.off {
      background-color: transparent;
    }
    .icon {
      position: relative;
      z-index: 1;
      color: var(--control-color);
      --mdc-icon-size: 22px;
    }
    .control.on .icon {
      color: var(--text-primary-color, #fff);
    }
    .icon + .label {
      margin-left: 8px;
    }
    .label {
      position: relative;
      z-index: 1;
      font-weight: 500;
      color: var(--control-color);
    }
    .control.on .label {
      color: var(--text-primary-color, #fff);
    }
    /* Busy: dimmed, with the border pulsing in the control's color. */
    .control.busy {
      cursor: progress;
      opacity: 0.5;
      animation: busy-pulse 1.2s ease-in-out infinite;
    }
    @keyframes busy-pulse {
      50% {
        border-color: transparent;
      }
    }
    /* The hold fill sweeps across the control for the hold duration. */
    .control.bar::after {
      content: '';
      position: absolute;
      inset: 0;
      width: 0;
      background-color: var(--primary-text-color, #000);
      opacity: 0.2;
    }
    .control.bar.holding::after {
      animation: hold-fill var(--hold-duration) linear forwards;
    }
    @keyframes hold-fill {
      to {
        width: 100%;
      }
    }
  `;
}

declare global {
  interface Window {
    customCardFeatures?: Array<{ type: string; name: string; configurable?: boolean }>;
  }
}

window.customCardFeatures = window.customCardFeatures || [];
window.customCardFeatures.push({
  type: 'press-and-hold-card-feature',
  name: 'Press and hold',
  configurable: true,
});
