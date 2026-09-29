import { expect, type Page, test } from '@playwright/test';

// The hold control that renders inside a Home Assistant tile, as a custom card
// feature. The tile's own entity is the Spark's power sensor; the control acts
// on the Spark's outlet switch.

const HOLD_MS = 500;
const YELLOW = 'rgb(255, 235, 59)';

const featureConfig = {
  type: 'custom:press-and-hold-card-feature',
  entity: 'switch.arty1_outlet',
  color: 'yellow',
  busy_entity: 'input_boolean.arty1_outlet_busy',
  hold_duration: HOLD_MS,
  service: 'script.nerdo_dgx_spark_toggle_power',
  service_data: { outlet: 'switch.arty1_outlet' },
};

const sparkStates = {
  'sensor.arty1_outlet_power': {
    entity_id: 'sensor.arty1_outlet_power',
    state: '137',
    attributes: { unit_of_measurement: 'W' },
  },
  'switch.arty1_outlet': { entity_id: 'switch.arty1_outlet', state: 'on', attributes: {} },
  'input_boolean.arty1_outlet_busy': {
    entity_id: 'input_boolean.arty1_outlet_busy',
    state: 'off',
    attributes: {},
  },
};

async function mountFeature(page: Page, overrides: Record<string, unknown> = {}): Promise<void> {
  await page.goto('/e2e/fixture.html');
  await page.waitForFunction(() => (window as any).fixtureReady === true);
  await page.evaluate(
    ({ config, states }) =>
      (window as any).mount({
        tag: 'press-and-hold-card-feature',
        config,
        states,
        context: { entity_id: 'sensor.arty1_outlet_power' },
      }),
    { config: { ...featureConfig, ...overrides }, states: sparkStates },
  );
}

const feature = (page: Page) => page.locator('press-and-hold-card-feature');
const control = (page: Page) => page.locator('press-and-hold-card-feature .control');
const ringOffset = async (page: Page): Promise<number> =>
  Number.parseFloat(
    await page
      .locator('press-and-hold-card-feature .progress-bar')
      .evaluate((el) => getComputedStyle(el).strokeDashoffset),
  );
const calls = (page: Page) => page.evaluate(() => (window as any).calls);

async function hold(page: Page, ms: number): Promise<void> {
  const box = await control(page).boundingBox();
  if (!box) throw new Error('The control has no bounding box');
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.waitForTimeout(ms);
  await page.mouse.up();
}

test("In a browser, a yellow hold control inside arty1's power tile calls its power action once when held, and a second hold while arty1 is busy calls nothing.", async ({
  page,
}) => {
  await mountFeature(page);
  await expect(control(page)).toHaveCSS('background-color', YELLOW);

  await hold(page, HOLD_MS * 2);
  await page.evaluate(() => (window as any).setState('input_boolean.arty1_outlet_busy', 'on'));
  await hold(page, HOLD_MS * 2);

  expect(await calls(page)).toEqual([
    {
      domain: 'script',
      service: 'nerdo_dgx_spark_toggle_power',
      data: { outlet: 'switch.arty1_outlet' },
      target: {},
    },
  ]);
});

test('releasing the control before its hold duration calls nothing', async ({ page }) => {
  await mountFeature(page);
  await hold(page, HOLD_MS * 0.4);
  await page.waitForTimeout(HOLD_MS * 2);
  expect(await calls(page)).toEqual([]);
});

test('moving past the movement tolerance during a hold calls nothing', async ({ page }) => {
  await mountFeature(page);
  const box = await control(page).boundingBox();
  if (!box) throw new Error('The control has no bounding box');
  const x = box.x + box.width / 2;
  const y = box.y + box.height / 2;
  await page.mouse.move(x, y);
  await page.mouse.down();
  await page.mouse.move(x + 60, y, { steps: 5 });
  await page.waitForTimeout(HOLD_MS * 2);
  await page.mouse.up();
  expect(await calls(page)).toEqual([]);
});

test('the control is hollow while its entity is off', async ({ page }) => {
  await mountFeature(page);
  await page.evaluate(() => (window as any).setState('switch.arty1_outlet', 'off'));
  await expect(control(page)).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)');
  await expect(control(page)).toHaveCSS('border-top-color', YELLOW);
});

test('while busy, the control is marked busy and disabled', async ({ page }) => {
  await mountFeature(page);
  await page.evaluate(() => (window as any).setState('input_boolean.arty1_outlet_busy', 'on'));
  await expect(control(page)).toHaveAttribute('aria-busy', 'true');
  await expect(control(page)).toHaveAttribute('aria-disabled', 'true');
});

test('while busy, holding the bar variant shows no hold fill', async ({ page }) => {
  await mountFeature(page, { style: 'bar' });
  await page.evaluate(() => (window as any).setState('input_boolean.arty1_outlet_busy', 'on'));
  const box = await control(page).boundingBox();
  if (!box) throw new Error('The control has no bounding box');
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.waitForTimeout(HOLD_MS * 0.6);
  const fillWidth = await control(page).evaluate((el) => getComputedStyle(el, '::after').width);
  await page.mouse.up();
  expect(fillWidth).toBe('0px');
});

const labels = { label_on: 'Shut down all', label_off: 'Turn on all' };

test('shows its on label while its entity is on', async ({ page }) => {
  await mountFeature(page, labels);
  await expect(feature(page)).toHaveText('Shut down all');
});

test('shows its off label while its entity is off', async ({ page }) => {
  await mountFeature(page, labels);
  await page.evaluate(() => (window as any).setState('switch.arty1_outlet', 'off'));
  await expect(feature(page)).toHaveText('Turn on all');
});

test('registers itself so the tile editor can offer it', async ({ page }) => {
  await page.goto('/e2e/fixture.html');
  await page.waitForFunction(() => (window as any).fixtureReady === true);
  const types = await page.evaluate(() =>
    ((window as any).customCardFeatures ?? []).map((feature: { type: string }) => feature.type),
  );
  expect(types).toContain('press-and-hold-card-feature');
});

const icon = (page: Page) => page.locator('press-and-hold-card-feature ha-icon');

test('shows its icon when one is set', async ({ page }) => {
  await mountFeature(page, { icon: 'mdi:power' });
  await expect(icon(page)).toHaveCount(1);
  expect(await icon(page).evaluate((el) => (el as any).icon)).toBe('mdi:power');
});

test('shows no icon when none is set', async ({ page }) => {
  await mountFeature(page);
  await expect(icon(page)).toHaveCount(0);
});

test('by default, the control is a round button', async ({ page }) => {
  await mountFeature(page);
  const box = await control(page).boundingBox();
  if (!box) throw new Error('The control has no bounding box');
  expect(Math.abs(box.width - box.height)).toBeLessThan(1);
  await expect(control(page)).toHaveCSS('border-top-left-radius', '50%');
});

test('by default, holding the control fills the progress ring around it', async ({ page }) => {
  await mountFeature(page);
  const box = await control(page).boundingBox();
  if (!box) throw new Error('The control has no bounding box');
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.waitForTimeout(HOLD_MS * 0.6);
  const offset = await ringOffset(page);
  await page.mouse.up();
  expect(offset).toBeLessThan(300);
});

test('while busy, holding the round button fills no ring', async ({ page }) => {
  await mountFeature(page);
  await page.evaluate(() => (window as any).setState('input_boolean.arty1_outlet_busy', 'on'));
  const box = await control(page).boundingBox();
  if (!box) throw new Error('The control has no bounding box');
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await page.waitForTimeout(HOLD_MS * 0.6);
  const offset = await ringOffset(page);
  await page.mouse.up();
  expect(offset).toBe(300);
});

test('the bar variant is a full-width bar', async ({ page }) => {
  await mountFeature(page, { style: 'bar' });
  const box = await control(page).boundingBox();
  if (!box) throw new Error('The control has no bounding box');
  expect(box.width).toBeGreaterThan(box.height * 3);
});

test("button_size sets the round button's diameter", async ({ page }) => {
  await mountFeature(page, { button_size: 84 });
  const box = await control(page).boundingBox();
  if (!box) throw new Error('The control has no bounding box');
  expect(Math.round(box.width)).toBe(84);
  expect(Math.round(box.height)).toBe(84);
});

const SET_COLOR = 'rgb(10, 20, 30)';
const SUCCESS_GREEN = 'rgb(76, 175, 80)';
const WARNING_ORANGE = 'rgb(255, 152, 0)';
const ringColor = (page: Page) =>
  page
    .locator('press-and-hold-card-feature .progress')
    .evaluate((el) => getComputedStyle(el).color);
const barFill = (page: Page) =>
  control(page).evaluate((el) => {
    const style = getComputedStyle(el, '::after');
    return { color: style.backgroundColor, opacity: style.opacity };
  });
const turnOff = (page: Page) =>
  page.evaluate(() => (window as any).setState('switch.arty1_outlet', 'off'));

test('progress_color_on colors the ring for a hold that turns the entity on', async ({ page }) => {
  await mountFeature(page, { progress_color_on: SET_COLOR });
  await turnOff(page);
  expect(await ringColor(page)).toBe(SET_COLOR);
});

test('progress_color_off colors the ring for a hold that turns the entity off', async ({
  page,
}) => {
  await mountFeature(page, { progress_color_off: SET_COLOR });
  expect(await ringColor(page)).toBe(SET_COLOR);
});

test("by default, the bar's fill for turning on is the success color at full strength", async ({
  page,
}) => {
  await mountFeature(page, { style: 'bar' });
  await turnOff(page);
  expect(await barFill(page)).toEqual({ color: SUCCESS_GREEN, opacity: '1' });
});

test("by default, the bar's fill for turning off is the warning color at full strength", async ({
  page,
}) => {
  await mountFeature(page, { style: 'bar' });
  expect(await barFill(page)).toEqual({ color: WARNING_ORANGE, opacity: '1' });
});

test("progress_color_on colors the bar's fill for a hold that turns the entity on", async ({
  page,
}) => {
  await mountFeature(page, { style: 'bar', progress_color_on: SET_COLOR });
  await turnOff(page);
  expect((await barFill(page)).color).toBe(SET_COLOR);
});

test("progress_color_off colors the bar's fill for a hold that turns the entity off", async ({
  page,
}) => {
  await mountFeature(page, { style: 'bar', progress_color_off: SET_COLOR });
  expect((await barFill(page)).color).toBe(SET_COLOR);
});

// The ring's geometry on screen: its stroke width, and how far its inner edge
// sits from the button's center, both in CSS pixels.
const ringGeometry = (page: Page) =>
  page.locator('press-and-hold-card-feature .progress').evaluate((svg) => {
    const circle = svg.querySelector('.progress-bar') as SVGCircleElement;
    const scale = svg.getBoundingClientRect().width / (svg as SVGSVGElement).viewBox.baseVal.width;
    const strokeWidth = Number.parseFloat(getComputedStyle(circle).strokeWidth);
    const strokePx =
      circle.style.vectorEffect === 'non-scaling-stroke' ? strokeWidth : strokeWidth * scale;
    return { strokePx, innerRadiusPx: (circle.r.baseVal.value - strokeWidth / 2) * scale };
  });

test("progress_width sets the ring's thickness", async ({ page }) => {
  await mountFeature(page, { button_size: 84, progress_width: 12 });
  expect((await ringGeometry(page)).strokePx).toBeCloseTo(12, 0);
});

test("by default, the ring's thickness is 12% of the button size", async ({ page }) => {
  await mountFeature(page, { button_size: 84 });
  expect((await ringGeometry(page)).strokePx).toBeCloseTo(10, 0);
});

test('the ring surrounds the button without covering it', async ({ page }) => {
  await mountFeature(page, { button_size: 84 });
  expect((await ringGeometry(page)).innerRadiusPx).toBeGreaterThan(42);
});
