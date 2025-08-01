import { LitElement, CSSResultGroup, TemplateResult } from 'lit';
import { HomeAssistant, LovelaceCardEditor } from 'custom-card-helpers';
export declare class PressAndHoldButtonCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: any): void;
    protected render(): TemplateResult;
    private _buildSchema;
    private _getDefaultActionLabel;
    private _valueChanged;
    private _computeLabel;
    static get styles(): CSSResultGroup;
}
//# sourceMappingURL=press-and-hold-button-card-editor.d.ts.map