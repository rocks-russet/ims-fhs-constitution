# SAL-BR-021 — Supplies Consumption

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. Actual supplies used are confirmed by the packing operator.
2. Confirmed supply usage may decrement tracked supplies inventory.
3. Suggested quantities do not decrement stock before confirmation.
4. Usage records Order ID, supply item, quantity, operator, and timestamp.
5. Operator overrides are retained as learning/history signals for future recommendation improvement.
6. Supply consumption must not alter sale-item inventory quantities.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
