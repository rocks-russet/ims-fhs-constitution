# CON-BR-018 — System and Generic Contacts

## Feature Origin

Seller Management.

## Purpose

Govern designated Contacts such as `Other Seller`.

## Rules

1. System and generic Contacts have reserved stable identities.
2. `Other Seller` may be used only when the actual Seller is unknown or unavailable.
3. Generic Contact usage remains distinguishable from verified Contact identity.
4. Generic Contact cannot be used merely to bypass Contact creation or duplicate checks.
5. If the actual Seller becomes known later, a governed correction may link the real Contact while preserving history.
6. System Contacts cannot be merged through ordinary Merge.
7. System Contacts cannot store shared credentials or secrets.
8. Search clearly distinguishes system Contacts.

## Invariants

- System identities remain stable.
- Correcting a generic reference does not erase the original record.
