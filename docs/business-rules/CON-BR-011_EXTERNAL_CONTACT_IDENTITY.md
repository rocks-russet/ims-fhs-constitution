# CON-BR-011 — Marketplace and External Identity Management

## Feature Origin

Contact Detail → Marketplace.

## Purpose

Manage Facebook, Tokopedia, Shopee, Instagram, and other external Contact identities.

## Rules

1. External identities store provider, handle/external ID, URL where applicable, verification status, active status, and audit metadata.
2. A Contact may have multiple external identities.
3. The same verified external identity should not be actively linked to multiple Contacts without review.
4. External display name does not replace `contactId`.
5. Identity changes preserve prior values in history.
6. Deactivation is used instead of destructive deletion when historically referenced.
7. External identities support search and duplicate detection.
8. Marketplace identity does not independently prove payment or transaction completion.

## Invariants

- External identity is not the IMS primary key.
- Historical marketplace references remain reproducible.
- Changes remain auditable.
