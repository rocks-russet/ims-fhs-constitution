# CON-BR-010 — Default Address Policy

## Feature Origin

Contact Detail → Addresses.

## Purpose

Define default-address behavior.

## Rules

1. A Contact may have one active default address per purpose.
2. Setting a new default atomically unsets the previous default for that purpose.
3. Default address must be active and sufficiently complete.
4. Users may explicitly select a non-default active address for a transaction.
5. Transaction-specific selection overrides the default.
6. Changing the default does not alter existing transaction snapshots.
7. Deactivating a default address requires choosing a replacement or leaving no default.
8. Merge requires explicit resolution of conflicting default addresses.

## Invariants

- At most one active default exists per Contact and purpose.
- Inactive addresses cannot remain effective defaults.
- Historical transactions are not rewritten.
