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

## New options

| Option | What it does |
|---|---|
| `color` | The button's "on" color, in place of the theme's `--primary-color`. |
| `busy_entity` | While this entity is `on`, the button looks busy and ignores holds. |
| `name_on` / `name_off` | The label shown when the entity is on / off. Falls back to `name`. |

## Walking-skeleton sentence (awaiting the user's approval)

> In a browser, a yellow arty1 button labeled "Shut down arty1" calls its power action once when held, and a second hold while arty1 is busy calls nothing.

Asserted at the outermost seam: `test.html` served over HTTP, driven by `@playwright/test`.

## Seams on the thread (outermost first)

1. Test page (`test.html` with its mock `hass`)
2. Card render (`PressAndHoldButtonCard.render`)
3. Hold detection (pointer down, timer, pointer up)
4. Busy gate (new)
5. Action dispatch (`executeAction`, reaching `hass.callService`)

## Order

1. Characterization tests for current behavior (hold runs the action; early release does not; moving past the tolerance cancels).
2. Walking-skeleton spec, stubs per seam, RED, then one stub replaced per step.
3. Behaviors, one test then one implementation each: color, busy lockout, busy look, `name_on`/`name_off`.
4. Definition of Done items, one task each: full testing cycle, security scan, build, end-user check in `test.html`, release notes.
