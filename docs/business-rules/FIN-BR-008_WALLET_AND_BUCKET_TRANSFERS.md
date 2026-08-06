# FIN-BR-008 — Wallet and Bucket Transfers

Purpose: Define controlled movement of financial rights between wallets and between logical buckets.

Rules:
- A transfer moves existing financial rights and must not create revenue, expense, capital, or profit by itself.
- A wallet-to-wallet transfer must create linked ledger entries with equal absolute amounts:
  - a negative entry for the source wallet; and
  - a positive entry for the destination wallet.
- A bucket transfer within one wallet must create linked source and destination bucket movements while preserving the wallet's total balance.
- Every transfer must identify:
  - transfer ID;
  - source Wallet Code and bucket, when applicable;
  - destination Wallet Code and bucket, when applicable;
  - amount and currency;
  - reason;
  - requester;
  - approval status when required;
  - effective timestamp;
  - common transaction reference.
- The source and destination must not be identical in both Wallet Code and bucket.
- A transfer must be atomic and idempotent.
- A transfer requiring approval must create no effective ledger movement before approval.
- Transfers must not be used to conceal withdrawals, expenses, profit distributions, capital returns, or corrections.
- Rejected or cancelled transfer requests create no wallet effect.
- A completed transfer may be corrected only through a linked reversal or compensating transfer.
- Transfer history must remain traceable from both the source and destination ledgers.
