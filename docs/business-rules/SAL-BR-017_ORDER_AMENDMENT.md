# SAL-BR-017 — Order Amendment

Purpose:
Govern changes to an existing sales order without silently rewriting its original commercial state.

Rules:
- An order amendment must reference the original Order ID.
- Amendments may change item composition, quantity, discount, additional charge, payment method, shipping detail, or buyer instruction only while the affected lifecycle state still permits the change.
- Every amendment records the initiator, timestamp, reason, previous values, new values, and impacted business objects.
- Inventory removed from an order must be released only after the amendment is successfully committed.
- Inventory added to an order must pass normal availability and reservation checks.
- Any amendment that changes the payable amount must invalidate the previous payable instruction and require a new invoice version.
- An amendment after payment confirmation must explicitly account for additional receivable, refundable balance, or reallocation.
- An amendment after shipment is prohibited unless handled through return, replacement, refund, or correction workflow.
- An amendment must not alter historical payment, inventory, or financial evidence.

Invariants:
- The original order history remains reconstructable.
- Inventory and financial effects remain synchronized.
- No amendment may create double reservation or duplicate financial recognition.

Related:
- SAL-BR-004
- SAL-BR-005
- SAL-BR-006
- SAL-BR-007
- SAL-BR-014
