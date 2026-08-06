# FIN-BR-068 — Refund Authorization and Financial Allocation

Purpose: Extend dispute rules with deterministic allocation of approved refunds.

Rules:
- Every refund references the original order, payment, affected items, reason, approver, and refund method.
- Refund components are separated into item value, shipping, fee, tax, discount, and other adjustment.
- Refund financial impact must reverse or adjust revenue, cost, wallet rights, and settlement exposure consistently.
- Partial refunds allocate impact only to affected components.
- Refund amount cannot exceed the refundable balance without exceptional approval.
- Refund status must distinguish REQUESTED, APPROVED, PROCESSING, COMPLETED, FAILED, and CANCELLED.
- Completion requires external payment evidence or confirmed internal wallet settlement.
- Failed refunds do not reduce the outstanding obligation.

Invariants:
- A refund cannot be posted twice.
- Refunds cannot silently edit the original sale.
- Owner distributions must follow the original transaction snapshot unless an approved correction applies.

Related:
- FIN-BR-005
- FIN-BR-013
- FIN-BR-037
