# FIN-BR-012 — Financial Reporting and Period Close

Purpose: Define reliable financial reporting, cut-off, and period-close controls for IMS FHS.

Rules:
- Financial reports must be derived from effective ledger entries and authoritative source records.
- Reports must support, at minimum:
  - balance by Wallet Code;
  - balance by wallet bucket;
  - ledger activity by period;
  - capital contributions;
  - completed settlements;
  - realized profit distributions;
  - withdrawals and transfers;
  - expenses and reimbursements;
  - reversals, adjustments, and integrity exceptions.
- Reporting periods must use a defined timezone and inclusive start and exclusive end boundaries to avoid ambiguous cut-off.
- The default operational timezone is `Asia/Jakarta` unless an approved governance rule states otherwise.
- Creation timestamp, effective timestamp, and source-event timestamp must remain distinguishable.
- A period close must include reconciliation of ledger balances, wallet snapshots, bucket totals, completed settlements, withdrawals, transfers, and reversals.
- Unresolved integrity exceptions must be disclosed and must prevent the period from being represented as fully reconciled.
- Closing a period must not delete, rewrite, or aggregate away the underlying ledger history.
- Post-close corrections must be recorded in the current open period with reference to the affected prior period and original transaction.
- Reopening a closed period requires explicit authorization and an auditable reason.
- Generated reports must identify the report time, covered period, currency, applied filters, and data version or generation reference.
- Financial reports are views of authoritative records and must not become an independent source of wallet balances.
