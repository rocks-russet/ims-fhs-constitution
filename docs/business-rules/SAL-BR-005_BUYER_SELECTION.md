# SAL-BR-005 — Buyer Selection and Contact Integration

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. Every sales order must reference one Buyer Contact by contactId.
2. Buyer selection uses Contact Manager; display name alone is not identity.
3. Buyer role may be added to an existing Contact rather than creating a duplicate Contact.
4. New buyer creation must use Contact duplicate detection.
5. Inactive, archived, or merged Contacts cannot be newly selected except through governed resolution.
6. Buyer reassignment after checkout requires governed order amendment.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
