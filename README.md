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

- Node.js 16+
- pnpm

### Building

```bash
# Install dependencies
pnpm install

# Build for production
pnpm run build

# Development with watch mode
pnpm run dev

# Type checking
pnpm run typecheck

# Linting
pnpm run lint

# Deploy to Home Assistant (requires HA_HOST environment variable)
pnpm run deploy
```

### Project Structure

```
├── src/
│   ├── press-and-hold-button-card.ts        # Press and hold card
│   └── press-and-hold-button-card-editor.ts # Card configuration editor
├── dist/
│   └── hacs-nerdo-ux.js                     # Build output (generated)
├── hacs.json                                # HACS configuration
├── info.md                                  # HACS info
├── package.json                             # Node dependencies
├── tsconfig.json                            # TypeScript config
├── rollup.config.js                         # Build configuration
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