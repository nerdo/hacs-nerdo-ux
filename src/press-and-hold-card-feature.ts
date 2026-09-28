import { css, html, LitElement, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
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
  label_on?: string;
  label_off?: string;
  service?: string;
  service_data?: Record<string, unknown>;
}

// Home Assistant's theme defines --<name>-color for each named color, which is
// how a tile resolves `color: yellow`. Anything else is used as CSS as-is.
const THEME_COLORS = new Set([
  'primary',
  'accent',
  'red',
  'pink',
  'purple',
  'deep-purple',
  'indigo',
  'blue',
  'light-blue',
  'cyan',
  'teal',
  'green',
  'light-green',
  'lime',
  'yellow',
  'amber',
  'orange',
  'deep-orange',
  'brown',
  'light-grey',
  'grey',
  'dark-grey',
  'blue-grey',
  'black',
  'white',
  'disabled',
]);

export function cssColor(color: string | undefined): string {
  if (!color) return 'var(--primary-color)';
  return THEME_COLORS.has(color) ? `var(--${color}-color)` : color;
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
    return html`<div
      class="control ${isOn ? 'on' : 'off'} ${busy ? 'busy' : ''} ${this.hold.holding ? 'holding' : ''}"
      aria-busy=${busy ? 'true' : 'false'}
      aria-disabled=${busy ? 'true' : 'false'}
      style="--control-color: ${cssColor(config?.color)}; --hold-duration: ${holdMs}ms"
      @pointerdown=${this.handlePointerDown}
      @pointermove=${this.hold.pointerMove}
      @pointerup=${this.hold.pointerUp}
      @pointercancel=${this.hold.pointerUp}
      @pointerleave=${this.hold.pointerUp}
      @contextmenu=${(event: Event) => event.preventDefault()}
    >${label ? html`<span class="label">${label}</span>` : ''}</div>`;
  }

  static styles = css`
    .control {
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
    .control.on {
      background-color: var(--control-color);
    }
    .control.off {
      background-color: transparent;
    }
    .control {
      display: flex;
      align-items: center;
      justify-content: center;
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
    .control::after {
      content: '';
      position: absolute;
      inset: 0;
      width: 0;
      background-color: var(--primary-text-color, #000);
      opacity: 0.2;
    }
    .control.holding::after {
      animation: hold-fill var(--hold-duration) linear forwards;
    }
    @keyframes hold-fill {
      to {
        width: 100%;
      }
    }
  `;
}
