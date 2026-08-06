# CON-BR-007 — Contact Deactivation and Archival

## Feature Origin

Contact Detail → Deactivate / Archive.

## Purpose

Remove a Contact from active operational selection while preserving history.

## Rules

1. INACTIVE Contacts cannot be selected for new transactions.
2. ARCHIVED Contacts are read-only by default.
3. Contacts with active operational dependencies cannot be archived.
4. Deactivation or archival records actor, timestamp, and reason.
5. Reactivation uses the same `contactId`.
6. MERGED Contacts cannot be independently reactivated.
7. Historical Purchase, Sales, Invoice, Shipment, and Financial references remain accessible.
8. Hard deletion is prohibited for historically referenced Contacts.

## Invariants

- Archival is not deletion.
- Historical references remain valid.
- Reactivation never creates a second identity.
