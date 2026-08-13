# CON-BR-031 — Seller Payment Accounts

## Feature Origin

Contact Detail → Bank Accounts.

## Purpose

Preserve reusable seller payment-account information without making Purchase depend on mutable live Contact data.

## Rules

1. A Seller Contact may have zero, one, or multiple payment accounts.
2. A payment account may store provider/bank name, account number, account-holder name, label, active status, and primary status.
3. Missing payment-account data must not prevent a Seller Contact from existing or being selected when the purchase channel does not require direct seller bank transfer.
4. At most one active payment account is primary for a Contact.
5. Account numbers are normalized for duplicate prevention within the same Contact.
6. Account numbers are not globally unique because a legitimate account may be shared by multiple Contact identities.
7. Historical transactions must not depend on mutable live payment-account fields.
8. When a Purchase uses a seller payment account, the transaction must preserve the payment-account values used at transaction time.
9. Later Contact edits, deactivation, or Contact merge must not rewrite historical payment-account snapshots.
10. Contact merge preserves unique seller payment accounts and resolves the canonical primary account without destructive loss of history.

## Invariants

- Seller payment accounts belong to canonical Contact identity data.
- Payment execution and Purchase accounting remain Purchase/Finance responsibilities.
- Historical payment context remains reproducible.
