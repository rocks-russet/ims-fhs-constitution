# CON-BR-012 — Contact Privacy, Access, and Audit

## Purpose

Protect contact information while preserving operational usability, accountability, and traceability.

## Rules

1. Contact access must follow role-based authorization.
2. Users may view only the fields required for their operational responsibilities.
3. Sensitive fields include phone numbers, full addresses, private notes, and external account identifiers.
4. Contact creation, update, deactivation, merge, archival, and sensitive-field access must be auditable.
5. Audit records must capture actor, timestamp, action, contact ID, and affected fields.
6. Credentials, passwords, authentication secrets, or financial access tokens must never be stored in contact records.
7. Export of contact data requires authorization, declared purpose, scope limitation, and audit logging.
8. Contact exports must minimize unnecessary personal data.
9. Unauthorized bulk enumeration or scraping of contacts must be prevented.
10. Privacy correction requests must update contact master data without rewriting immutable transaction snapshots.
11. Audit history must not expose secrets that are prohibited from storage.
12. Contact data disposal, where legally and operationally permitted, must preserve required transaction and audit references.

## Invariants

- Operational access does not imply unrestricted export rights.
- Contact records never become a credential store.
- Historical transaction evidence remains intact after contact corrections.
- Sensitive contact actions remain attributable.

## Related

- CON-BR-001
- CON-BR-007
- AUTH-BR
- FIN-BR-053
