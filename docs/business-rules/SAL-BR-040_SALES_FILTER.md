# SAL-BR-040 — Sales Filter

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. Filters include order status, date range, buyer, channel, payment method, owner, item type/category, and fulfillment status where applicable.
2. Status navigation supports WAITING_PAYMENT, PAID, PACKING, SHIPPED, COMPLETED, and CANCELLED.
3. Count badges must reflect the same active filter scope.
4. Multiple filters combine deterministically.
5. All filters can be reset.
6. Filtered totals must state their scope.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
