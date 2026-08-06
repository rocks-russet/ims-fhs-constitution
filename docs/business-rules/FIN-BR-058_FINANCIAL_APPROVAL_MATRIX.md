# FIN-BR-058 — Financial Approval Matrix Administration

Purpose: Define how financial approval limits are represented and applied operationally.

Rules:
- The approval matrix maps action type, amount threshold, risk class, requester role, required approver role, and required approval count.
- Matrix versions require effective dates and must not overwrite prior versions.
- A transaction uses the matrix version effective when approval is requested.
- Self-approval is prohibited where segregation of duties is required.
- Threshold splitting to avoid higher approval is prohibited.
- Emergency approval paths require explicit reason and post-event review.
- Changes to approver assignments and thresholds require SUPER_ADMIN authorization.
- Approval evidence must include decision, actor, timestamp, and matrix version.

Invariants:
- Approval requirements are deterministic.
- Expired or inactive approvers cannot approve.
- A later matrix change does not invalidate historically valid approvals.

Related:
- FIN-BR-011
- FIN-BR-043
- FIN-BR-048
