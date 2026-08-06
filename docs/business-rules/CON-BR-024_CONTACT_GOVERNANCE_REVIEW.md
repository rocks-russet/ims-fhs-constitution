# CON-BR-024 — Contact Governance Review

## Feature Origin

Contact Audit and Settings.

## Purpose

Periodically confirm that Contact behavior remains aligned with the approved IMS FHS v1 feature map.

## Rules

1. Review covers identity uniqueness, Buyer/Seller role use, duplicate handling, Merge, analytics sources, privacy, import/export, and cross-module references.
2. Every CON-BR must map to an approved Contact feature.
3. Proposed features must not be treated as existing requirements until approved.
4. Review identifies duplicate, conflicting, generic, unsupported, or obsolete rules.
5. Findings record owner, severity, action, and status.
6. Changes require versioned Constitution updates.
7. Review must specifically confirm that one entity is not split into separate Buyer and Seller Contacts.
8. Review must confirm Contact analytics reconcile to authoritative Purchase and Sales data.

## Invariants

- Governance review does not directly mutate Contact data.
- Unapproved proposals remain outside the v1 baseline.
