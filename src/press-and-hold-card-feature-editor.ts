import { css, html, LitElement, type TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

// The visual editor for press-and-hold-card-feature, shown in Home Assistant's
// tile editor. It renders Home Assistant's own ha-form from the schema below.

type Field = { name: string; selector: Record<string, unknown> };
type Section = { type: 'expandable'; name: ''; title: string; expanded?: boolean; schema: Field[] };

const ms = (max: number) => ({ number: { min: 0, max, step: 10, unit_of_measurement: 'ms' } });
const px = (min: number, max: number) => ({
  number: { min, max, step: 1, unit_of_measurement: 'px' },
});
const select = (options: Array<[value: string, label: string]>) => ({
  select: { mode: 'dropdown', options: options.map(([value, label]) => ({ value, label })) },
});

export const EDITOR_SCHEMA: Section[] = [
  {
    type: 'expandable',
    name: '',
    title: 'Entity and action',
    expanded: true,
    schema: [
      { name: 'entity', selector: { entity: {} } },
      { name: 'service', selector: { text: {} } },
      { name: 'service_data', selector: { object: {} } },
    ],
  },
  {
    type: 'expandable',
    name: '',
    title: 'Appearance',
    schema: [
      {
        name: 'style',
        selector: select([
          ['ring', 'Round button with a progress ring'],
          ['bar', 'Full-width bar'],
        ]),
      },
      { name: 'color', selector: { ui_color: {} } },
      { name: 'icon', selector: { icon: {} } },
      { name: 'button_size', selector: px(20, 200) },
      { name: 'label_on', selector: { text: {} } },
      { name: 'label_off', selector: { text: {} } },
    ],
  },
  {
    type: 'expandable',
    name: '',
    title: 'Progress',
    schema: [
      { name: 'progress_width', selector: px(1, 40) },
      { name: 'progress_color_on', selector: { ui_color: {} } },
      { name: 'progress_color_off', selector: { ui_color: {} } },
    ],
  },
  {
    type: 'expandable',
    name: '',
    title: 'Released hold',
    schema: [
      {
        name: 'cancel_animation',
        selector: select([
          ['recede', 'Recede'],
          ['fade', 'Fade'],
          ['shake', 'Shake'],
          ['recede-fade', 'Recede and fade'],
          ['recede-shake', 'Recede and shake'],
          ['none', 'None'],
        ]),
      },
      { name: 'recede_duration', selector: ms(2000) },
      { name: 'fade_duration', selector: ms(2000) },
      { name: 'shake_duration', selector: ms(2000) },
    ],
  },
  {
    type: 'expandable',
    name: '',
    title: 'Busy and timing',
    schema: [
      { name: 'busy_entity', selector: { entity: {} } },
      { name: 'hold_duration', selector: ms(10000) },
      { name: 'movement_tolerance', selector: px(1, 100) },
    ],
  },
];

const LABELS: Record<string, string> = {
  entity: 'Entity',
  service: 'Action to perform',
  service_data: 'Action data',
  style: 'Style',
  color: 'Color',
  icon: 'Icon',
  button_size: 'Button size',
  label_on: 'Label while on',
  label_off: 'Label while off',
  progress_width: 'Ring thickness',
  progress_color_on: 'Progress color, turning on',
  progress_color_off: 'Progress color, turning off',
  cancel_animation: 'When released early',
  recede_duration: 'Recede duration',
  fade_duration: 'Fade duration',
  shake_duration: 'Shake duration',
  busy_entity: 'Busy entity',
  hold_duration: 'Hold duration',
  movement_tolerance: 'Movement tolerance',
};

const HELPERS: Record<string, string> = {
  entity: 'Whose state the control shows: filled while on, hollow while off.',
  service:
    'Called when a hold completes, for example script.my_script. Without one, a hold does nothing.',
  service_data: 'Sent with the action. No target is added.',
  style: 'Round button (default) or full-width bar.',
  color: 'The fill and outline color.',
  icon: 'Optional. The control is blank without one.',
  button_size: 'Round style only. Diameter in pixels; defaults to 42.',
  label_on: 'Optional text shown while the entity is on.',
  label_off: 'Optional text shown while the entity is off.',
  progress_width: 'Round style only. Defaults to 12% of the button size.',
  progress_color_on: 'For a hold that turns the entity on. Defaults to the theme success color.',
  progress_color_off: 'For a hold that turns the entity off. Defaults to the theme warning color.',
  cancel_animation: 'What the progress does when you let go before the hold completes.',
  recede_duration: 'Defaults to 150 ms.',
  fade_duration: 'Defaults to 250 ms.',
  shake_duration: 'Defaults to 300 ms.',
  busy_entity: 'While this entity is on, the control dims and ignores holds.',
  hold_duration: 'How long to hold. Defaults to 1000 ms.',
  movement_tolerance: 'How far the pointer may move before the hold cancels. Defaults to 20 px.',
};

@customElement('press-and-hold-card-feature-editor')
export class PressAndHoldCardFeatureEditor extends LitElement {
  @property({ attribute: false }) public hass?: unknown;
  @state() private config?: Record<string, unknown>;

  public setConfig(config: Record<string, unknown>): void {
    this.config = config;
  }

  private readonly computeLabel = (field: { name: string }): string =>
    LABELS[field.name] ?? field.name;

  private readonly computeHelper = (field: { name: string }): string | undefined =>
    HELPERS[field.name];

  private valueChanged(event: CustomEvent<{ value: Record<string, unknown> }>): void {
    event.stopPropagation();
    const config = { type: this.config?.type, ...event.detail.value };
    this.dispatchEvent(
      new CustomEvent('config-changed', { detail: { config }, bubbles: true, composed: true }),
    );
  }

  protected render(): TemplateResult {
    return html`<ha-form
      .hass=${this.hass}
      .data=${this.config}
      .schema=${EDITOR_SCHEMA}
      .computeLabel=${this.computeLabel}
      .computeHelper=${this.computeHelper}
      @value-changed=${this.valueChanged}
    ></ha-form>`;
  }

  static styles = css`
    ha-form {
      display: block;
    }
  `;
}
