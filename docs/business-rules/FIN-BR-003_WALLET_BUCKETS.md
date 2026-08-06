# FIN-BR-003 — Wallet Buckets

Purpose: Separate financial rights by economic purpose without creating artificial ownership.

Rules:

- A wallet may contain logical buckets.
- The FHS wallet recognizes these standard buckets:
  - `OPERATING_CASH`;
  - `TRADING_CAPITAL`;
  - `PROFIT`.
- A bucket classifies the purpose of financial rights; it does not represent a separate legal owner or external bank account.
- Every bucket movement must be recorded in the ledger.
- A transfer between buckets must preserve the total balance of the wallet unless another valid posting is part of the same transaction.
- A bucket transfer must include both the source bucket and destination bucket.
- Bucket balances may not be changed by direct overwrite.
- Approval may be required for selected bucket transfers according to the active authorization policy.
- Financial reports must be able to show both total wallet balance and balance by bucket.
