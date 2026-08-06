# CON-BR-028 — Contact Settings

## Feature Origin

Contact Settings menu.

## Purpose

Govern configurable Contact Manager reference data and formatting.

## Rules

1. Settings include default country, phone normalization policy, address template, marketplace registry, tag registry, and permitted labels.
2. Settings are server-authoritative.
3. Setting changes are versioned and auditable.
4. Historical stored values and transaction snapshots are not rewritten by later configuration changes.
5. Invalid or inactive marketplace and tag entries cannot be newly selected.
6. Changes require authorized roles.
7. Configuration validation runs before activation.
8. Import and UI behavior must use the same active configuration version.

## Invariants

- Settings do not change Contact identity.
- Configuration changes do not rewrite historical records.
- One active configuration is determinable for each effective time.
