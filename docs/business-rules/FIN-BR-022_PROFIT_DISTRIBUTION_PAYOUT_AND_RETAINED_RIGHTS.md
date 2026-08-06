# FIN-BR-022 — Profit Distribution Payout and Retained Rights

Purpose: Distinguish recognition of profit rights from the later payout, retention, or transfer of those rights.

Rules:
- Realized profit rights arise only from valid completed settlement under FIN-BR-005.
- Recognition of profit in a wallet does not require immediate external payout.
- Profit retained in a wallet remains the financial right of that wallet until a valid transfer, withdrawal, reinvestment, or other authorized use occurs.
- A profit payout must identify:
  - payout ID;
  - source Wallet Code and bucket;
  - beneficiary;
  - amount and currency;
  - covered settlement or reporting period when applicable;
  - destination or payment reference;
  - requester, approver, and executor;
  - execution timestamp.
- A payout must not exceed the valid available financial rights permitted by the active financial controls, unless an approved negative-balance exception applies.
- Payout execution must create the applicable immutable negative ledger entry and preserve the external payment evidence.
- A payout must not recalculate or alter the underlying completed settlements that created the profit rights.
- Retaining profit for future business use does not convert it into capital contribution unless an explicit approved reclassification or transfer is recorded.
- Reinvestment of retained profit into a different bucket must follow the wallet and bucket transfer rules.
- Profit distribution rules must not be applied a second time when already-distributed wallet rights are paid out.
- Cancelled or rejected payout requests create no wallet effect.
- Corrections to completed payouts must use linked reversal or compensating entries and preserve the original payout history.
