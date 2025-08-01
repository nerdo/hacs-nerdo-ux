# Home Assistant Press and Hold Button Card - Project Guide

This project contains a Home Assistant Lovelace card that implements press-and-hold functionality with a flexible action system.

## Project Overview

**Type**: Home Assistant Custom Lovelace Card
**Framework**: LitElement (Lit 2.0) with TypeScript
**Build System**: Rollup with TypeScript plugin
**Package Manager**: pnpm
**Target**: Home Assistant Frontend Integration

## Key Architecture Decisions

### Smart Action System
The card implements a domain-aware action system that automatically selects appropriate default actions:
- **Button entities** → `button.press` service (not toggle)
- **Light/Switch entities** → Toggle action
- **Cover entities** → Toggle action (open/close)
- **Other entities** → More info dialog

### Flexible Configuration
Users can override default behavior with four action types:
1. **Default (Smart)** - Domain-based intelligent action selection
2. **Toggle** - Force toggle behavior for compatible entities
3. **More Info** - Show entity details dialog  
4. **Call Service** - Execute custom Home Assistant services with JSON parameters

### Technical Implementation
- **Press and Hold Detection** - Uses PointerEvent API with movement tolerance
- **Visual Feedback** - Animated SVG progress ring with duration-based timing
- **Home Assistant Integration** - Uses `custom-card-helpers` for proper action dispatching
- **Configuration UI** - Dynamic schema-based editor with conditional field display

## File Structure

```
src/
├── press-and-hold-button-card.ts          # Main card component
├── press-and-hold-button-card-editor.ts   # Configuration UI editor
├── constants.ts                           # Default configuration values
└── build-info.ts                         # Build timestamp injection

dist/
└── hacs-nerdo-ux.js                      # Built output for Home Assistant

test.html                                  # Standalone test environment
```

## Development Environment

### Key Dependencies
- **lit**: Web Components framework
- **custom-card-helpers**: Home Assistant Lovelace integration utilities
- **rollup**: Build system with TypeScript support

### Build Configuration
- **Source Maps**: Generated for debugging
- **TypeScript**: Strict mode enabled with DOM libs
- **Rollup Plugins**: Node resolve, TypeScript compilation, Terser minification

### Testing
- **test.html**: Complete mock Home Assistant environment
- **Mock Services**: Simulates Home Assistant state management and service calls
- **Visual Testing**: Screenshots and browser automation with Playwright

## Implementation Notes

### Action Execution Flow
1. User initiates press-and-hold gesture
2. Visual progress animation begins with configured duration
3. Movement tolerance monitoring prevents accidental activation
4. On completion, action type determines execution path:
   - **Default**: Domain detection → appropriate service call
   - **Toggle**: Direct toggle via `handleAction`
   - **More Info**: Entity dialog via `handleAction`
   - **Call Service**: Custom service with validated parameters

### Configuration Schema
The editor uses dynamic schema building to show/hide fields based on action selection:
- Base fields always visible (entity, duration, etc.)
- Service fields conditionally displayed for `call-service` action
- JSON validation for service data parameters
- Domain-aware default action labeling

### Error Handling
- Service format validation (domain.service pattern)
- JSON parsing validation for service data
- Entity existence checking
- Graceful fallback for unsupported entity types

## HACS Integration

### File Requirements
- **hacs.json**: HACS repository configuration
- **info.md**: Repository description for HACS
- **Built JavaScript**: Single file distribution (`dist/hacs-nerdo-ux.js`)

### Release Process
1. Build production version: `pnpm run build`
2. Test functionality with test.html
3. Commit changes with proper version control
4. Tag release for HACS distribution

## Common Development Tasks

### Adding New Action Types
1. Update TypeScript interfaces in main card file
2. Add action option to editor schema
3. Implement execution logic in `executeAction()` method
4. Update documentation and configuration examples

### Modifying Visual Behavior
- **Progress Ring**: SVG animation in CSS with CSS custom properties
- **Styling**: CSS-in-JS using Lit's `css` template literal
- **Theming**: Uses Home Assistant CSS custom properties

### Testing Changes
1. Use `test.html` for immediate feedback
2. Update mock entities/services as needed
3. Test all action types and edge cases
4. Verify console logs show clean execution

## Test Environment (test.html)

### Overview
The `test.html` file provides a complete standalone testing environment that simulates the Home Assistant frontend without requiring a full HA installation. This is essential for rapid development and debugging.

### Key Features
- **Mock Home Assistant Object**: Complete `hass` object simulation with entity states
- **Service Call Mocking**: Intercepts and logs all service calls with state updates
- **Configuration UI**: Live configuration panel to test all card options
- **Visual Testing**: Real-time visual feedback and state changes
- **Console Logging**: Detailed execution logs for debugging

### Testing Press and Hold with Shadow DOM

Since the card uses Shadow DOM (LitElement), testing the button requires accessing the shadow root:

#### Manual Testing
1. Open `test.html` in browser
2. Open browser dev tools (F12)
3. Press and hold the button to trigger the action

#### Programmatic Testing (Browser Console)
```javascript
// Get the card element
const card = document.getElementById('testCard');

// Access the button through shadow DOM
const button = card.shadowRoot.querySelector('.button');

// Simulate pointer down event
const pointerDownEvent = new PointerEvent('pointerdown', {
  pointerId: 1,
  clientX: 947,
  clientY: 888,
  bubbles: true
});
button.dispatchEvent(pointerDownEvent);

// Wait for hold duration, then trigger pointer up
setTimeout(() => {
  const pointerUpEvent = new PointerEvent('pointerup', {
    pointerId: 1,
    clientX: 947,
    clientY: 888,
    bubbles: true
  });
  button.dispatchEvent(pointerUpEvent);
}, 1200); // Wait longer than hold duration
```

#### Playwright Browser Automation
The project uses Playwright for automated testing:
```javascript
// Navigate to test page
await page.goto('file:///path/to/test.html');

// Access shadow DOM and simulate press-hold
await page.evaluate(() => {
  const card = document.getElementById('testCard');
  const button = card.shadowRoot.querySelector('.button');
  
  // Dispatch pointer events
  button.dispatchEvent(new PointerEvent('pointerdown', {
    pointerId: 1, clientX: 947, clientY: 888, bubbles: true
  }));
  
  setTimeout(() => {
    button.dispatchEvent(new PointerEvent('pointerup', {
      pointerId: 1, clientX: 947, clientY: 888, bubbles: true
    }));
  }, 1200);
});
```

### Mock Environment Details

#### Mock Entities
The test environment includes various entity types:
```javascript
// Button entity (tests smart default press action)
'button.ratgdo_door': {
  entity_id: 'button.ratgdo_door',
  state: 'idle',
  attributes: { friendly_name: 'Ratgdo Door Button', icon: 'mdi:garage-variant' }
}

// Switch entity (tests toggle action)
'switch.test': {
  entity_id: 'switch.test', 
  state: 'off',
  attributes: { friendly_name: 'Test Switch', icon: 'mdi:lightbulb' }
}
```

#### Mock Service Calls
```javascript
// Mock callService function handles all Home Assistant service calls
callService: function(domain, service, data) {
  data = data || {}; // Null safety for console error prevention
  const entityId = data.entity_id || data.entity;
  
  // Log the service call
  log(`Called service: ${domain}.${service} on ${entityId || 'no entity'}`);
  
  // Update mock entity states based on service
  // Supports press, toggle, turn_on, turn_off, etc.
}
```

#### Mock handleAction Function
```javascript
// Intercepts handleAction calls from custom-card-helpers
window.handleAction = function(element, hass, config, actionType) {
  // Parse action configuration and execute appropriate mock behavior
  // Supports all action types: toggle, call-service, more-info
}
```

### Testing Different Scenarios

#### Action Type Testing
1. **Default Action**: Select different entity types to test smart defaults
2. **Toggle Action**: Test with compatible entities (lights, switches, covers)
3. **Call Service**: Enter custom services like `light.turn_on` with JSON data
4. **More Info**: Verify dialog trigger logging

#### Configuration Testing
- Modify hold duration and test timing
- Adjust movement tolerance and test cancellation
- Change entity types and verify smart defaults
- Test invalid service formats and JSON parsing

#### Error Scenario Testing
- Invalid entity IDs
- Malformed JSON in service data
- Unsupported action types
- Service call failures

### Console Error Prevention
The mock environment has been hardened to prevent console errors:
- Null safety in `callService` function: `data = data || {}`
- Proper entity ID handling: `data.entity_id || data.entity`
- Graceful fallbacks for missing entities and services

### Debugging Tips
1. **Check Console**: All actions and state changes are logged
2. **Watch Network**: No actual network calls should occur
3. **Inspect States**: Mock entity states update in real-time
4. **Visual Feedback**: Button should show progress ring and state changes
5. **Error Monitoring**: Console should remain clean during all operations

## Recent Major Changes

### Action System Overhaul
- Replaced simple toggle with intelligent action system
- Added custom service call functionality with JSON parameters
- Implemented domain-aware default action detection
- Enhanced configuration UI with conditional field display

### Technical Improvements
- Fixed console errors in test environment
- Improved error handling and validation
- Enhanced TypeScript type safety
- Better integration with Home Assistant action system

---

This guide provides context for future development and maintenance of the press-and-hold button card system.