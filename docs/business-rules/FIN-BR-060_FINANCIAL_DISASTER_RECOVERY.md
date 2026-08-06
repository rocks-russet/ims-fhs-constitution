# FIN-BR-060 — Financial Disaster Recovery Execution

Purpose: Define financial recovery priorities and validation after a major system or data-loss event.

Rules:
- Recovery priority is ledger integrity, wallet balances, ownership rights, open obligations, then derived reports.
- Recovery uses the latest verified backup and documented recovery point.
- Before reopening operations, restored record counts, checksums, wallet balances, and ledger totals must be validated.
- Transactions occurring after the recovery point must be reconstructed from preserved source evidence where possible.
- Duplicate replay must be prevented using event identities and idempotency keys.
- Any unrecoverable gap must be documented as an incident and exception.
- Financial operations remain suspended until authorized recovery sign-off.
- A post-recovery reconciliation and incident review are mandatory.

Invariants:
- Recovery cannot invent financial events.
- Restored history must retain original identifiers.
- Recovery approval is independent from technical restoration execution where practical.

Related:
- FIN-BR-037
- FIN-BR-042
- FIN-BR-056
