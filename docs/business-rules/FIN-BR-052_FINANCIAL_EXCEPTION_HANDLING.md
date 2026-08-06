# FIN-BR-052 — Financial Exception Case Handling

Purpose: Define the case-management lifecycle for financial exceptions without duplicating suspense or incident rules.

Rules:
- Every unresolved financial anomaly must create an exception case with unique ID.
- A case records detection source, affected transaction, amount, owner, severity, evidence, current status, and target resolution date.
- Valid statuses are OPEN, INVESTIGATING, AWAITING_EVIDENCE, RESOLVED, ACCEPTED_RISK, and CLOSED.
- Temporary accounting treatment must reference the exception case.
- Resolution must specify whether the outcome is correction, reversal, reclassification, write-off, recovery, or no financial change.
- High-severity cases require independent review before closure.
- Repeated exceptions of the same type must trigger root-cause review.
- Closing a case requires confirmation that ledger, wallet, reports, and operational records agree.

Invariants:
- An exception may not disappear merely because a manual balance adjustment was made.
- Every temporary treatment must have an owner and deadline.
- Closure requires evidence, not only a status change.

Related:
- FIN-BR-023
- FIN-BR-036
- FIN-BR-044
