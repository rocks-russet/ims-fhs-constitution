# CON-BR-002 — Buyer Management

## Purpose

Define governance for buyer management within the IMS FHS contact domain.

## Rules

1. Every contact has one immutable Contact ID.
2. Contact history is append-only and auditable.
3. Changes must record actor, timestamp, previous value, and new value.
4. Contact data must not directly modify sales, inventory, or financial history.
5. References from Sales, Purchase, and Finance must continue to resolve after updates.
6. Deactivation is preferred over deletion.
7. Merge operations preserve all historical references.
8. Personal/contact information follows authorization rules.

## Invariants

- Historical references remain valid.
- Stable identifiers never change.
- Contact records remain traceable.

## Related

- SAL-BR-040
- FIN-BR-053
