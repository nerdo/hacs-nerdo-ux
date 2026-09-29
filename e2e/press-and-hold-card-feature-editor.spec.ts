import { expect, type Page, test } from '@playwright/test';

// The hold control's visual editor, as Home Assistant's tile editor uses it.
// ha-form itself only exists inside Home Assistant, so these tests check what
// the editor hands to it and what the editor sends back.

const ALL_OPTIONS = [
  'entity',
  'service',
  'service_data',
  'style',
  'color',
  'icon',
  'button_size',
  'label_on',
  'label_off',
  'progress_width',
  'progress_color_on',
  'progress_color_off',
  'cancel_animation',
  'recede_duration',
  'fade_duration',
  'shake_duration',
  'busy_entity',
  'hold_duration',
  'movement_tolerance',
];

async function openFixture(page: Page): Promise<void> {
  await page.goto('/e2e/fixture.html');
  await page.waitForFunction(() => (window as any).fixtureReady === true);
}

// Creates the editor the way the tile editor does, and returns the names of
// every field in its form.
const formFieldNames = (page: Page) =>
  page.evaluate(async () => {
    const feature = customElements.get('press-and-hold-card-feature') as any;
    const editor = await feature.getConfigElement();
    editor.hass = { states: {} };
    editor.setConfig({ type: 'custom:press-and-hold-card-feature', entity: 'switch.x' });
    document.body.appendChild(editor);
    await editor.updateComplete;
    const form = editor.shadowRoot.querySelector('ha-form');
    const names: string[] = [];
    const walk = (schema: any[]) => {
      for (const field of schema) {
        if (field.schema) walk(field.schema);
        else names.push(field.name);
      }
    };
    walk(form.schema);
    return names;
  });

test('the control offers a visual editor', async ({ page }) => {
  await openFixture(page);
  const tag = await page.evaluate(async () => {
    const feature = customElements.get('press-and-hold-card-feature') as any;
    return (await feature.getConfigElement()).tagName.toLowerCase();
  });
  expect(tag).toBe('press-and-hold-card-feature-editor');
});

test("the editor's form covers every option", async ({ page }) => {
  await openFixture(page);
  expect((await formFieldNames(page)).sort()).toEqual([...ALL_OPTIONS].sort());
});

test("the editor passes the form's changes back to the tile editor", async ({ page }) => {
  await openFixture(page);
  const sent = await page.evaluate(async () => {
    const feature = customElements.get('press-and-hold-card-feature') as any;
    const editor = await feature.getConfigElement();
    editor.hass = { states: {} };
    editor.setConfig({ type: 'custom:press-and-hold-card-feature', entity: 'switch.x' });
    document.body.appendChild(editor);
    await editor.updateComplete;
    const received = new Promise<any>((resolve) =>
      editor.addEventListener('config-changed', (event: any) => resolve(event.detail.config)),
    );
    editor.shadowRoot.querySelector('ha-form').dispatchEvent(
      new CustomEvent('value-changed', {
        detail: { value: { entity: 'switch.x', style: 'bar', button_size: 84 } },
      }),
    );
    return received;
  });
  expect(sent).toEqual({
    type: 'custom:press-and-hold-card-feature',
    entity: 'switch.x',
    style: 'bar',
    button_size: 84,
  });
});

test('every field in the editor has a readable label', async ({ page }) => {
  await openFixture(page);
  const labels = await page.evaluate(async () => {
    const feature = customElements.get('press-and-hold-card-feature') as any;
    const editor = await feature.getConfigElement();
    editor.hass = { states: {} };
    editor.setConfig({ type: 'custom:press-and-hold-card-feature', entity: 'switch.x' });
    document.body.appendChild(editor);
    await editor.updateComplete;
    const form = editor.shadowRoot.querySelector('ha-form');
    const result: Record<string, string> = {};
    const walk = (schema: any[]) => {
      for (const field of schema) {
        if (field.schema) walk(field.schema);
        else result[field.name] = form.computeLabel(field);
      }
    };
    walk(form.schema);
    return result;
  });
  for (const [name, label] of Object.entries(labels)) {
    expect(label, `label for ${name}`).toBeTruthy();
    expect(label, `label for ${name}`).not.toBe(name);
  }
});

test("a new control starts on the tile's own entity", async ({ page }) => {
  await openFixture(page);
  const stub = await page.evaluate(() => {
    const feature = customElements.get('press-and-hold-card-feature') as any;
    return feature.getStubConfig({ states: {} }, { entity_id: 'switch.arty1_outlet' });
  });
  expect(stub).toEqual({
    type: 'custom:press-and-hold-card-feature',
    entity: 'switch.arty1_outlet',
  });
});
