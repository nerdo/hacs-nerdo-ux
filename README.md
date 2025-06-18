# Nerdo UX

A collection of custom Home Assistant Lovelace cards focused on enhancing user experience and preventing accidental actions.

[![HACS Badge](https://img.shields.io/badge/HACS-Default-41BDF5.svg?style=for-the-badge)](https://github.com/hacs/integration)
[![GitHub Release](https://img.shields.io/github/release/nerdo/hacs-nerdo-ux.svg?style=for-the-badge)](https://github.com/nerdo/hacs-nerdo-ux/releases)

## Cards Included

### Press and Hold Button Card

A customizable Lovelace card that provides press-and-hold functionality for switching entities. Perfect for preventing accidental toggles of important switches by requiring a deliberate hold action.

**Features:**
- **Press and Hold**: Requires holding the button for a configurable duration before toggling
- **Visual Feedback**: Animated progress ring shows countdown progress with color coding
- **Configurable Duration**: Set custom hold duration (default 3 seconds)
- **Entity Support**: Works with any Home Assistant switch, light, or other toggleable entity
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
hold_duration: 5000  # 5 seconds
show_name: true
show_state: true
show_icon: true
icon_height: 100
```

#### Configuration Options

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `type` | string | **Required** | `custom:press-and-hold-button-card` |
| `entity` | string | **Required** | Home Assistant entity ID |
| `name` | string | Entity name | Display name for the button |
| `icon` | string | Entity icon | Icon to display (mdi:* format) |
| `hold_duration` | number | `3000` | Hold duration in milliseconds (500-10000) |
| `show_name` | boolean | `true` | Whether to show the entity name |
| `show_state` | boolean | `true` | Whether to show the entity state |
| `show_icon` | boolean | `true` | Whether to show the entity icon |
| `icon_height` | number | `80` | Icon height in pixels (20-150) |

## Usage

### Press and Hold Button Card

1. **Tap and Hold**: Press and hold the button to start the countdown
2. **Visual Progress**: Watch the progress ring fill up during the countdown
   - **Green ring**: When turning the entity ON
   - **Orange ring**: When turning the entity OFF
3. **Release Early**: Release before completion to cancel the action
4. **Complete Hold**: Hold until the progress completes to toggle the entity

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