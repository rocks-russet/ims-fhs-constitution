# CON-BR-007 — Contact Deactivation and Archival

## Purpose

Govern removal of contacts from active operational use without breaking historical references or deleting contact evidence.

## Rules

1. A contact may be deactivated when it should no longer be selected for new transactions.
2. A contact may be archived only when:
   - no active purchase, sales, return, replacement, dispute, or approval workflow depends on it;
   - no unresolved duplicate or merge review exists; and
   - all mandatory retention requirements are satisfied.
3. Deactivation and archival must record actor, timestamp, reason, previous status, and new status.
4. Deactivated and archived contacts remain searchable by stable `contactId`.
5. Historical purchases, orders, invoices, shipments, and financial records must continue to resolve to the contact.
6. Deactivation must not remove buyer or seller role history.
7. Archived contacts are read-only by default.
8. Reactivation must use the same `contactId` and require authorization.
9. A contact in `MERGED` status cannot be independently reactivated.
10. Hard deletion is prohibited for any contact referenced by historical or audit records.

## Invariants

- Archival is not deletion.
- Historical references remain valid.
- Contact status changes do not alter transaction snapshots.
- Reactivation never creates a new identity for the same contact.

## Related

- CON-BR-001
- CON-BR-006
- FIN-BR-053
- FIN-BR-054
