import {
  LitElement,
  html,
  css,
  CSSResultGroup,
  TemplateResult,
} from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, fireEvent, LovelaceCardEditor } from 'custom-card-helpers';

const SCHEMA = [
  {
    name: 'entity',
    selector: { entity: {} },
  },
  {
    type: 'grid',
    name: '',
    schema: [
      {
        name: 'name',
        selector: { text: {} },
      },
      {
        name: 'icon',
        selector: { icon: {} },
      },
    ],
  },
  {
    name: 'hold_duration',
    selector: { number: { min: 500, max: 10000, step: 100, unit_of_measurement: 'ms' } },
  },
  {
    type: 'grid',
    name: '',
    schema: [
      {
        name: 'show_name',
        selector: { boolean: {} },
      },
      {
        name: 'show_state',
        selector: { boolean: {} },
      },
      {
        name: 'show_icon',
        selector: { boolean: {} },
      },
    ],
  },
  {
    name: 'icon_height',
    selector: { number: { min: 20, max: 150, step: 2, unit_of_measurement: 'px' } },
  },
];

@customElement('press-and-hold-button-card-editor')
export class PressAndHoldButtonCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @state() private _config?: any;

  public setConfig(config: any): void {
    this._config = config || {};
  }

  protected render(): TemplateResult {
    if (!this.hass || !this._config) {
      return html``;
    }

    const data = {
      ...this._config,
    };

    return html`
      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${SCHEMA}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }

  private _valueChanged(ev: CustomEvent): void {
    const config = ev.detail.value;
    if (!config || !this.hass) {
      return;
    }
    fireEvent(this, 'config-changed', { config });
  }

  private _computeLabel = (schema: any) => {
    switch (schema.name) {
      case 'entity':
        return 'Entity (Required)';
      case 'name':
        return 'Name (Optional)';
      case 'icon':
        return 'Icon (Optional)';
      case 'hold_duration':
        return 'Hold Duration (ms)';
      case 'show_name':
        return 'Show Name';
      case 'show_state':
        return 'Show State';
      case 'show_icon':
        return 'Show Icon';
      case 'icon_height':
        return 'Icon Height (px)';
      default:
        return schema.name;
    }
  };

  static get styles(): CSSResultGroup {
    return css`
      :host {
        display: block;
      }
      ha-form {
        display: block;
        padding: 16px;
      }
    `;
  }
}