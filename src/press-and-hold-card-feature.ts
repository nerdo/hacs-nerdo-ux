import { css, html, LitElement, type TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { cssColor } from './css-color';
import { HoldController } from './hold-controller';

const DEFAULT_HOLD_MS = 1000;
const DEFAULT_TOLERANCE_PX = 20;
// Home Assistant's tile feature height, and the round button's default size.
const DEFAULT_BUTTON_PX = 42;
const RING_GAP_PX = 2;
// How long each part of a released hold's animation takes, by default.
const DEFAULT_PART_MS = { recede: 150, fade: 250, shake: 300 } as const;
type CancelPart = keyof typeof DEFAULT_PART_MS;

type CancelAnimation = 'recede' | 'fade' | 'shake' | 'recede-fade' | 'recede-shake' | 'none';

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
  /** Diameter of the round button, in pixels. Defaults to the tile feature height. */
  button_size?: number;
  /** Progress color for a hold that turns the entity on. Defaults to the theme's success color. */
  progress_color_on?: string;
  /** Progress color for a hold that turns the entity off. Defaults to the theme's warning color. */
  progress_color_off?: string;
  /** Thickness of the round button's progress ring, in pixels. Defaults to 12% of the button size. */
  progress_width?: number;
  /**
   * What the progress does when a hold is released before it completes:
   * `recede` (default) runs it back to empty, `fade` fades it where it stopped,
   * `shake` clears it and shakes the button, `recede-fade` and `recede-shake`
   * do both parts at once, `none` clears it at once.
   */
  cancel_animation?: CancelAnimation;
  /** Length of the recede part, in milliseconds. Defaults to 150. */
  recede_duration?: number;
  /** Length of the fade part, in milliseconds. Defaults to 250. */
  fade_duration?: number;
  /** Length of the shake part, in milliseconds. Defaults to 300. */
  shake_duration?: number;
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
    onCancel: (progress) => this.startCancel(progress),
  });

  /** A released hold's animation in progress: which one, and how far the hold got. */
  @state() private cancelling?: { parts: CancelPart[]; progress: number };
  private cancelTimer?: ReturnType<typeof setTimeout>;

  private partMs(part: CancelPart): number {
    return this.config?.[`${part}_duration`] ?? DEFAULT_PART_MS[part];
  }

  private startCancel(progress: number): void {
    const animation = this.config?.cancel_animation ?? 'recede';
    if (animation === 'none') return;
    // A combination such as recede-fade runs its parts at the same time, each
    // for its own duration.
    const parts = animation.split('-') as CancelPart[];
    clearTimeout(this.cancelTimer);
    this.cancelling = { parts, progress };
    this.cancelTimer = setTimeout(
      () => {
        this.cancelling = undefined;
      },
      Math.max(...parts.map((part) => this.partMs(part))),
    );
  }

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
    const buttonPx = config?.button_size ?? DEFAULT_BUTTON_PX;
    const ringPx = config?.progress_width ?? Math.round(buttonPx * 0.12);
    // The ring sits outside the button: the SVG spans the button plus the gap
    // and the ring's thickness on every side. An absolutely positioned child is
    // placed from the inside of its parent's border, so the offset also steps
    // back over the button's border.
    const ringOffsetPx = RING_GAP_PX + ringPx;
    const ringBoxPx = buttonPx + 2 * ringOffsetPx;
    const ringCenter = ringBoxPx / 2;
    const ringRadius = ringCenter - ringPx / 2;
    const ring =
      style === 'ring'
        ? html`<svg
            class="progress ${isOn ? 'turning-off' : 'turning-on'}"
            viewBox="0 0 ${ringBoxPx} ${ringBoxPx}"
            style="top: calc(-${ringOffsetPx}px - var(--control-border-width)); left: calc(-${ringOffsetPx}px - var(--control-border-width)); width: ${ringBoxPx}px; height: ${ringBoxPx}px"
          >
            <circle class="progress-track" cx=${ringCenter} cy=${ringCenter} r=${ringRadius}
              stroke-width=${ringPx} pathLength="300"></circle>
            <circle class="progress-bar" cx=${ringCenter} cy=${ringCenter} r=${ringRadius}
              stroke-width=${ringPx} pathLength="300"></circle>
          </svg>`
        : '';
    return html`<div class="feature ${style}"><div
      class="control ${style} ${isOn ? 'on' : 'off'} ${busy ? 'busy' : ''} ${this.hold.holding ? 'holding' : ''} ${
        this.cancelling
          ? `cancelling ${this.cancelling.parts.map((part) => `cancel-${part}`).join(' ')}`
          : ''
      }"
      aria-busy=${busy ? 'true' : 'false'}
      aria-disabled=${busy ? 'true' : 'false'}
      style="--control-color: ${cssColor(config?.color)}; --hold-duration: ${holdMs}ms${
        style === 'ring' ? `; --button-size: ${buttonPx}px` : ''
      }; --recede-duration: ${this.partMs('recede')}ms; --fade-duration: ${this.partMs(
        'fade',
      )}ms; --shake-duration: ${this.partMs('shake')}ms; --cancel-progress: ${
        this.cancelling?.progress ?? 0
      }${config?.progress_color_on ? `; --progress-on: ${cssColor(config.progress_color_on)}` : ''}${
        config?.progress_color_off ? `; --progress-off: ${cssColor(config.progress_color_off)}` : ''
      }"
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
      border: var(--control-border-width) solid var(--control-color);
    }
:host {
      --control-border-width: 2px;
      --progress-on: var(--success-color, #4caf50);
      --progress-off: var(--warning-color, #ff9800);
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
      width: var(--button-size, var(--feature-height, 42px));
      height: var(--button-size, var(--feature-height, 42px));
      border-radius: 50%;
      overflow: visible;
    }
    .control.ring.holding {
      transform: scale(0.95);
    }
    .progress {
      position: absolute;
      transform: rotate(-90deg);
      pointer-events: none;
      overflow: visible;
    }
    .progress circle {
      fill: none;
      stroke: currentColor;
    }
    .progress.turning-on {
      color: var(--progress-on);
    }
    .progress.turning-off {
      color: var(--progress-off);
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
    /* A released hold: the progress starts from where the hold stopped. */
    .control.cancel-fade .progress-track,
    .control.cancel-recede .progress-track {
      opacity: 0.2;
    }
    .control.cancel-fade .progress-bar {
      stroke-dashoffset: calc(300px * (1 - var(--cancel-progress)));
      animation: cancel-fade var(--fade-duration) ease-out forwards;
    }
    .control.cancel-fade .progress-track {
      animation: cancel-fade var(--fade-duration) ease-out forwards;
    }
    .control.cancel-recede .progress-bar {
      animation: cancel-recede-ring var(--recede-duration) ease-in forwards;
    }
    /* Both parts on the same element need one combined animation list. */
    .control.cancel-recede.cancel-fade .progress-bar {
      animation:
        cancel-recede-ring var(--recede-duration) ease-in forwards,
        cancel-fade var(--fade-duration) ease-out forwards;
    }
    .control.cancel-shake {
      animation: cancel-shake var(--shake-duration) ease-in-out;
    }
    @keyframes cancel-fade {
      to {
        opacity: 0;
      }
    }
    @keyframes cancel-recede-ring {
      from {
        stroke-dashoffset: calc(300px * (1 - var(--cancel-progress)));
      }
      to {
        stroke-dashoffset: 300;
      }
    }
    @keyframes cancel-shake {
      15%,
      55% {
        translate: -4px 0;
      }
      35%,
      75% {
        translate: 4px 0;
      }
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
      --mdc-icon-size: calc(var(--button-size, var(--feature-height, 42px)) * 0.5);
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
      opacity: 1;
    }
    /* The sweep shows which way the hold goes: the "on" color when it will turn
       the entity on, the "off" color when it will turn it off. */
    .control.bar.off::after {
      background-color: var(--progress-on);
    }
    .control.bar.on::after {
      background-color: var(--progress-off);
    }
    .control.bar.holding::after {
      animation: hold-fill var(--hold-duration) linear forwards;
    }
    .control.bar.cancel-fade::after {
      width: calc(var(--cancel-progress) * 100%);
      animation: cancel-fade var(--fade-duration) ease-out forwards;
    }
    .control.bar.cancel-recede::after {
      animation: cancel-recede-bar var(--recede-duration) ease-in forwards;
    }
    .control.bar.cancel-recede.cancel-fade::after {
      animation:
        cancel-recede-bar var(--recede-duration) ease-in forwards,
        cancel-fade var(--fade-duration) ease-out forwards;
    }
    @keyframes cancel-recede-bar {
      from {
        width: calc(var(--cancel-progress) * 100%);
      }
      to {
        width: 0;
      }
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
