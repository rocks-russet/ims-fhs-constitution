# FIN-BR-002 — Financial Ledger

Purpose: Establish the authoritative financial history of IMS FHS.

Rules:

- Every change to a wallet balance must be represented by an immutable ledger entry.
- A ledger entry must contain at least:
  - Ledger Entry ID;
  - Wallet Code;
  - posting type;
  - signed amount;
  - currency;
  - effective timestamp;
  - creation timestamp;
  - actor;
  - source reference;
  - description;
  - status.
- Positive amounts increase the wallet's financial rights.
- Negative amounts decrease the wallet's financial rights.
- The supported currency is `IDR` unless a future approved rule introduces another currency.
- Ledger Entry IDs must be globally unique, immutable, and never reused.
- Posted ledger entries must never be edited or deleted.
- Corrections must be made through new compensating or reversal entries that reference the original entry.
- A financial event affecting multiple wallets must retain one common source or transaction reference so the complete posting can be reconstructed.
- Draft or failed entries must not affect wallet balances.
