# SAL-BR-018 — Partial Payment

Purpose:
Define how an order behaves when received payment is less than the current payable amount.

Rules:
- A partial payment must reference one Order ID and one payment evidence record.
- The system records the paid amount, outstanding amount, payment method, payer, timestamp, and confirming operator.
- A partially paid order must not move to PAID until the full required amount is confirmed, unless an approved exception explicitly allows fulfillment.
- Multiple partial payments may accumulate against the same order.
- Overlapping or duplicate payment evidence must be rejected.
- Cancellation of a partially paid order must preserve the payment history and create the appropriate refund or credit obligation.
- A change to the order total after partial payment must recalculate only the outstanding balance; prior confirmed payments remain immutable.
- Partial marketplace and direct components must remain separately identifiable.
- Packing and shipment remain blocked while the order has an unresolved outstanding balance.

Invariants:
- Confirmed payments plus outstanding balance equal the current payable amount, except where an explicit refundable or overpaid balance exists.
- Partial payment does not imply completed settlement.
- Payment evidence is never deleted when the order is amended or cancelled.

Related:
- SAL-BR-005
- SAL-BR-008
- SAL-BR-012
- SAL-BR-014
