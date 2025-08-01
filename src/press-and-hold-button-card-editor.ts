import {
  LitElement,
  html,
  css,
  CSSResultGroup,
  TemplateResult,
} from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, fireEvent, LovelaceCardEditor } from 'custom-card-helpers';
import { BUILD_TIMESTAMP } from './build-info';
import { DEFAULT_CONFIG } from './constants';

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
    name: 'movement_tolerance',
    selector: { number: { min: 1, max: 50, step: 1, unit_of_measurement: 'px' } },
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
  {
    name: 'cap_style',
    selector: { 
      select: { 
        options: [
          { value: 'rounded', label: 'Rounded' },
          { value: 'none', label: 'Square' }
        ]
      }
    },
  },
  {
    name: 'hold_action',
    selector: { action: {} },
  },
];

@customElement('press-and-hold-button-card-editor')
export class PressAndHoldButtonCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @state() private _config?: any;

  public setConfig(config: any): void {
    // Apply defaults to show proper values in editor
    this._config = {
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

  protected render(): TemplateResult {
    if (!this.hass || !this._config) {
      return html``;
    }

    // Ensure we have a real entity if none is selected
    const data = { ...this._config };
    if (!data.entity || data.entity === 'switch.example') {
      const switchableEntities = Object.keys(this.hass.states).filter(entityId => {
        const domain = entityId.split('.')[0];
        return ['switch', 'light', 'input_boolean'].includes(domain);
      });
      if (switchableEntities.length > 0) {
        data.entity = switchableEntities[0];
      }
    }

    return html`
      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${SCHEMA}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <div class="build-info">
        Built: ${BUILD_TIMESTAMP}
      </div>
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
      case 'movement_tolerance':
        return 'Movement Tolerance (px)';
      case 'show_name':
        return 'Show Name';
      case 'show_state':
        return 'Show State';
      case 'show_icon':
        return 'Show Icon';
      case 'icon_height':
        return 'Icon Height (px)';
      case 'cap_style':
        return 'Progress Ring Cap Style';
      case 'hold_action':
        return 'Hold Action';
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
      .build-info {
        padding: 8px 16px;
        font-size: 11px;
        color: var(--secondary-text-color);
        opacity: 0.7;
        border-top: 1px solid var(--divider-color);
        background: var(--card-background-color);
      }
    `;
  }
}