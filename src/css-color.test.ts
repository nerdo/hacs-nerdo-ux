import { expect, test } from 'bun:test';
import { cssColor } from './css-color';

test("a Home Assistant color name resolves to that color's theme variable", () => {
  expect(cssColor('yellow')).toBe('var(--yellow-color)');
});

test('any other color is used as written', () => {
  expect(cssColor('#ff8800')).toBe('#ff8800');
});

test("no color falls back to the theme's primary color", () => {
  expect(cssColor(undefined)).toBe('var(--primary-color)');
});
