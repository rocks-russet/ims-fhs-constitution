# CON-BR-017 — Contact Data Integrity Audit

## Feature Origin

Contact Detail → Audit and Admin integrity checking.

## Purpose

Detect broken Contact data and cross-module references.

## Rules

1. Audit checks duplicate IDs, invalid statuses, broken merges, merge cycles, duplicate verified external identities, conflicting defaults, orphaned addresses, invalid roles, and missing referenced Contacts.
2. Audit also checks use of INACTIVE, MERGED, or ARCHIVED Contacts in new transactions.
3. Audit is read-only.
4. Findings include severity, record, evidence, failed rule, and resolution path.
5. Corrections use governing Contact workflows.
6. Post-correction audit confirms closure.
7. Critical broken references block go-live approval.
8. Audit runs record scope, timestamp, version, and finding counts.

## Invariants

- Audit never mutates data.
- Every correction remains traceable to a finding.
