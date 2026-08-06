# CON-BR-004 — Address Management

## Feature Origin

Contact Detail → Addresses.

## Purpose

Manage reusable Contact addresses without changing historical transaction snapshots.

## Rules

1. A Contact may have multiple addresses.
2. Every address has a stable address ID within the Contact.
3. Address fields include recipient name, phone, address lines, locality, city/regency, province, postal code, country, and delivery notes where applicable.
4. An address may be created, edited, set as default, deactivated, or archived.
5. Direct Sales may select any active valid Buyer address.
6. Selecting an address for an order creates an immutable order-level address snapshot.
7. Editing Contact address data must not alter existing Invoice or Shipment snapshots.
8. Incomplete addresses may be stored but cannot be used for fulfillment until required fields are complete.

## Invariants

- Historical delivery addresses remain reproducible.
- Archived addresses remain visible in historical references.
- Address master data does not determine Shipment status.
