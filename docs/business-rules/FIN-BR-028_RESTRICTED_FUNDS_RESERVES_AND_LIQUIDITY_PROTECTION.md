# FIN-BR-028 — Restricted Funds, Reserves, and Liquidity Protection

Purpose: Protect financial rights that are designated, restricted, or temporarily unavailable for ordinary use.

Rules:
- A restriction or reserve limits permitted use of financial rights but does not change their wallet ownership unless a valid transfer is posted.
- Every restriction or reserve must identify:
  - restriction ID;
  - Wallet Code and bucket;
  - amount and currency;
  - reason and permitted use;
  - source obligation, policy, or approval;
  - effective date;
  - release condition;
  - responsible actor;
  - status.
- Supported statuses must distinguish at minimum `PROPOSED`, `ACTIVE`, `PARTIALLY_RELEASED`, `RELEASED`, `USED`, and `CANCELLED`.
- Restricted or reserved amounts must be reported separately from unrestricted available rights.
- Creating a restriction must not generate revenue, expense, capital, profit, or external cash movement by itself.
- A wallet may have sufficient total balance but insufficient unrestricted balance for a withdrawal, payout, transfer, or expense.
- Use of restricted funds must match the approved purpose or require an approved release or exception.
- Release must preserve the original restriction, released amount, reason, actor, timestamp, and approval evidence.
- Partial use or release must reduce only the remaining restricted amount.
- A reserve must not be used to conceal a known loss, payable, deficit, or reconciliation exception that requires separate recognition.
- Automated liquidity controls must use deterministic rules and must not overwrite wallet or bucket balances.
- Reporting must distinguish total balance, restricted amount, unrestricted amount, and amounts committed under other approved controls.
