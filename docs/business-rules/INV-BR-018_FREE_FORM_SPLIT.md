# INV-BR-018 — Free-Form Inventory Split

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. A splittable parent may be divided into any positive child quantities chosen by the operator.
2. The sum of all child quantities must equal the quantity removed from the parent.
3. Examples include Sleeve 70 -> 10x7, 50+20, 30+20+20, or Case -> selected child packs where the Product Definition permits it.
4. Split pattern is not hard-coded to one recipe.
5. Split is atomic and creates explicit child Inventory records.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
