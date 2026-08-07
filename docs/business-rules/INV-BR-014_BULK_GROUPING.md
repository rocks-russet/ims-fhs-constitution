# INV-BR-014 — Bulk Card Grouping

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. The operator determines the logical grouping criteria for a Bulk Card Lot.
2. Grouping may use set, color, rarity, card type, event/theme, language, storage purpose, or another operational justification.
3. Grouping label and optional grouping metadata are recorded.
4. The system does not impose a fixed taxonomy for low-value bulk.
5. Changing a bulk label does not change its inventoryId, quantity, ownership, or cost.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
