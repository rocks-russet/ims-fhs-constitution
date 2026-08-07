# INV-BR-027 — Inventory Ownership History

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Ownership History records every ownership state and conversion without deleting previous states.
2. History includes owner, capital/profit distribution, effective timestamp, actor, reason, and reference document.
3. Historical Sales and Finance events use the snapshot effective for their event.
4. Owner analytics can distinguish current ownership from historical ownership.
5. History remains visible on Inventory Detail.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
