# INV-BR-026 — Inventory Ownership Snapshot

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Every committed inventory item retains capitalDistribution, profitDistribution, ruleId, version, and resolvedAt from its acquisition/ownership decision.
2. Finance consumes this snapshot rather than recalculating historical ownership from current rules.
3. Snapshot is immutable until a governed Ownership Conversion creates a new applicable ownership state.
4. Item-level overrides remain explicit.
5. Missing snapshot is a blocking financial integrity issue.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
