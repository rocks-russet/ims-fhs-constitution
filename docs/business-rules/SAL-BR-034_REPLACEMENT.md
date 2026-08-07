# SAL-BR-034 — Replacement Fulfillment

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. Replacement references the original Order and reason.
2. Replacement inventory must pass normal availability and reservation checks.
3. Replacement creates a distinct fulfillment/shipment record linked to the original order.
4. Original sold-item history remains unchanged.
5. Replacement must not recognize duplicate sales revenue/profit.
6. Additional shipping or compensation is recorded explicitly.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
