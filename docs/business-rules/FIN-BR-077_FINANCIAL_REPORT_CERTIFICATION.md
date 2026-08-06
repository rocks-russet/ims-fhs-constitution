# FIN-BR-077 — Financial Report Certification

## Purpose

Define when a financial report is formally certified as complete, accurate, and suitable for its declared use.

## Rules

1. A report eligible for certification must have a stable report ID and version under FIN-BR-059.
2. Certification records the report period, scope, data cutoff, report version, preparer, reviewer, certification timestamp, and declared use.
3. Certification requires confirmation that required reconciliations are complete and material exceptions are resolved or disclosed.
4. The reviewer must have appropriate authority and must not certify a report they prepared when independent review is required.
5. Certified reports are immutable artifacts.
6. Any data correction affecting a certified report requires a new report version and recertification.
7. The prior certified version remains retained and marked superseded when applicable.
8. Certification status must be one of DRAFT, REVIEWED, CERTIFIED, SUPERSEDED, or WITHDRAWN.
9. Withdrawal requires a documented reason and authority; it does not delete the report.

## Invariants

- Certification applies to a specific report version, not merely a report name.
- A superseded or withdrawn report cannot be represented as current.
- Certification does not conceal disclosed exceptions.

## Related

- FIN-BR-055
- FIN-BR-059
- FIN-BR-072
