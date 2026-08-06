# SAL-BR-022 — Order Completion Validation

Purpose:
Define mandatory checks before an order may transition from SHIPPED to COMPLETED.

Rules:
- The order must have valid payment confirmation for the full required amount.
- All ordered inventory must be in the expected sold or fulfillment state.
- Packing and shipment records must exist and reference the same Order ID.
- Courier and tracking data must be recorded when applicable.
- Any unresolved shipment exception, payment variance, refund request, or cancellation request must block completion.
- Actual shipping cost and shipping handler data must be recorded when required for financial settlement.
- Completion must trigger financial recognition exactly once.
- Completion records the actor and completion timestamp.
- Repeated completion requests must be idempotent.
- Corrections after completion must use governed reversal, refund, return, or adjustment workflows.

Invariants:
- An order cannot be COMPLETED directly from WAITING_PAYMENT, PAID, or PACKING.
- Completion cannot occur twice.
- Inventory, sales history, wallet, profit, and ledger effects must agree after completion.

Related:
- SAL-BR-005
- SAL-BR-009
- SAL-BR-010
- SAL-BR-011
- SAL-BR-013
