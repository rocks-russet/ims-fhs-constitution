# SAL-BR-003 — Checkout

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. Checkout converts one or more compatible Claim Carts into one order draft.
2. Multiple Claim Carts for the same buyer may be merged into one invoice/order.
3. Checkout validates buyer, inventory eligibility, prices, quantities, and commercial adjustments.
4. Checkout creates the order commercial snapshot but does not yet recognize profit.
5. Checkout result must be reproducible from selected carts.
6. Repeated checkout submission must be idempotent.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
