# FIN-BR-004 — Financial Posting and Balance Integrity

Purpose: Ensure that financial postings are complete, deterministic, and safe from duplication.

Rules:

- A financial posting must be atomic: all required ledger entries succeed together or none of them become effective.
- Each posting request must have an idempotency key or equivalent unique source reference.
- Repeating the same valid posting request must not create duplicate financial effects.
- The wallet balance must equal the sum of all effective ledger entries for that wallet.
- Stored balance snapshots may be used for performance but must remain reconcilable to the ledger.
- A posting must be rejected when:
  - the Wallet Code is unknown or inactive;
  - the amount is invalid;
  - the source reference is missing where required;
  - the posting duplicates an effective transaction;
  - required approval has not been granted;
  - the posting would violate an approved financial control.
- Direct manual replacement of wallet balances is prohibited.
- Any administrative adjustment must be posted as an explicit adjustment entry with actor, reason, and approval evidence.
- Multi-wallet distributions must preserve the total distributable amount, subject only to documented rounding treatment.
- Rounding residuals must be assigned deterministically and remain auditable.
