# FIN-BR-049 — Financial Period Reopen Control

Purpose: Govern the exceptional reopening of a financially closed reporting period without allowing silent historical mutation.

Rules:
- A closed period is immutable by default.
- Reopening requires a documented request containing the affected period, reason, financial impact, impacted records, proposed correction method, requester, and approver.
- Only SUPER_ADMIN or a specifically delegated financial authority may approve reopening.
- Reopening must be time-bound and limited to the minimum affected scope.
- Original ledger entries must never be edited or deleted; corrections use reversal, adjustment, or restatement entries.
- Every entry posted during the reopened window must carry the reopen authorization ID.
- Reports previously issued for the affected period must be marked superseded when their values change.
- The system must record who opened, approved, used, and reclosed the period.
- Reclosing requires reconciliation and confirmation that no unauthorized postings remain.

Invariants:
- A period cannot be reopened implicitly.
- Reopening cannot erase the original audit trail.
- A reopened period must return to CLOSED status after completion.

Related:
- FIN-BR-012
- FIN-BR-041
- FIN-BR-043
