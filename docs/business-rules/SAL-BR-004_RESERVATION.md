# SAL-BR-004 — Reservation

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. Checkout reserves selected inventory for the Buyer Contact.
2. Reservation changes eligible inventory from AVAILABLE/LISTED to RESERVED.
3. One inventory unit cannot be reserved by more than one active order.
4. Reservation must be atomic across all items in the order.
5. Cancellation releases eligible reserved items back to AVAILABLE.
6. Reservation history remains auditable.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
