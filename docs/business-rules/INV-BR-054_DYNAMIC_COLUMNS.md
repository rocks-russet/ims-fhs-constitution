# INV-BR-054 — Inventory Dynamic Columns

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. User can choose which applicable fields appear as table headers.
2. Selectable examples include Image, Inventory ID, Card Number, Name, Set, Color, Counter, Rarity, Language, Grade, Owner, Holder, Storage, Buy Price, Final Cost, Market Price, Status, Purchase Date, and category-specific fields.
3. Unchecked columns remain hidden without disabling search/filter on that field.
4. Column availability is context-aware to Card/Product/Bulk metadata.
5. Column configuration is user-specific.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
