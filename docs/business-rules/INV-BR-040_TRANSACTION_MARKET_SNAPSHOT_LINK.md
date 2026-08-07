# INV-BR-040 — Transaction Market Snapshot Link

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Inventory Detail retains links to the Market Snapshot captured by Purchase at acquisition and by Sales at sale when available.
2. Acquisition/sale market snapshots are transaction evidence and are not replaced by current market value.
3. Inventory does not independently recalculate historical seller/buyer price behaviour using today's market price.
4. Current market value remains a separate live observation.
5. Drill-down may open the originating Purchase or Sales detail.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
