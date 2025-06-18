A customizable Home Assistant Lovelace card that provides press-and-hold functionality for switching entities. The card features a configurable countdown timer with visual animation before executing the toggle action.

## Features

- Press and hold to toggle switches/entities
- Configurable hold duration (default 3 seconds)
- Animated countdown progress indicator
- Customizable styling and colors
- Works with any Home Assistant switch entity

## Installation

Install via HACS or manually by placing the JavaScript file in your `www` folder.

## Configuration

```yaml
type: custom:press-and-hold-button-card
entity: switch.example_switch
name: "Press & Hold Switch"
hold_duration: 3000  # milliseconds (optional, defaults to 3000)
```