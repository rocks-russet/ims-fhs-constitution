# CON-BR-008 — Contact Search and Selection

## Purpose

Define deterministic and safe contact lookup for Purchase, Sales, and administrative workflows.

## Rules

1. Search must support at least:
   - `contactId`;
   - display name;
   - phone number;
   - marketplace or social reference;
   - role;
   - tag; and
   - address text.
2. Search must normalize case, spacing, punctuation, and phone formatting without changing stored source values.
3. Search results must display enough context to distinguish similar contacts.
4. Selection for a transaction must use `contactId`, never display name alone.
5. Inactive, archived, and merged contacts must be visually distinguishable.
6. Merged contacts must resolve to the surviving contact for new selections.
7. Inactive or archived contacts cannot be selected for new transactions unless an authorized override explicitly permits it.
8. Search must not expose restricted contact fields to unauthorized users.
9. Empty or broad searches must use bounded pagination or result limits.
10. Search ranking must not silently merge or rewrite contacts.

## Invariants

- Search results do not become a source of truth independent from contact records.
- Selection always resolves to one stable contact identity.
- Similar names do not imply duplicate identity.
- Search behavior does not modify contact data.

## Related

- CON-BR-001
- CON-BR-005
- CON-BR-006
