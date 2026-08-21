# SAL-BR-021 — Supplies Consumption

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery and IMS FHS v2 Packing workflow decisions.

## Rules

1. Actual Supplies Used are confirmed by the packing operator.
2. Confirmed actual usage may decrement tracked PACKING_SUPPLY Inventory.
3. Suggested Supplies never decrement Inventory.
4. Usage records at minimum:
   - Order ID;
   - Packing Job ID;
   - Packing Supply Inventory/Product reference;
   - actual quantity;
   - source suggestion/template reference when applicable;
   - operator;
   - confirmation timestamp.
5. Actual usage may differ from Suggested Supplies.
6. Operator overrides are retained as history and recommendation-learning signals.
7. Supply consumption must not alter sale-item Inventory quantities.
8. Tracked Packing Supply quantity must never become negative.
9. If confirmed Actual Supply Usage would exceed available tracked quantity, Packing Completion must not silently create negative Inventory.
10. Actual Supply Usage, Packing Completion, and tracked supply decrement must be committed atomically or rolled back together.
11. Repeated completion/finalization requests must be idempotent and must not consume supplies more than once.
12. Governed correction must preserve the original usage record and correction lineage rather than destructively rewriting history.

## Invariants

- Suggested quantities are non-transactional advisory state.
- Confirmed Actual Supply Usage is the canonical Packing consumption record.
- Inventory History and Sales Packing Detail cross-reference the same consumption event.
- Historical transaction evidence must remain reconstructable.
