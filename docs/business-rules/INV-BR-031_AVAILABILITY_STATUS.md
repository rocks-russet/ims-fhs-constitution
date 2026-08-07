# INV-BR-031 — Inventory Availability Status

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Inventory operational availability supports AVAILABLE, LISTED, RESERVED, SOLD, and transformation/archive states required by the approved lifecycle.
2. Status is server-authoritative.
3. One physical quantity cannot simultaneously be both AVAILABLE for sale and SOLD.
4. Status changes are recorded in Inventory History.
5. Derived UI badges may simplify backend state without changing authoritative meaning.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
