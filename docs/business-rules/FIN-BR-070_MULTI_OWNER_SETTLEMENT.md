# FIN-BR-070 — Multi-Owner Settlement

Purpose: Govern settlement of capital and profit rights when one transaction involves multiple owners.

Rules:
- Settlement uses the immutable ownership and profit-distribution snapshot attached to the relevant inventory or order.
- Capital return, profit distribution, shipping surplus or deficit, fees, and adjustments are calculated as distinct components.
- Each owner receives a separately identifiable ledger and wallet posting.
- Distribution percentages must total 100% for each applicable component.
- Rounding remainders are assigned deterministically.
- A failed posting for any owner prevents final settlement unless atomic retry semantics preserve consistency.
- Later ownership-rule changes do not affect completed settlement.
- Manual override requires approved item-level distribution evidence.

Invariants:
- Total owner allocations equal the distributable amount.
- Capital and profit are never commingled.
- Owner-specific results remain traceable to order and inventory IDs.

Related:
- FIN-BR-005
- FIN-BR-022
- INV-BR-006
