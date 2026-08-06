# CON-BR-002 — Buyer Management

## Purpose

Govern buyer-specific contact data used by Sales without duplicating sales-order lifecycle rules.

## Rules

1. A buyer must be represented by a contact with `roles.buyer = true`.
2. Buyer creation may occur before checkout or during a governed sales workflow when no matching contact exists.
3. Buyer identity selection must use `contactId`.
4. Buyer display name is required before an order can be finalized.
5. A buyer may have multiple phones and multiple addresses.
6. Buyer contact updates must not change buyer data already snapshotted on issued invoices or completed orders.
7. A buyer may be deactivated only when no active workflow requires new use of that contact.
8. Buyer notes and tags must not be treated as authoritative payment, shipping, or financial evidence.
9. Buyer reassignment on an existing order must follow Sales amendment and locking rules.
10. Duplicate buyer creation must be prevented through CON-BR-005.

## Invariants

- One buyer may have many orders.
- A buyer update does not silently alter historical invoices.
- Buyer identity is independent from a single phone number or address.
- Deactivation does not remove prior sales history.

## Related

- CON-BR-001
- CON-BR-004
- CON-BR-005
- SAL-BR-017
