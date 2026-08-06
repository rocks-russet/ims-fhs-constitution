# FIN-BR-001 — Wallet and Financial Rights

Purpose: Define the meaning and ownership of wallets within IMS FHS.

Rules:

- A wallet represents financial rights recorded by IMS FHS, not the balance of a bank account, e-wallet, or other external payment account.
- Every wallet must have a permanent Wallet Code.
- Wallet Codes currently recognized are:
  - `AK`
  - `AH`
  - `RCS`
  - `FHS`
- A wallet balance is derived exclusively from valid ledger entries assigned to that Wallet Code.
- Money physically held in an external account does not change wallet ownership unless a corresponding financial posting is recorded.
- A Settlement Account may hold money on behalf of one or more wallets without becoming the owner of those financial rights.
- A wallet may have a negative balance when valid obligations, deficits, reversals, or corrections exceed its available financial rights.
- Wallet Codes are immutable and must not be reused for a different party or purpose.
