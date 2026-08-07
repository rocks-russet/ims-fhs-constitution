# INV-BR-008 — Product Category

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. PRODUCT and PACKING_SUPPLY records use an approved Product Category.
2. Category controls applicable metadata and search/filter options.
3. Inactive categories remain resolvable historically but cannot be newly selected.
4. Category creation/approval follows the approved Product Category workflow.
5. Category is not used as inventory identity.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
