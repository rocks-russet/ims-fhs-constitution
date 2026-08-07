# DS-023 — Theme & Appearance System

## Purpose
Define the global appearance system for IMS FHS v2 so every reusable component and every screen can render consistently across supported themes and user density preferences.

## Supported Theme Modes
Every authenticated user may select:

- `LIGHT`
- `DARK`
- `SYSTEM`

`SYSTEM` follows the browser/operating-system color-scheme preference.

Changing theme must not require a full page reload.

## Theme Scope
Theme selection applies consistently to:

- application shell
- Explorer screens
- Detail screens
- forms
- tables
- cards
- status badges
- modal/dialog
- drawer
- popover/tooltip
- loading/skeleton
- charts
- stepper/timeline
- toast/banner
- file/image viewer
- approval/finance UI
- generated in-app screen previews

Theme does not change business meaning, permissions, data, or workflow behavior.

## Semantic Design Tokens
Components must consume semantic tokens rather than hard-coded visual values.

Required token families include:

### Surface
- `bg.canvas`
- `bg.surface`
- `bg.surfaceSubtle`
- `bg.surfaceRaised`
- `bg.overlay`

### Text
- `text.primary`
- `text.secondary`
- `text.muted`
- `text.inverse`
- `text.link`

### Border / Focus
- `border.default`
- `border.strong`
- `focus.ring`

### Interactive Accent
- `accent.primary`
- `accent.hover`
- `accent.active`
- `accent.subtle`

### Semantic State
- `success.*`
- `warning.*`
- `danger.*`
- `info.*`
- `pending.*`
- `neutral.*`

### Financial
- `finance.positive`
- `finance.negative`
- `finance.cost`
- `finance.market`
- `finance.neutral`

The implementation may express these as CSS custom properties, Tailwind semantic aliases, or equivalent design-token technology.

## Dark Mode Rules
Dark mode is not a color inversion.

Dark mode must explicitly define:

- canvas/surface hierarchy
- raised surface contrast
- border visibility
- text contrast
- table row hover/selection
- selected tabs/filters
- positive/negative finance values
- status badge contrast
- chart palettes
- modal/drawer overlays
- focus states
- disabled states
- skeleton/loading contrast
- image/card treatment

Card/product images must retain their actual image colors and must not receive destructive theme filters.

## Density
Supported density modes:

- `COMFORTABLE`
- `COMPACT`

Density affects layout/presentation such as:

- table row height
- vertical spacing
- toolbar spacing
- form control height
- card internal spacing

Density must never hide required business information.

## Table Font Size
Supported table font preferences:

- `NORMAL`
- `SMALL`

This affects data-dense Explorer tables only unless a later screen explicitly opts in.

## Motion
Supported preference:

- `NORMAL`
- `REDUCED`

Reduced motion removes or shortens non-essential animation and respects `prefers-reduced-motion`.

## Accent
Accent-color support may be enabled through approved semantic presets.

Baseline supported presets:

- `BLUE` (default)
- `EMERALD`
- `ORANGE`

Accent affects interactive emphasis such as selected tabs, focus state, selected controls, and active filters. It must not override semantic success/warning/danger meanings.

## Radius Preference
Optional presentation preference:

- `COMFORT`
- `SHARP`

It may alter component radius tokens only. It must not create different component behavior.

## Persistence
Appearance is stored per user.

After successful authentication the application resolves:

1. persisted user preference;
2. `SYSTEM` preference against browser/OS theme;
3. safe application default if a preference is missing or invalid.

A user's appearance settings never affect another user's workspace.

## No Flash Requirement
Frontend bootstrap should avoid an incorrect-theme flash when practical by applying resolved theme state as early as safely possible.

## Accessibility
Both Light and Dark themes must meet approved contrast requirements.

Color is never the sole carrier of:

- status
- profit/loss
- validation
- selection
- workflow state

## Mockup Rule
All new approved HTML mockups should be structured to support semantic tokens and theme switching.

Already-approved mockups do not lose approval solely because their first prototype was Light-only; their production specification inherits this DS-023 requirement.
