# SAL-BR-028 — Profit Distribution

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. Profit is realized at COMPLETED.
2. Item profit uses authoritative sale allocation and item Final Cost.
3. Shipping surplus or deficit is included in order profit according to approved policy.
4. Profit is distributed using each inventory item's immutable profitDistribution snapshot.
5. Multi-owner orders calculate each item's distribution independently before aggregation.
6. Negative profit is distributed according to the same applicable snapshot rules.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
