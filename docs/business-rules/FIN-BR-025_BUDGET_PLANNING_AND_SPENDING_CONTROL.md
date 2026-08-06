# FIN-BR-025 — Budget Planning and Spending Control

Purpose: Govern financial planning and spending limits without confusing budgets with actual wallet rights or ledger balances.

Rules:
- A budget is an approved financial plan and does not create, transfer, reserve, or recognize wallet rights by itself.
- Every budget must identify:
  - budget ID;
  - covered period;
  - responsible owner;
  - Wallet Code and bucket when applicable;
  - category or purpose;
  - approved amount and currency;
  - preparer, reviewer, and approver;
  - version and status.
- Supported budget statuses must distinguish at minimum `DRAFT`, `SUBMITTED`, `APPROVED`, `REVISED`, `CLOSED`, and `CANCELLED`.
- Spending authorization must be evaluated against the active approved budget when the applicable policy requires budget control.
- Budget consumption must be based on authoritative commitments, expenses, payments, or another explicitly approved basis.
- The system must distinguish planned amount, committed amount, actual amount, released amount, and remaining amount.
- A budget overrun must require rejection or an approved exception before additional spending becomes authorized.
- Revising a budget must create a new version and preserve the prior approved version, reason, actor, and approval evidence.
- Moving budget capacity between categories, wallets, buckets, or periods requires an approved budget transfer and must not create ledger effects by itself.
- Unused budget capacity does not represent cash, profit, capital, or an amount available for withdrawal.
- Closing a budget period must preserve final planned-versus-actual results and unresolved commitments.
- Budget reporting must remain reconcilable to the authoritative transactions used to calculate actual and committed amounts.
