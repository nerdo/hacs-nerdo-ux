# Press and Hold Button Card

A customizable Home Assistant Lovelace card that provides press-and-hold functionality for switching entities. Perfect for preventing accidental toggles of important switches by requiring a deliberate hold action.

## Features

- **Press and Hold**: Requires holding the button for a configurable duration before toggling
- **Visual Feedback**: Animated progress ring shows countdown progress
- **Configurable Duration**: Set custom hold duration (default 3 seconds)
- **Entity Support**: Works with any Home Assistant switch, light, or other toggleable entity
- **Responsive Design**: Clean, modern interface that adapts to your theme
- **TypeScript**: Built with TypeScript for better reliability and development experience

## Installation

### HACS (Recommended)

1. Install HACS if you haven't already
2. Go to HACS → Frontend
3. Click the "+" button and search for "Press and Hold Button Card"
4. Install the card
5. Refresh your browser

### Manual Installation

1. Download `press-and-hold-button-card.js` from the [latest release](https://github.com/yourusername/homeassistant-press-and-hold-button/releases)
2. Copy it to your `www` folder in your Home Assistant config directory
3. Add the resource to your Lovelace configuration:

```yaml
resources:
  - url: /local/press-and-hold-button-card.js
    type: module
```

## Configuration

### Basic Configuration

```yaml
type: custom:press-and-hold-button-card
entity: switch.living_room_lights
name: "Living Room Lights"
```

### Advanced Configuration

```yaml
type: custom:press-and-hold-button-card
entity: switch.critical_system
name: "Critical System"
icon: mdi:alert
hold_duration: 5000  # 5 seconds
show_state: true
```

### Configuration Options

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `type` | string | **Required** | `custom:press-and-hold-button-card` |
| `entity` | string | **Required** | Home Assistant entity ID |
| `name` | string | Entity name | Display name for the button |
| `icon` | string | Entity icon | Icon to display (mdi:* format) |
| `hold_duration` | number | `3000` | Hold duration in milliseconds |
| `show_state` | boolean | `true` | Whether to show the entity state |

## Usage

1. **Tap and Hold**: Press and hold the button to start the countdown
2. **Visual Progress**: Watch the progress ring fill up during the countdown
3. **Release Early**: Release before completion to cancel the action
4. **Complete Hold**: Hold until the progress completes to toggle the entity

## Development

### Prerequisites

- Node.js 16+
- npm or yarn

### Building

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Development with watch mode
npm run dev

# Type checking
npm run typecheck

# Linting
npm run lint
```

### Project Structure

```
├── src/
│   └── press-and-hold-button-card.ts  # Main TypeScript source
├── dist/                              # Build output (generated)
├── hacs.json                          # HACS configuration
├── info.md                           # HACS info
├── package.json                      # Node dependencies
├── tsconfig.json                     # TypeScript config
├── rollup.config.js                  # Build configuration
└── README.md                         # This file
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

If you encounter issues or have feature requests, please [open an issue](https://github.com/yourusername/homeassistant-press-and-hold-button/issues) on GitHub.