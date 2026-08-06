# CON-BR-001 — Contact Lifecycle

## Purpose

Define the authoritative lifecycle, identity, and governance of contacts used across Purchase, Sales, Inventory, and Finance.

## Rules

1. Every contact must have one immutable `contactId`.
2. A contact may hold one or more roles, including `buyer` and `seller`.
3. Contact status must be one of:
   - `ACTIVE`;
   - `INACTIVE`;
   - `MERGED`; or
   - `ARCHIVED`.
4. A contact record may contain:
   - display name;
   - phones;
   - addresses;
   - role flags;
   - marketplace or social references;
   - tags;
   - notes; and
   - audit metadata.
5. Stable identity is represented by `contactId`, not by display name, phone number, address, or marketplace account.
6. Contact updates must preserve historical references from orders, purchases, invoices, shipments, and financial records.
7. Contacts referenced by historical transactions must not be hard-deleted.
8. Deactivation prevents new operational use but does not invalidate prior references.
9. Reactivation requires authorization and must retain the same `contactId`.
10. Lifecycle changes must record actor, timestamp, reason, previous status, and new status.

## Invariants

- `contactId` never changes.
- Historical transactions remain resolvable after contact updates.
- Contact status changes do not rewrite transaction snapshots.
- One contact may be both buyer and seller without duplicate identities.

## Related

- SAL-BR-002
- SAL-BR-016
- PUR-BR
