# CON-BR-019 — Contact Role Transition

## Feature Origin

Contact Detail → Role editing.

## Purpose

Govern adding or removing Buyer and Seller roles on an existing Contact.

## Rules

1. Adding a role updates the existing `contactId`.
2. Role transition must never create a duplicate Contact.
3. Removing a role prevents future selection in that role but preserves historical transactions.
4. A Contact may retain both Buyer and Seller roles.
5. Role changes record actor, timestamp, reason, previous roles, and new roles.
6. Role removal is blocked when an active workflow still requires that role.
7. Role reactivation uses the same Contact identity.

## Invariants

- One entity remains one Contact across all roles.
- Role history is auditable.
