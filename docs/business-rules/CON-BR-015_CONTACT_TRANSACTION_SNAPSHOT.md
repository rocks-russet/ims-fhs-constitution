# CON-BR-015 — Contact Transaction Snapshot

## Feature Origin

Purchase, Sales, Invoice, and Shipment integration.

## Purpose

Preserve Contact details used at transaction time.

## Rules

1. Every transaction snapshot references the source `contactId`.
2. Sales snapshots may contain Buyer name, selected phone, address, and marketplace identity.
3. Purchase snapshots may contain Seller name, contact method, and platform identity.
4. Snapshots are created at the governing transaction event.
5. Later Contact edits do not rewrite existing snapshots.
6. Snapshot corrections require the applicable transaction amendment or document-revision workflow.
7. Merge does not rewrite historical snapshot values.
8. Only context-required Contact data is copied.

## Invariants

- Historical documents remain reproducible.
- Snapshots are immutable except through governed correction.
