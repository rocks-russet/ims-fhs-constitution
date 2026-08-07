# INV-BR-002 — Inventory Type

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Inventory type is explicitly classified as SERIALIZED_CARD, BULK_CARD_LOT, PRODUCT, PACKING_SUPPLY, or another later-approved type.
2. Type determines validation and available metadata but does not change inventoryId semantics.
3. One inventory record has one active type.
4. Type changes after commit are prohibited except through an approved transformation.
5. Card and Product remain searchable in one Inventory Explorer.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
