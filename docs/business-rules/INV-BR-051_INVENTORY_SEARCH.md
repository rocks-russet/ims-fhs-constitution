# INV-BR-051 — Inventory Explorer Search

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Inventory Explorer provides global search across serialized Cards, Products, Bulk Lots, and approved supply inventory.
2. Search supports inventoryId, card number/name, Product name, bulk label, category, owner, holder, storage, status, and relevant metadata.
3. Search is normalized where appropriate and paginated/bounded.
4. Search result context distinguishes inventory types.
5. Search does not mutate data.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
