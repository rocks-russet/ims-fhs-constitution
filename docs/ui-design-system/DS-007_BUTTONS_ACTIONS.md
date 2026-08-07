# DS-007 — Buttons & Actions

## Variants
- Primary
- Secondary
- Tertiary/Ghost
- Destructive
- Icon button

## Rules
1. One visually dominant primary action per action group.
2. Destructive actions require clear labels and confirmation when irreversible.
3. Loading button remains width-stable and shows processing state.
4. Disabled state must explain why when non-obvious.
5. Repeated critical submit is prevented client-side and server-side.
6. Important actions use text labels, not icon-only controls.

## Mutation State
When COMMITTING:
- triggering button disabled
- conflicting controls disabled
- visible progress/stage indicator shown
