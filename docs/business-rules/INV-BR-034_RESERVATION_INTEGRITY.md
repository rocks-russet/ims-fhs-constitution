# INV-BR-034 — Reservation Integrity

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Reserved quantity plus available quantity cannot exceed active physical quantity.
2. Sold/transformed quantity cannot remain actively reserved.
3. Duplicate reservation for the same serialized inventory is prohibited.
4. Claim Cart to Order reservation transfer must not temporarily duplicate ownership of the reservation.
5. Reservation conflicts block the committing action.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
