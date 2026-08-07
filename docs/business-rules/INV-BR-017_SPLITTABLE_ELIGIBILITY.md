# INV-BR-017 — Splittable Inventory Eligibility

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Only Product Definitions explicitly marked splittable may use the free-form Inventory Split workflow.
2. Splittable configuration defines the underlying unit represented by the parent quantity.
3. Being splittable does not force immediate split after Purchase.
4. An unsplit parent may remain available as the whole commercial pack/case.
5. Operator chooses when a physical/commercial split is required.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
