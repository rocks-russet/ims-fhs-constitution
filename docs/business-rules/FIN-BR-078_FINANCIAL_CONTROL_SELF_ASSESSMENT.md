# FIN-BR-078 — Financial Control Self-Assessment

## Purpose

Require periodic owner assessment of whether key financial controls are designed correctly and operating effectively.

## Rules

1. The assessment scope must include wallet integrity, approval controls, settlement, reconciliation, reversal, configuration, access, backup, and audit trail.
2. Each control is assessed for:
   - control objective;
   - responsible owner;
   - expected frequency;
   - evidence source;
   - design effectiveness; and
   - operating effectiveness.
3. Assessment results must be classified EFFECTIVE, PARTIALLY_EFFECTIVE, INEFFECTIVE, or NOT_TESTED.
4. PARTIALLY_EFFECTIVE and INEFFECTIVE results require remediation owner, target date, severity, and follow-up test.
5. Self-assessment evidence must be retained and linked to the applicable control period.
6. Material deficiencies require SUPER_ADMIN acknowledgement and escalation under FIN-BR-071.
7. Repeated deficiencies require root-cause analysis and control redesign consideration.
8. Self-assessment does not replace independent compliance review or audit.
9. Closure of remediation requires evidence that the corrective action operates as intended.

## Invariants

- A control cannot be marked effective without supporting evidence.
- The control owner cannot erase prior deficient assessments.
- Assessment history is append-only and versioned.

## Related

- FIN-BR-044
- FIN-BR-065
- FIN-BR-071
