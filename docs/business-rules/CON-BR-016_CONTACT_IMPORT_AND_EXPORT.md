# CON-BR-016 — Contact Import and Export

## Feature Origin

Import / Export.

## Purpose

Support controlled CSV and JSON exchange.

## Rules

1. Import supports approved CSV and JSON schemas.
2. Import validates required fields, roles, phone format, addresses, external identities, and duplicate candidates.
3. Import displays a preview before commit.
4. Likely duplicates require review and are not automatically merged.
5. Each import has a Batch ID and is idempotent.
6. Accepted and rejected records are reported.
7. Export supports authorized CSV and JSON output.
8. Export records actor, purpose, scope, filters, row count, and timestamp.
9. Export files are not an alternative source of truth.
10. Import must preserve existing `contactId` when updating known Contacts.

## Invariants

- Import cannot bypass duplicate controls.
- Failed import does not create partial operational references.
- Bulk actions remain auditable.
