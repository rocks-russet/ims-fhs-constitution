# SAL-BR-025 — Return Authorization

## Purpose

Define authorization and traceability for goods returned by a buyer after shipment or completion.

## Rules

1. Every return request must reference the Order ID, affected order items, quantities, reason, buyer evidence, request timestamp, and responsible operator.
2. Return status must be one of:
   - `REQUESTED`;
   - `UNDER_REVIEW`;
   - `APPROVED`;
   - `REJECTED`;
   - `IN_TRANSIT`;
   - `RECEIVED`;
   - `INSPECTED`;
   - `RESOLVED`; or
   - `CANCELLED`.
3. Approval must define the accepted items, expected condition, return destination, shipping responsibility, and allowed resolution.
4. Return approval does not itself create a refund.
5. Returned inventory must not become `AVAILABLE` until it is received and inspected.
6. Inspection must record quantity, authenticity, condition, completeness, damage, and disposition.
7. Valid dispositions include:
   - return to available inventory;
   - return to restricted or damaged inventory;
   - repair or rework;
   - replacement;
   - write-off; or
   - return to buyer.
8. Partial returns affect only the authorized items and quantities.
9. Rejected or cancelled returns must preserve the request history.
10. Financial consequences must use the applicable refund, adjustment, reimbursement, or write-off rule.

## Invariants

- A returned item cannot be restored to available stock before physical validation.
- Return authorization does not silently reverse the original sale.
- Every received returned item remains traceable to its original inventory and order identity.

## Related

- SAL-BR-010
- SAL-BR-014
- SAL-BR-021
- FIN-BR-068
