# INV-BR-001 — Inventory Identity

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Every Inventory record has one immutable inventoryId using the approved INV-######### sequence.
2. inventoryId is independent from ownerCode, holder, storage, product name, and status.
3. Serialized physical units, bulk lots, quantity lots, and transformed child inventory each use their own stable inventoryId.
4. Historical references must continue to resolve after sale, archive, ownership conversion, or transformation.
5. Duplicate inventoryId is prohibited.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
