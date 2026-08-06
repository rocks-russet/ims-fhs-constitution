# CON-BR-005 — Contact Duplicate Detection

## Feature Origin

Create Contact and Duplicate Review.

## Purpose

Warn users before creating duplicate Contacts while avoiding unsafe automatic merges.

## Rules

1. Duplicate detection must run before Contact creation and before Merge approval.
2. Matching considers normalized name, phone, marketplace identity, social identity, and address.
3. Exact phone or verified external-identity matches carry more weight than name similarity.
4. Results are `EXACT_MATCH`, `LIKELY_DUPLICATE`, `POSSIBLE_DUPLICATE`, or `NO_MATCH`.
5. Name similarity alone must never trigger automatic Merge.
6. Exact matches should reuse the existing Contact unless reviewed evidence shows different entities.
7. Users may create a separate Contact after a warning only by recording the reason.
8. Duplicate checks include ACTIVE, INACTIVE, MERGED, and ARCHIVED Contacts.
9. Ignored duplicate candidates remain auditable.

## Invariants

- Duplicate detection never silently merges Contacts.
- Buyer/Seller role differences do not justify duplicate Contacts.
- One entity should resolve to one active Contact.
