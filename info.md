A collection of custom Home Assistant Lovelace cards focused on enhancing user experience and preventing accidental actions.

## Cards Included

### Press and Hold Button Card

A customizable Lovelace card that provides press-and-hold functionality for switching entities. Perfect for preventing accidental toggles of important switches by requiring a deliberate hold action with visual feedback.

## Features

- **Press and Hold**: Requires holding the button for a configurable duration before toggling
- **Visual Feedback**: Animated progress ring shows countdown progress with color coding
- **Configurable Duration**: Set custom hold duration (default 3 seconds, range 500ms-10s)
- **Customizable Display**: Show/hide name, state, and icon with configurable icon sizes
- **Color Coded Progress**: Green ring for turning ON, orange ring for turning OFF
- **Entity Support**: Works with any Home Assistant switch, light, or other toggleable entity
- **Responsive Design**: Clean, modern interface that adapts to your theme

## Installation

Install via HACS by searching for "Nerdo UX" or manually by placing the `hacs-nerdo-ux.js` file in your `www` folder.

## Configuration

### Press and Hold Button Card

```yaml
type: custom:press-and-hold-button-card
entity: switch.example_switch
name: "Press & Hold Switch"
hold_duration: 3000  # milliseconds (optional, defaults to 3000)
show_name: true      # optional, defaults to true
show_state: true     # optional, defaults to true
show_icon: true      # optional, defaults to true
icon_height: 80      # optional, defaults to 80px
```