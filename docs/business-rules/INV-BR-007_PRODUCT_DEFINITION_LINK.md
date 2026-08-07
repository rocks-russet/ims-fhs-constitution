# INV-BR-007 — Product Definition Link

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Non-card merchandise Inventory references one approved Product Definition.
2. Multiple physical inventory records may share the same Product Definition.
3. Changing Product Definition metadata does not silently rewrite immutable transaction snapshots.
4. Inventory Detail can navigate to its Product Definition where supported.
5. Missing referenced Product Definition is an integrity finding.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
