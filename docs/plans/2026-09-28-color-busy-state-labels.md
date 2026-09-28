# Plan: button color, busy lockout, and state labels

Requested 2026-09-28 for the DGX Spark power buttons in the user's Home Assistant (homeassistant-configs, `docs/reference/dgx-spark-power.md`).

## Baseline (2026-09-28, on `v1.1.3`, commit 442266b)

| Check | Command | Result |
|---|---|---|
| Lint | `pnpm run lint` | exit 0, no findings |
| Typecheck | `pnpm run typecheck` | exit 0 |
| Build | `pnpm run build` | exit 0, one warning: Rollup `sourcemap` option not set |
| Tests | none | 0 tests exist |

`v1.1.3` is `main` plus two commits (Actions permissions fix, version bump) that were tagged and released but never pushed to `main`. Work builds on `v1.1.3`, the installed version.

## Revision 2026-09-28: a tile feature, not the round button

On the phone, Stack In Card left a line between the power tile and the round button: it strips each inner card's shadow, background, rounding and margin, but never its border. The user chose (option "a" on 2026-09-28) a new hold-to-toggle control that renders inside a Home Assistant tile as a custom card feature (`window.customCardFeatures`), under the tile's trend line. Each Spark becomes one tile with no seam. The round button card stays as it is.

The user also removed the text labels from the per-Spark controls: color alone shows on/off (filled when on, hollow when off). The all-Sparks control keeps a text label, "Shut down all" / "Turn on all", because it acts on up to four machines.

## The new feature's options

| Option | What it does |
|---|---|
| `entity` | The entity the control acts on and shows (the Spark's outlet switch). The tile's own entity is the power sensor. |
| `color` | The control's "on" fill. |
| `busy_entity` | While this entity is `on`, the control looks busy (dimmed, ring pulsing in its color) and ignores holds. |
| `label_on` / `label_off` | Optional text for each state. Omitted on the per-Spark controls. |
| `hold_duration`, `service`, `service_data` | As on the round button. |

## Walking-skeleton sentence (approved by the user 2026-09-28)

> In a browser, a yellow hold control inside arty1's power tile calls its power action once when held, and a second hold while arty1 is busy calls nothing.

Asserted at the outermost seam: a fixture page served over HTTP, driven by `@playwright/test`. `test.html` stays the manual harness.

## Seams on the thread (outermost first)

1. Fixture page (mounts the feature with a recording mock `hass`)
2. Feature render
3. Hold detection (pointer down, timer, pointer up)
4. Busy gate
5. Action dispatch (reaching `hass.callService`)

## Order

1. Characterization tests for the round button's current behavior, so shared hold logic can move without changing it (hold runs the action; early release does not; moving past the tolerance cancels).
2. Walking-skeleton spec, stubs per seam, RED, then one stub replaced per step.
3. Behaviors, one test then one implementation each: color, busy lockout, busy look, `label_on`/`label_off`.
4. Definition of Done items, one task each: full testing cycle, security scan, build, end-user check on the fixture page and on the live dashboard, release notes.
