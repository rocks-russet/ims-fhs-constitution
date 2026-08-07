# INV-BR-060 — Inventory Integrity Audit

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Read-only audit checks duplicate inventoryId, missing Product/Card references, missing ownership snapshots, invalid quantity/cost, reservation conflicts, impossible status combinations, broken Purchase/Sales references, broken transformation lineage, and Portfolio reconciliation.
2. Audit validates split/extraction quantity and cost conservation.
3. Audit validates market-provider/language mapping and stale/broken current price references where relevant.
4. Findings include severity, affected IDs, failed rule, and evidence.
5. Critical unresolved findings block go-live inventory integrity sign-off.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
