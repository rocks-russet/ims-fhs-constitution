# CON-BR-001 — Contact Identity and Lifecycle

## Feature Origin

Contact Manager → Identity.

## Purpose

Establish one authoritative Contact identity for every real-world person or organization interacting with IMS FHS.

## Rules

1. One real-world person or organization must be represented by one active Contact record.
2. Buyer and Seller are roles of the same Contact, not separate entity types.
3. A Contact may simultaneously hold `buyer = true` and `seller = true`.
4. All modules must reference the same immutable `contactId`, regardless of the role performed in a transaction.
5. Contact status is `ACTIVE`, `INACTIVE`, `MERGED`, or `ARCHIVED`.
6. Role changes must update the existing Contact and must not create a new Contact solely because the entity performs another role.
7. Contacts referenced by historical transactions must never be hard-deleted.
8. Lifecycle changes must record actor, timestamp, reason, previous status, and new status.

## Invariants

- One entity is not duplicated solely because it is both Buyer and Seller.
- `contactId` never changes.
- Historical transaction references remain resolvable.
- Role changes do not create a new identity.
