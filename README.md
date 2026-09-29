# Nerdo UX

A collection of custom Home Assistant Lovelace cards focused on enhancing user experience and preventing accidental actions.

[![HACS Badge](https://img.shields.io/badge/HACS-Default-41BDF5.svg?style=for-the-badge)](https://github.com/hacs/integration)
[![GitHub Release](https://img.shields.io/github/release/nerdo/hacs-nerdo-ux.svg?style=for-the-badge)](https://github.com/nerdo/hacs-nerdo-ux/releases)

## Cards Included

### Press and Hold Button Card

A customizable Lovelace card that provides press-and-hold functionality for switching entities. Perfect for preventing accidental toggles of important switches by requiring a deliberate hold action.

| Normal State | Press & Hold Action | Configuration |
|--------------|-------------------|---------------|
| ![Normal State](images/button-normal-state.png) | ![Press & Hold](images/button-press-hold.png) | ![Configuration](images/button-configuration.png) |

**Features:**
- **Press and Hold**: Requires holding the button for a configurable duration before executing actions
- **Smart Default Actions**: Automatically detects entity type and executes appropriate default actions
  - Button entities → Press service (button.press)
  - Light/Switch entities → Toggle action
  - Cover entities → Toggle action (open/close)
  - Other entities → Show more info dialog
- **Flexible Action System**: Choose from multiple action types:
  - **Default (Smart)**: Intelligent action based on entity domain
  - **Toggle**: Force toggle behavior for compatible entities
  - **More Info**: Show entity details dialog
  - **Call Service**: Execute custom Home Assistant services with parameters
- **Custom Service Calls**: Execute any Home Assistant service with JSON parameters
- **Visual Feedback**: Animated progress ring shows countdown progress with color coding
- **Configurable Duration**: Set custom hold duration (default 1 second, range 500ms-10s)
- **Movement Tolerance**: Cancel action if finger/mouse moves too far during hold
- **Entity Support**: Works with any Home Assistant entity (buttons, switches, lights, covers, etc.)
- **Customizable Display**: Show/hide name, state, and icon with configurable icon sizes
- **Responsive Design**: Clean, modern interface that adapts to your theme
- **TypeScript**: Built with TypeScript for better reliability and development experience

### Press and Hold Tile Feature

A hold-to-act control that sits inside a Home Assistant **tile card**, under the tile's own content. Use it when a tile already shows something about a device (its power draw, say) and you want the device's switch in the same card, protected from accidental taps.

- **Hold to act**: nothing happens until the hold completes. Releasing early, or moving past the tolerance, cancels it.
- **Looks like the button card**: a round button whose progress ring fills during the hold (green when turning on, orange when turning off). `style: bar` gives a full-width bar variant instead.
- **Color shows state**: filled in its color while its entity is on, hollow while off.
- **Busy lockout**: while a `busy_entity` is on, the control dims, pulses, and ignores holds.
- **Optional labels**: `label_on` and `label_off` show text for each state.
- **Its own entity**: the control acts on `entity`, which need not be the tile's entity.

## Installation

### HACS (Recommended)

1. Install HACS if you haven't already
2. Go to HACS → Frontend
3. Click the "+" button and search for "Nerdo UX"
4. Install the collection
5. Refresh your browser

### Manual Installation

1. Download `hacs-nerdo-ux.js` from the [latest release](https://github.com/nerdo/hacs-nerdo-ux/releases)
2. Copy it to your `www` folder in your Home Assistant config directory
3. Add the resource to your Lovelace configuration:

```yaml
resources:
  - url: /local/hacs-nerdo-ux.js
    type: module
```

## Configuration

### Press and Hold Button Card

#### Basic Configuration

```yaml
type: custom:press-and-hold-button-card
entity: switch.living_room_lights
name: "Living Room Lights"
```

#### Advanced Configuration

```yaml
type: custom:press-and-hold-button-card
entity: switch.critical_system
name: "Critical System"
icon: mdi:alert
hold_duration: 2000  # 2 seconds
movement_tolerance: 15  # pixels
hold_action: default  # Smart action based on entity type
show_name: true
show_state: true
show_icon: true
icon_height: 100
cap_style: rounded
```

#### Custom Service Configuration

```yaml
type: custom:press-and-hold-button-card
entity: light.living_room
name: "Living Room Light"
hold_action: call-service
service: light.turn_on
service_data:
  brightness: 128
  color_name: "blue"
  transition: 2
```

#### Configuration Options

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `type` | string | **Required** | `custom:press-and-hold-button-card` |
| `entity` | string | **Required** | Home Assistant entity ID |
| `name` | string | Entity name | Display name for the button |
| `icon` | string | Entity icon | Icon to display (mdi:* format) |
| `hold_duration` | number | `1000` | Hold duration in milliseconds (500-10000) |
| `movement_tolerance` | number | `20` | Movement tolerance in pixels before canceling hold |
| `hold_action` | string | `default` | Action type: `default`, `toggle`, `more-info`, `call-service` |
| `service` | string | - | Service to call when `hold_action` is `call-service` (e.g., `light.turn_on`) |
| `service_data` | object | `{}` | Service parameters as JSON object when using `call-service` |
| `show_name` | boolean | `true` | Whether to show the entity name |
| `show_state` | boolean | `false` | Whether to show the entity state |
| `show_icon` | boolean | `true` | Whether to show the entity icon |
| `icon_height` | number | `80` | Icon height in pixels (20-150) |
| `cap_style` | string | `rounded` | Progress ring cap style: `rounded` or `none` |

### Press and Hold Tile Feature

Add it under a tile card's `features`:

```yaml
type: tile
entity: sensor.arty1_outlet_power
color: yellow
features:
  - type: custom:press-and-hold-card-feature
    entity: switch.arty1_outlet
    color: yellow
    busy_entity: input_boolean.arty1_outlet_busy
    service: script.nerdo_dgx_spark_toggle_power
    service_data:
      outlet: switch.arty1_outlet
```

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `type` | string | **Required** | `custom:press-and-hold-card-feature` |
| `entity` | string | **Required** | The entity whose state the control shows (filled when `on`, hollow otherwise) |
| `color` | string | primary color | A Home Assistant color name (`yellow`, `deep-orange`, ...) or any CSS color |
| `service` | string | - | Service to call when a hold completes (e.g. `script.my_script`) |
| `service_data` | object | `{}` | Data for the service. No `target` is added |
| `busy_entity` | string | - | While this entity is `on`, the control shows busy and ignores holds |
| `label_on` / `label_off` | string | - | Text shown while `entity` is on / off. No text when omitted |
| `icon` | string | - | Icon shown on the control (e.g. `mdi:power`). The control is blank when omitted |
| `style` | string | `ring` | `ring`: a round button with a progress ring that fills during the hold, like the press-and-hold button card, with the label beside it. `bar`: a full-width bar with a fill that sweeps across, label inside |
| `hold_duration` | number | `1000` | Hold duration in milliseconds |
| `movement_tolerance` | number | `20` | Pixels the pointer may move before the hold is cancelled |

## Usage

### Press and Hold Button Card

#### Basic Operation
1. **Press and Hold**: Press and hold the button to start the countdown
2. **Visual Progress**: Watch the progress ring fill up during the countdown
   - **Green ring**: When turning the entity ON (or executing default action)
   - **Orange ring**: When turning the entity OFF
3. **Movement Cancellation**: Moving your finger/mouse beyond the tolerance cancels the action
4. **Release Early**: Release before completion to cancel the action
5. **Complete Hold**: Hold until the progress completes to execute the configured action

#### Action Types
- **Default (Smart)**: Automatically determines the best action based on entity type
  - Button entities: Calls `button.press` service
  - Light/Switch/Input Boolean: Toggles the entity
  - Cover entities: Toggles open/close
  - Other entities: Shows more info dialog
- **Toggle**: Forces toggle behavior (works with lights, switches, covers, fans, media players)
- **More Info**: Opens the entity's more info dialog
- **Call Service**: Executes a custom Home Assistant service with optional parameters

#### Custom Service Examples
```yaml
# Turn on light with specific brightness and color
hold_action: call-service
service: light.turn_on
service_data:
  brightness: 200
  rgb_color: [255, 0, 0]

# Set thermostat temperature
hold_action: call-service
service: climate.set_temperature
service_data:
  temperature: 72

# Play media on speaker
hold_action: call-service
service: media_player.play_media
service_data:
  media_content_type: "music"
  media_content_id: "spotify:playlist:37i9dQZF1DX0XUsuxWHRQd"
```

## Development

### Prerequisites

- [Bun](https://bun.sh)

### Building and testing

```bash
# Install dependencies, and the browser the end-to-end tests drive
bun install
bunx playwright install chromium

# All tests: unit tests (bun test), then end-to-end tests (Playwright, which builds the bundle first)
bun run test

# Just one tier
bun run test:unit
bun run test:e2e

# Type checking
bun run typecheck

# Lint and format check (Biome)
bun run lint

# Build for production
bun run build

# Rebuild on change
bun run dev

# Deploy to Home Assistant (requires HA_HOST environment variable)
bun run deploy
```

### Project Structure

```
├── src/
│   ├── press-and-hold-button-card.ts        # Press and hold card (bundle entry)
│   ├── press-and-hold-button-card-editor.ts # Card configuration editor
│   ├── press-and-hold-card-feature.ts       # Press and hold tile feature
│   ├── hold-controller.ts                   # Hold detection shared by both
│   └── css-color.ts                         # Color names to theme variables
├── e2e/                                     # Playwright tests and their fixture page
├── dist/
│   └── hacs-nerdo-ux.js                     # Build output (generated)
├── biome.json                               # Lint and format config
├── playwright.config.ts                     # End-to-end test config
├── hacs.json                                # HACS configuration
├── info.md                                  # HACS info
├── package.json                             # Dependencies and scripts
├── tsconfig.json                            # TypeScript config for src
├── tsconfig.e2e.json                        # TypeScript config for the tests
├── test.html                                # Manual test page
└── README.md                                # This file
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## Roadmap

- Additional card types focused on UX improvements
- Enhanced accessibility features
- More customization options
- Performance optimizations

## License

MIT License - see LICENSE file for details

## Support

If you encounter issues or have feature requests, please [open an issue](https://github.com/nerdo/hacs-nerdo-ux/issues) on GitHub.