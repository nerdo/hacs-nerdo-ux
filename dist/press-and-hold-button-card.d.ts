import { LitElement, CSSResultGroup, TemplateResult, PropertyValues } from 'lit';
import { HomeAssistant, LovelaceCard, LovelaceCardConfig } from 'custom-card-helpers';
import './press-and-hold-button-card-editor';
interface ActionConfig {
    action: 'toggle' | 'turn_on' | 'turn_off' | 'call-service' | 'navigate' | 'url' | 'more-info' | 'none';
    entity?: string;
    service?: string;
    service_data?: Record<string, any>;
    target?: Record<string, any>;
    navigation_path?: string;
    url_path?: string;
    confirmation?: boolean | {
        text?: string;
        exemptions?: Array<{
            user: string;
        }>;
    };
}
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
    hold_action?: ActionConfig;
}
export declare class PressAndHoldButtonCard extends LitElement implements LovelaceCard {
    hass: HomeAssistant;
    private config;
    private isHolding;
    private isAnimating;
    static get buildTimestamp(): string;
    get buildTimestamp(): string;
    private holdTimer?;
    private startY?;
    private startX?;
    static getStubConfig(hass?: HomeAssistant): PressAndHoldButtonCardConfig;
    setConfig(config: PressAndHoldButtonCardConfig): void;
    getCardSize(): number;
    static getConfigElement(): any;
    protected render(): TemplateResult;
    private handlePointerDown;
    private handlePointerMove;
    private handlePointerUp;
    private handleContextMenu;
    private startHold;
    private stopHold;
    private executeAction;
    static get styles(): CSSResultGroup;
    protected updated(changedProps: PropertyValues): void;
    disconnectedCallback(): void;
}
declare global {
    interface Window {
        customCards: any[];
    }
}
export {};
//# sourceMappingURL=press-and-hold-button-card.d.ts.map