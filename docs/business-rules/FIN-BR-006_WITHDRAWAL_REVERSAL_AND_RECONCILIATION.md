# FIN-BR-006 — Withdrawal, Reversal, and Reconciliation

Purpose: Govern money removal, correction, and verification of wallet records.

Rules:

- A withdrawal represents the settlement of wallet financial rights through an external payment action.
- A withdrawal must identify:
  - requesting Wallet Code;
  - amount;
  - requester;
  - destination or payment reference;
  - reason;
  - request timestamp;
  - approval status;
  - execution timestamp when completed.
- A withdrawal requiring approval must not affect the wallet before approval and execution.
- A completed withdrawal creates an immutable negative ledger entry.
- A rejected or cancelled withdrawal request creates no wallet effect.
- A posted ledger entry must be corrected only by a linked reversal or compensating entry.
- A reversal must state the original Ledger Entry ID, actor, reason, and timestamp.
- Reversing an entry must not delete or conceal the original history.
- Reconciliation must compare:
  - derived ledger balance;
  - stored wallet balance snapshot, when present;
  - bucket totals;
  - completed settlement postings;
  - withdrawal and reversal records.
- Any mismatch must be reported as an integrity exception and must not be silently repaired.
- Repairs must use explicit auditable postings or an approved data recovery procedure.
- Financial history must remain traceable from each ledger entry to its originating order, settlement, withdrawal, transfer, adjustment, or reversal.
