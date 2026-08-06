# FIN-BR-062 — Financial Master Data Governance

Purpose: Govern shared financial reference entities used by transactions and reports.

Rules:
- Master data includes wallet codes, account classifications, payment instruments, counterparties, currencies, tax classes, fee classes, and financial categories.
- Each master record has stable ID, display label, status, effective dates, and change history.
- Records referenced by historical transactions cannot be deleted; they may be deactivated.
- Duplicate master records must be detected before creation.
- Merge operations require explicit mapping and must preserve historical references.
- Sensitive payment-account details require restricted access.
- Changes affecting posting behavior require financial approval.
- Master data integrity must be checked during reconciliation and imports.

Invariants:
- Display-name changes do not change stable identity.
- Deactivation does not invalidate historical transactions.
- One active canonical record must exist for each unique governed entity.

Related:
- FIN-BR-030
- FIN-BR-045
- FIN-BR-047
