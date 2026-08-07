# SAL-BR-024 — Shipping Reimbursement

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. Actual expedition cost paid by the shipping handler creates the applicable reimbursement obligation.
2. Buyer shipping charged and actual shipping cost remain separate values.
3. Reimbursement identifies handler, amount, order, shipment, and evidence.
4. Approved payment-routing policy determines who funds the reimbursement.
5. Shipping surplus or deficit is treated through the approved finance/profit rules.
6. Reimbursement history remains traceable to the order.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
