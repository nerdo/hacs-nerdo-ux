import { expect, test, type Page } from '@playwright/test';

// Characterization tests: what the round press-and-hold button card does today
// (v1.1.3), pinned before the hold logic is shared with the new tile feature.

const HOLD_MS = 500;

const config = {
  type: 'custom:press-and-hold-button-card',
  entity: 'switch.spark',
  hold_duration: HOLD_MS,
  movement_tolerance: 20,
  hold_action: 'call-service',
  service: 'script.toggle_spark',
  service_data: { outlet: 'switch.spark' },
};

const states = {
  'switch.spark': { entity_id: 'switch.spark', state: 'on', attributes: { friendly_name: 'Spark' } },
};

async function mountButton(page: Page): Promise<void> {
  await page.goto('/e2e/fixture.html');
  await page.waitForFunction(() => (window as any).fixtureReady === true);
  await page.evaluate(
    ({ config, states }) => (window as any).mount({ tag: 'press-and-hold-button-card', config, states }),
    { config, states },
  );
}

async function buttonCenter(page: Page): Promise<{ x: number; y: number }> {
  const box = await page.locator('press-and-hold-button-card .button').boundingBox();
  if (!box) throw new Error('The button has no bounding box');
  return { x: box.x + box.width / 2, y: box.y + box.height / 2 };
}

const calls = (page: Page) => page.evaluate(() => (window as any).calls);

test('holding the button for its hold duration calls its service once', async ({ page }) => {
  await mountButton(page);
  const { x, y } = await buttonCenter(page);
  await page.mouse.move(x, y);
  await page.mouse.down();
  await expect.poll(() => calls(page), { timeout: HOLD_MS * 4 }).toHaveLength(1);
  await page.mouse.up();
  expect(await calls(page)).toEqual([
    {
      domain: 'script',
      service: 'toggle_spark',
      data: { outlet: 'switch.spark' },
      target: { entity_id: 'switch.spark' },
    },
  ]);
});

test('releasing the button before its hold duration calls nothing', async ({ page }) => {
  await mountButton(page);
  const { x, y } = await buttonCenter(page);
  await page.mouse.move(x, y);
  await page.mouse.down();
  await page.waitForTimeout(HOLD_MS * 0.4);
  await page.mouse.up();
  await page.waitForTimeout(HOLD_MS * 2);
  expect(await calls(page)).toEqual([]);
});

test('the button shows off after its entity turns off', async ({ page }) => {
  await mountButton(page);
  await page.evaluate(() => (window as any).setState('switch.spark', 'off'));
  await expect(page.locator('press-and-hold-button-card .button')).toHaveClass(/\boff\b/);
});

test('moving past the movement tolerance during a hold calls nothing', async ({ page }) => {
  await mountButton(page);
  const { x, y } = await buttonCenter(page);
  await page.mouse.move(x, y);
  await page.mouse.down();
  await page.mouse.move(x + 60, y, { steps: 5 });
  await page.waitForTimeout(HOLD_MS * 2);
  await page.mouse.up();
  expect(await calls(page)).toEqual([]);
});
