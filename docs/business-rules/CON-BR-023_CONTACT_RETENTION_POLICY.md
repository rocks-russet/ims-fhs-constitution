# CON-BR-023 — Contact Retention Policy

## Purpose
Govern contact retention policy within the Contact domain.

## Rules
1. Changes must reference a stable `contactId`.
2. Every change records actor, timestamp, reason, and previous/new values.
3. Historical Purchase, Sales, Shipment, Invoice, and Financial references remain immutable.
4. Changes must not silently rewrite transaction snapshots.
5. Any cross-reference created or removed must remain auditable.
6. Operations requiring approval must follow the authorization policy.
7. Validation must execute before commit.
8. Failures must roll back atomically.
9. Read models may refresh, but source records remain authoritative.
10. All actions are append-only in the audit trail.

## Invariants
- `contactId` never changes.
- Transaction history remains reproducible.
- Audit history is immutable.
- Contact master remains the single source of truth.

## Related
- CON-BR-001
- CON-BR-017
- CON-BR-018
