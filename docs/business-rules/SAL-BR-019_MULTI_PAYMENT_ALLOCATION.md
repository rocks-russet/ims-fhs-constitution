# SAL-BR-019 — Multi-Payment Allocation

Purpose:
Govern orders settled through more than one payment transaction or payment channel.

Rules:
- Every payment component must have its own payment identity, amount, method, reference, timestamp, and status.
- All payment components must reference the same Order ID.
- Supported combinations may include direct transfer, marketplace payment, cash, wallet credit, or another approved method.
- The allocation of payment components must equal the order payable amount before the order moves to PAID.
- A failed, reversed, or refunded payment component reduces the recognized paid amount until replaced or resolved.
- Marketplace fee treatment must apply only to the marketplace component unless the approved commercial rule states otherwise.
- Payment confirmation must be idempotent for each external payment reference.
- Unallocated excess payment must be recorded as refundable or otherwise governed credit; it must not be absorbed silently.
- Financial settlement must preserve each component while producing one consolidated order settlement view.

Invariants:
- One payment component cannot be allocated to multiple orders beyond its available amount.
- Total allocated payment cannot exceed total valid received payment.
- Consolidation must not erase payment-channel detail.

Related:
- SAL-BR-008
- SAL-BR-012
- SAL-BR-013
- FIN-BR-075
