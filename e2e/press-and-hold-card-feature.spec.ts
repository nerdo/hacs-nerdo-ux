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

async function mountFeature(page: Page): Promise<void> {
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
    { config: featureConfig, states: sparkStates },
  );
}

const control = (page: Page) => page.locator('press-and-hold-card-feature .control');
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
  await page.mouse.move(box.x + 20, box.y + box.height / 2);
  await page.mouse.down();
  await page.mouse.move(box.x + 80, box.y + box.height / 2, { steps: 5 });
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

test('while busy, holding the control shows no hold fill', async ({ page }) => {
  await mountFeature(page);
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
