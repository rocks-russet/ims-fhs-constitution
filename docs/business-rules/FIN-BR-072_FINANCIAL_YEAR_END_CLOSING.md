# FIN-BR-072 — Financial Year-End Closing

Purpose: Define enhanced controls required at the final close of a financial year.

Rules:
- All periodic close requirements must be completed for the final period.
- Open receivables, payables, owner rights, suspense items, and contingent obligations must be reviewed.
- Inventory valuation, impairment, write-off, and cost basis must be finalized.
- Wallet and settlement accounts must be fully reconciled.
- Final owner capital and profit-right statements must be generated.
- Material post-close corrections require year-end reopen authorization and restatement assessment.
- Year-end report packages, approvals, backups, and audit evidence must be preserved.
- Opening balances for the new year must reconcile exactly to finalized closing balances.
- Year-end closure requires preparer and independent approver sign-off.

Invariants:
- New-year opening balances cannot be entered independently of prior-year close.
- Unresolved material differences must be explicitly disclosed.
- Final year-end artifacts are immutable except through versioned restatement.

Related:
- FIN-BR-012
- FIN-BR-024
- FIN-BR-055
