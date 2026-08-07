# CODE-017 — Theme & Design Token Rules

## Mandatory Rule
All IMS FHS frontend implementation must support DS-023 Theme & Appearance System.

## Prohibited
Component-level visual code must not rely on hard-coded theme-specific values for ordinary semantic UI.

Example prohibited pattern:

```css
.inventory-card {
  background: #ffffff;
  color: #000000;
}
```

when those values represent general surface/text roles.

## Required
Use semantic tokens.

Example:

```css
.inventory-card {
  background: var(--bg-surface);
  color: var(--text-primary);
  border-color: var(--border-default);
}
```

Equivalent Tailwind/theme abstractions are acceptable when they resolve from the approved semantic design system.

## Component Contract
Reusable components must consume semantic roles, including:

- Button
- Input
- Table
- Modal
- Drawer
- Badge
- Toast
- Stepper
- Timeline
- Summary Card
- Financial Card
- Chart
- Loading/Skeleton
- Empty/Error state

Feature screens must not fork a private color system.

## Semantic Colors
Never use accent color to impersonate:
- success
- warning
- danger
- negative financial amount
- positive financial amount

Semantic state meaning outranks personalization.

## Theme Switch
Theme changes:
- must not reload the application
- must not clear forms/drafts
- must not reset Explorer filters
- must not mutate business state

## System Theme
`SYSTEM` mode should react to supported browser/OS theme changes during the active application session when practical.

## Preference Bootstrap
Resolve theme as early as safely possible to minimize Light/Dark flash.

## Testing
Every reusable visual component must be verified at minimum in:
- Light + Comfortable
- Dark + Comfortable
- Light + Compact where density matters
- Dark + Compact where density matters

Financial colors, status states, focus rings, disabled controls, selected rows, modal overlays, charts, and validation states require explicit Dark-theme review.

## Accessibility
Theme implementation must preserve contrast and visible focus.
Respect reduced-motion preferences.
