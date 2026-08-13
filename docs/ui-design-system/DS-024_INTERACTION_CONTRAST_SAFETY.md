# DS-024 — Interaction Contrast Safety

## Purpose

Prevent hover, focus, active, disabled, selected, and pressed states from producing unreadable foreground/background combinations.

## Rules

1. Every interactive state must preserve readable foreground/background contrast in both Light and Dark themes.
2. Hover/active styling must treat foreground and background as a semantic pair; changing only one side is prohibited when it can reduce legibility.
3. Primary/inverse actions must preserve their inverse foreground/background relationship during interaction.
4. Accent-primary actions must retain a readable foreground on accent backgrounds.
5. Destructive actions must retain explicit danger semantics and readable foreground in every interaction state.
6. Neutral/secondary actions must remain readable against surface/subtle backgrounds.
7. Disabled controls must not acquire hover emphasis that makes them appear enabled.
8. Focus-visible state must remain clearly visible and must not depend on color combinations that disappear in either theme.
9. Feature-level CSS must not override a shared interaction state with a lower-contrast combination.
10. Reusable Button/LinkButton primitives should own the standard interaction-state contract; feature screens should compose variants rather than invent private color behavior.
11. Interaction states must be reviewed in Light and Dark themes before a screen is considered complete.
12. Text links styled as buttons are subject to the same contrast rules as native buttons.

## Required Review Matrix

At minimum verify:
- Primary: default / hover / active / focus / disabled
- Secondary: default / hover / active / focus / disabled
- Ghost/Tertiary: default / hover / active / focus / disabled
- Destructive: default / hover / active / focus / disabled
- LinkButton: default / hover / active / focus / disabled where applicable
- Light and Dark themes

## Invariants

- Interaction feedback must never make an action harder to read.
- Theme personalization must not override semantic readability.
- Visible keyboard focus is mandatory.
