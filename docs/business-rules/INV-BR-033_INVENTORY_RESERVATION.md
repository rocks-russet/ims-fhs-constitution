# INV-BR-033 — Inventory Reservation

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Reservation links inventory or eligible quantity to a Claim Cart/Order reference.
2. Serialized inventory cannot have more than one active reservation.
3. Quantity inventory reserves an explicit quantity and cannot exceed available quantity.
4. Reservation is released on valid cancellation or transferred atomically during checkout/order transitions.
5. Reservation does not change owner or cost.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
