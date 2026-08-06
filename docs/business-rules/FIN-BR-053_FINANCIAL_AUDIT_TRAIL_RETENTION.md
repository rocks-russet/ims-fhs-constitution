# FIN-BR-053 — Financial Audit Trail Retention

Purpose: Specify the minimum retained evidence for reconstructing a financial event end to end.

Rules:
- Retain event identity, timestamps, actor, source record, approvals, before/after values, ledger postings, wallet effects, attachments, and related correction records.
- Audit records must be append-only.
- Deactivation or archival of an operational record must not remove its financial audit trail.
- Exported audit packages must be reproducible and include stable identifiers.
- Access to audit records must be role-controlled and itself auditable.
- Retention duration must follow the longest applicable operational, accounting, legal, or governance requirement.
- Disposal after expiry requires authorized, logged, irreversible execution.
- Active disputes, investigations, audits, or legal holds suspend disposal.

Invariants:
- Audit evidence cannot be edited by ordinary users.
- A financial posting must remain attributable to a human or system actor.
- Deletion of source UI data must not break financial traceability.

Related:
- FIN-BR-018
- FIN-BR-031
- FIN-BR-044
