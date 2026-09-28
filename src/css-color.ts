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
