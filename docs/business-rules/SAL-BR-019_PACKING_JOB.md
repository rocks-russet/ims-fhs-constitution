# SAL-BR-019 — Packing Job

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery and IMS FHS v2 Packing workflow decisions.

## Rules

1. A PAID Order may enter PACKING only through a Packing Job.
2. Packing Job references the Order ID, assigned/performing operator, lifecycle status, created timestamp, started timestamp, and completion timestamp.
3. A Packing Job presents all ordered items and fulfillment context required to prepare shipment.
4. One Packing Job may use multiple Packing Supply types and multiple quantities of each supply.
5. Packing Job keeps Suggested Supplies separate from Actual Supplies.
6. Suggested Supplies are advisory and do not mutate Inventory.
7. Actual Supplies remain editable by the operator until Packing Completion.
8. Operator may manually select a Packing Template as the starting recommendation when more than one template is applicable.
9. Operator may add, remove, replace, or change the quantity of any suggested supply.
10. Packing must remain possible when no template or suggestion rule matches the Order.
11. Packing cannot silently substitute sale-item Inventory.
12. Packing actions, suggestion provenance, overrides, actual usage, operator identity, and timestamps are auditable.
13. The initial implementation may represent one physical shipment package per Packing Job, but the model must remain extensible to multiple physical packages without changing the meaning of Actual Supply Usage.

## Lifecycle

`PAID → PACKING → SHIPPED`

Entering PACKING creates or activates the Order's Packing Job. Packing Completion is governed by SAL-BR-022.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Suggested Supply state must never be treated as confirmed physical consumption.
- Actual Supply Usage is canonical only after operator confirmation/finalization.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
