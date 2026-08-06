# CON-BR-024 — Contact Governance Review

## Purpose

Define governance for contact governance review while preserving stable contact identity and historical transaction references.

## Rules

1. Operations must reference a stable `contactId`.
2. Every change records actor, timestamp, reason, and affected fields.
3. Historical Purchase, Sales, Invoice, Shipment, and Financial snapshots remain immutable.
4. Validation executes before commit.
5. Authorization is required where policy mandates.
6. Operations are atomic.
7. Every mutation is append-only in the audit trail.
8. Cross-domain references remain valid.
9. Changes never rewrite historical snapshots.
10. Failures leave the prior committed state intact.

## Invariants

- `contactId` never changes.
- Transaction history remains reproducible.
- Audit history is immutable.
- Contact master is the authoritative source.

## Related

- CON-BR-001
- CON-BR-017
- CON-BR-018
