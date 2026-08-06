# FIN-BR-071 — Financial Exception Escalation

Purpose: Define severity and escalation requirements for unresolved financial exceptions.

Rules:
- Exceptions are classified LOW, MEDIUM, HIGH, or CRITICAL based on amount, control failure, fraud indicator, data integrity, and operational impact.
- Each severity has a response owner and maximum acknowledgement and resolution target.
- HIGH and CRITICAL cases require SUPER_ADMIN notification.
- Suspected fraud, unauthorized wallet change, unreconciled systemic variance, or widespread duplicate posting is CRITICAL.
- Escalation does not authorize ungoverned balance edits.
- Containment actions may suspend postings, approvals, imports, or affected workflows.
- Overdue cases escalate automatically to the next authority level.
- Resolution includes root cause, correction, preventive action, and verification.

Invariants:
- Severity cannot be lowered without justification.
- Critical incidents remain open until financial reconciliation is complete.
- Escalation history is append-only.

Related:
- FIN-BR-036
- FIN-BR-044
- FIN-BR-052
