# CON-BR-033 — Multi-Platform Commerce Identity

## Feature Origin

Contact Detail → Commerce.

## Purpose

Represent marketplace/store identities across multiple platforms under one canonical Contact.

## Rules

1. A Contact may have zero, one, or multiple Commerce Identities.
2. A single Contact may simultaneously have identities on Tokopedia, Shopee, TikTok Shop, Lazada, Bukalapak, Facebook, direct channels, or future/custom platforms.
3. Commerce Identity may store platform, label, store/profile display name, profile/store URL, handle/username, external account/store ID, primary status, active status, notes, and audit metadata.
4. Platform support is extensible and must not require a new Contact schema for each marketplace.
5. Commerce Identity is subordinate to the canonical Contact and never replaces `contactId`.
6. One Contact may have multiple Commerce Identities on the same platform when they represent distinct legitimate stores/accounts.
7. General Contact search may match Commerce Identity platform, store/profile name, URL, handle, or external ID.
8. Commerce Identity participates in duplicate review and Contact Merge.
9. Merge preserves unique Commerce Identities and must not silently discard marketplace identity history.
10. A marketplace/store identity can be the initial reliable identity for a partially-known Seller.
11. Purchase and Sales records must identify the transaction channel separately from canonical Contact identity.
12. When a transaction uses a Commerce Identity, transaction-time platform/store context must be snapshotted so later Contact edits do not alter historical meaning.

## Invariants

- Multi-platform activity for the same counterparty aggregates under one canonical Contact.
- Platform identity is not a transaction-completion signal.
- Historical platform/store context remains reproducible.
