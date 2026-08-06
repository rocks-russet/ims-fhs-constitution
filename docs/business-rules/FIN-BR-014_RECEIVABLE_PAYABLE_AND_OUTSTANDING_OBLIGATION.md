# FIN-BR-014 — Receivable, Payable, and Outstanding Obligation

Purpose: Define financial obligations that are recognized but not yet settled in cash or wallet balances.

Rules:
- A receivable represents an approved amount owed to IMS FHS or one of its recognized financial-right holders.
- A payable represents an approved amount owed by IMS FHS or a recognized wallet to another party.
- Recognition of a receivable or payable must not be represented as completed cash settlement.
- Every obligation must identify:
  - obligation ID;
  - type as receivable or payable;
  - source record;
  - debtor and creditor;
  - responsible Wallet Code and bucket when applicable;
  - amount and currency;
  - recognition date;
  - due date when applicable;
  - status;
  - settlement references.
- Supported statuses must distinguish at minimum `OPEN`, `PARTIALLY_SETTLED`, `SETTLED`, `CANCELLED`, and `WRITTEN_OFF`.
- Partial settlement must reduce only the outstanding amount and preserve all prior settlement history.
- The outstanding amount must equal the recognized amount minus valid settlements, credits, reversals, and approved write-offs.
- An obligation may originate from consignment, reimbursement, marketplace settlement, customer debt, owner funding, vendor expense, or another approved source.
- Obligations must not be duplicated when the same economic event is already represented by another authoritative record.
- Cancellation or write-off requires a reason, authorization, and immutable adjustment history.
- Aging and overdue status are reporting views and must not alter the authoritative obligation amount.
- Settlement must create the applicable ledger entries and link them to the obligation.
