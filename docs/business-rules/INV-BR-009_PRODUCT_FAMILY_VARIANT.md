# INV-BR-009 — Product Family and Variant

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Commercially distinct variants may use separate Product Definitions while optionally sharing a Product Family.
2. Family grouping must not combine records that require different pricing, language, size, edition, or commercial treatment.
3. Variant metadata remains explicit on the Product Definition.
4. Portfolio grouping may use family only when the selected report explicitly requests family aggregation.
5. Family linkage is optional and does not change physical inventory identity.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
