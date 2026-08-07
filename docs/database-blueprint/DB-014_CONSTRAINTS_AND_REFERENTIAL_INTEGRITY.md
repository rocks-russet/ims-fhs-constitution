# DB-014 — Constraints & Referential Integrity

## Examples of Database-Enforced Constraints
- stable business numbers UNIQUE
- purchase quantity > 0
- inventory quantity >= 0
- payment/capital/withdrawal amounts valid for their workflow
- transfer source != destination
- one default Contact address per Contact/purpose via partial unique index
- duplicate active external verified identities constrained where feasible
- one finalized Profit Snapshot per completed Order version policy
- unique financial idempotency keys
- event-consumer idempotency uniqueness

## Referential Delete Policy
Production transaction/history references generally use `RESTRICT` / no hard delete.
Master data deactivation/archival is preferred over deletion.

Do not use broad `ON DELETE CASCADE` on Purchase, Inventory, Sales, Finance, Contact, Audit, or historical snapshot records.

Cascade is acceptable only for truly subordinate ephemeral/config records whose deletion cannot destroy business history.

## Cross-Domain Integrity
Not every polymorphic `reference_type/reference_id` can be a direct SQL FK.
Such references require:
1. application/domain validation at write time,
2. periodic integrity audit,
3. stable immutable source business numbers/IDs.
