# FIN-BR-057 — Inter-Entity and Inter-Wallet Transfer Classification

Purpose: Govern transfers between financially distinct owners, wallets, or entities without misclassifying them as revenue or expense.

Rules:
- Every transfer identifies source, destination, amount, purpose, initiator, approver, and related obligation.
- A transfer must be classified as capital movement, loan, reimbursement, settlement, custody movement, or correction.
- Transfer-out and transfer-in entries must share one transfer ID.
- Both sides must post atomically or remain pending without affecting final balances.
- Transfers must not create profit merely by moving funds.
- Related-party transfers require conflict-of-interest disclosure where applicable.
- Failed or reversed transfers must reverse both sides consistently.
- Open inter-entity balances must be reconciled periodically.

Invariants:
- Transfer totals must balance.
- Source and destination cannot both be credited or both be debited.
- Transfer classification is immutable after settlement except through approved reclassification.

Related:
- FIN-BR-008
- FIN-BR-032
- FIN-BR-033
