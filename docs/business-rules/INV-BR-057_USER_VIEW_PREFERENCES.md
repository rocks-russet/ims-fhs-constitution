# INV-BR-057 — Inventory User View Preferences

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Inventory Explorer remembers user-specific preferred Grid/List mode.
2. It may remember visible columns, column order, sort, and approved filter presets.
3. Personal preference does not change another user's view.
4. Invalid/deprecated fields are safely ignored when restoring an old preference.
5. Users can reset to system defaults.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
