A collection of custom Home Assistant Lovelace cards focused on enhancing user experience and preventing accidental actions.

## Included

### Press and Hold Button Card

A card that acts only after a deliberate press and hold, with a progress ring that fills during the hold: green when turning on, orange when turning off.

- Hold duration is configurable (default 1 second, 500 ms to 10 s).
- Smart default action by entity type, or toggle, more info, or any service call.
- Show or hide the name, state, and icon, with a configurable icon size.
- Visual editor.

### Press and Hold Tile Feature

The same hold-to-act control, inside a tile card.

- A round button with a progress ring (default), or a full-width bar.
- Filled in its color while its entity is on, hollow while off.
- Configurable button size, ring thickness, progress colors, icon, and labels.
- A released hold recedes, fades, shakes, or a combination, each with its own duration.
- Locks while a busy entity is on.
- A hold toggles the entity, calls any service, or opens the entity's details.
- Visual editor.

## Installation

Install via HACS by searching for "Nerdo UX", or manually by placing `hacs-nerdo-ux.js` in your `www` folder.

## Configuration

```yaml
type: custom:press-and-hold-button-card
entity: switch.example_switch
name: "Press & Hold Switch"
hold_duration: 1000  # milliseconds (optional, defaults to 1000)
show_name: true      # optional, defaults to true
show_state: false    # optional, defaults to false
show_icon: true      # optional, defaults to true
icon_height: 80      # optional, defaults to 80px
```

```yaml
type: tile
entity: switch.example_switch
features:
  - type: custom:press-and-hold-card-feature
    entity: switch.example_switch
    icon: mdi:power  # a hold toggles the entity; set service to call something else
```

Every option is in the [README](https://github.com/nerdo/hacs-nerdo-ux#readme).
