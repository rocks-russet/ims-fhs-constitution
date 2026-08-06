# FIN-BR-067 — Financial Settlement Finalization

Purpose: Define the point at which a settlement becomes final and protected from ordinary modification.

Rules:
- Settlement finalization requires matched source obligations, confirmed payment evidence, allocated fees, reconciled net amount, and zero unexplained variance.
- Finalized settlements receive a settlement-finalization timestamp and immutable status.
- Unfinalized settlements may remain PENDING_RECONCILIATION or EXCEPTION.
- After finalization, changes use correction or reversal workflows.
- Marketplace settlement must identify gross proceeds, marketplace fees, deductions, refunds, and net receipt.
- Direct settlement must identify payment receipt and related order allocation.
- Finalization must update all related obligations consistently.
- A finalization report is retained for audit.

Invariants:
- Finalization cannot occur with unexplained imbalance.
- A settlement is finalized once, unless formally reversed.
- Net settlement must reconcile to its component amounts.

Related:
- FIN-BR-005
- FIN-BR-038
- FIN-BR-040
