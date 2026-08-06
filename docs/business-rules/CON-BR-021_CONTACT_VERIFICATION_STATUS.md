# CON-BR-021 — Contact Verification Status

## Feature Origin

Duplicate Review and Contact Detail.

## Purpose

Represent confidence in individual Contact fields without implying full identity certification.

## Rules

1. Verification may apply to phone, address, or external identity fields.
2. Status is `UNVERIFIED`, `VERIFIED`, `DISPUTED`, or `EXPIRED` where applicable.
3. Verification records method, actor, timestamp, and evidence reference.
4. Verification does not replace transaction-specific validation.
5. Disputed or expired values remain in history but are not treated as currently verified.
6. Verification status supports duplicate review and safer selection.
7. A Contact does not become a different identity when a field loses verification.

## Invariants

- Verification applies to a field or evidence claim, not to ownership of the `contactId` as an absolute fact.
- Verification changes are auditable.
