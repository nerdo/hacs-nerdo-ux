// Default configuration values - single source of truth
export const DEFAULT_CONFIG = {
  HOLD_DURATION: 1000,
  MOVEMENT_TOLERANCE: 20,
  SHOW_NAME: true,
  SHOW_STATE: false,
  SHOW_ICON: true,
  ICON_HEIGHT: 80,
  CAP_STYLE: 'rounded' as const,
  HOLD_ACTION: { action: 'toggle' as const },
} as const;