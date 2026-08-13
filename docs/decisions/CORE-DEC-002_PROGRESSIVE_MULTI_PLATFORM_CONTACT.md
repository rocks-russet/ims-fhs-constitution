# CORE-DEC-002 — Progressive Multi-Platform Contact Identity

## Status

Accepted — 2026-08-13

## Decision

IMS FHS uses one canonical Contact for a real trading counterparty even when the counterparty is initially only partially known.

A marketplace/store identity is sufficient to establish a Seller Contact when it is the most reliable known identity. The Contact can later be enriched with personal name, phone, address, payment account, Facebook, or additional marketplace identities without changing the canonical Contact ID.

One canonical Contact may own multiple Commerce Identities across multiple platforms. Purchase/Sales channel identity remains transaction context and must be snapshotted when historically relevant.

Seller payment accounts are reusable Contact attributes, but transactions that use them preserve transaction-time values rather than depending on mutable live Contact data.

## Consequences

- Marketplace-only sellers do not require fake personal data.
- Seller analytics can aggregate direct and multi-marketplace activity under one Contact.
- Later identity discovery uses progressive enrichment or governed merge.
- Historical transactions remain reproducible after Contact edits or merges.
