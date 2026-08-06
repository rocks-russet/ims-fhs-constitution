# FIN-BR-018 — Financial Data Retention, Audit, and Export

Purpose: Ensure financial records remain complete, reviewable, portable, and resistant to unauthorized alteration.

Rules:
- Authoritative financial records must be retained according to the active document-governance and data-retention policy.
- Financial records subject to retention include:
  - ledger entries;
  - wallet and bucket records;
  - settlements;
  - obligations;
  - approvals;
  - withdrawals and transfers;
  - expenses and reimbursements;
  - refunds and disputes;
  - reversals, write-offs, and recoveries;
  - reconciliation and period-close evidence.
- Posted or completed financial records must not be physically deleted through normal business operations.
- Corrections must preserve the original record and create traceable reversal, replacement, or compensating records.
- Every material financial action must retain actor identity, timestamps, source reference, reason, and applicable approval evidence.
- Audit history must distinguish creation, approval, execution, cancellation, reversal, and administrative access.
- Exports must be generated from authoritative records and identify:
  - generation timestamp;
  - covered period;
  - filters;
  - currency basis;
  - record count;
  - schema or export version.
- Exported totals must be reconcilable to the source ledger and report parameters.
- An export is a derived artifact and must not replace or become the source of authoritative balances.
- Sensitive financial exports must follow the applicable access-control and confidentiality rules.
- Backup and restoration procedures must preserve record identity, relationships, ordering, and audit history.
- A restoration or migration must be followed by integrity checks before the restored financial data is accepted for operation.
