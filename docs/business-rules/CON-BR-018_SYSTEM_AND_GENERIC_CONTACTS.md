# CON-BR-018 — System and Generic Contacts

## Purpose

Govern designated system-owned or generic contacts such as `Other Seller` without allowing them to conceal known real-world identities.

## Rules

1. A system or generic contact must be explicitly marked with a governed contact type.
2. Creation, renaming, deactivation, or replacement of a system contact requires administrative authorization.
3. A generic contact may be used only when the actual contact is unknown, unavailable, or not reasonably obtainable at the time of the transaction.
4. The reason for using a generic contact must be recorded when required by the workflow.
5. A generic contact must not be used merely to bypass duplicate detection or contact creation.
6. If the actual contact becomes known later, a governed correction may link the transaction to the real contact while preserving the original snapshot and audit history.
7. System contacts must not be merged into ordinary contacts through standard merge flow.
8. System contacts must not contain personal passwords, shared credentials, or payment secrets.
9. Search results must clearly distinguish system contacts from ordinary contacts.
10. Historical use of a deactivated generic contact must remain resolvable.

## Invariants

- System contacts have stable reserved identities.
- Generic contact use remains distinguishable from verified contact identity.
- Correcting a generic reference does not erase original transaction history.
- System contacts cannot silently acquire ordinary personal ownership.

## Related

- CON-BR-001
- CON-BR-003
- CON-BR-005
- CON-BR-012
