# FIN-BR-065 — Financial Compliance Review

Purpose: Establish periodic review that financial operations comply with approved Constitution rules and controls.

Rules:
- Review scope includes approvals, wallet movements, settlements, reversals, exceptions, master-data changes, and access.
- Sampling criteria and review period must be documented.
- Findings are classified by severity and assigned an owner and remediation deadline.
- Evidence supporting each finding must be retained.
- Material findings require SUPER_ADMIN acknowledgement.
- Repeated findings trigger control redesign or automation review.
- Remediation closure requires verification by someone other than the implementer where practical.
- Review results do not alter transactions directly; corrections follow normal financial rules.

Invariants:
- Compliance review is independent from transaction execution where possible.
- Findings cannot be closed without evidence.
- Review history remains auditable.

Related:
- FIN-BR-011
- FIN-BR-036
- FIN-BR-044
