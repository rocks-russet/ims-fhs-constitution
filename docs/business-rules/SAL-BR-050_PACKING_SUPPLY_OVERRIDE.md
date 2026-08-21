# SAL-BR-050 — Packing Supply Override

## Feature Origin

IMS FHS v2 Packing workflow decision — operator override of Packing Supply recommendations.

## Rules

1. Operator may override any Suggested Supply before Packing Completion.
2. Supported override actions include:
   - quantity increase;
   - quantity decrease;
   - removal;
   - replacement with another Supply;
   - addition of a Supply that was not suggested.
3. Overrides modify the pending Actual Supply Usage draft, not the historical suggestion snapshot.
4. IMS records enough information to compare Suggested versus Actual usage.
5. Override records must identify operator and timestamp.
6. A free-text reason may be recorded; the system may require a reason for governed exceptional cases, but ordinary packing adjustment must remain operationally lightweight.
7. An override does not modify or retrain the ACTIVE Template immediately.
8. Repeated operator overrides may contribute evidence to a learned Template Candidate under SAL-BR-052.
9. Operator may reset the pending Actual Usage draft back to the current suggestion before Packing Completion.
10. Packing Completion validates the final Actual Usage, not the original suggestion.

## Invariants

- Operator override cannot mutate historical Template versions.
- Actual Usage remains distinct from recommendation output.
- Overrides remain auditable and available for learning/analytics.
