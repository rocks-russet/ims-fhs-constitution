# FIN-BR-056 — Wallet Balance Reconciliation

Purpose: Define wallet-specific reconciliation between calculated balance, ledger movement, and stored wallet state.

Rules:
- For each wallet, opening balance plus valid credits minus valid debits must equal closing balance.
- Reconciliation must separately identify pending, reversed, failed, and excluded entries.
- Stored wallet balance must be compared with a recomputed balance from immutable history.
- Any difference creates a reconciliation exception; direct balance overwrite is prohibited.
- Corrections use traceable adjustment or reversal entries.
- Reconciliation output records wallet code, period, calculated balance, stored balance, variance, reviewer, and status.
- Owner-restricted wallets may be viewed only according to authorization policy.
- Completion requires zero unexplained variance.

Invariants:
- Wallet history is the basis of truth for recomputation.
- A balance correction cannot remove the evidence of the variance.
- Reconciliation must cover AK, AH, RCS, and FHS independently.

Related:
- FIN-BR-002
- FIN-BR-004
- FIN-BR-038
