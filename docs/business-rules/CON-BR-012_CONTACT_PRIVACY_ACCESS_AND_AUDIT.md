# CON-BR-012 — Contact Privacy, Access, and Audit

## Feature Origin

Contact Detail → Audit and access control.

## Purpose

Protect Contact data while retaining operational usability.

## Rules

1. Contact data access follows role-based authorization.
2. Sensitive fields include phones, full addresses, internal notes, and external identifiers.
3. Creation, update, role change, deactivation, merge, archive, import, export, and sensitive access are auditable.
4. Audit records include actor, timestamp, action, Contact ID, and affected fields.
5. Passwords, authentication secrets, payment credentials, and tokens must never be stored in Contact records.
6. Bulk export requires explicit authorization and purpose.
7. Export minimizes unnecessary personal data.
8. Unauthorized bulk enumeration is prohibited.
9. Contact corrections do not rewrite immutable transaction snapshots.

## Invariants

- Operational access does not imply unrestricted export.
- Contact Manager is not a credential store.
- Sensitive actions remain attributable.
