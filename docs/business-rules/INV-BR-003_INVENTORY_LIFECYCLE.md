# INV-BR-003 — Inventory Lifecycle

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Inventory lifecycle preserves acquisition, active ownership, listing/reservation, sale, transformation, and archival history.
2. Operational state must not erase origin or prior status history.
3. Sold or transformed inventory remains historically resolvable.
4. Lifecycle transitions are server-authoritative and auditable.
5. Illegal backward transitions require a governed correction rather than silent mutation.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
