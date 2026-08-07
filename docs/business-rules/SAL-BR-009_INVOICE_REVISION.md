# SAL-BR-009 — Invoice Revision and Supersession

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. Any material commercial change shown on an invoice requires a new invoice version.
2. Prior invoice versions are marked SUPERSEDED, not deleted.
3. Revision records reason, actor, timestamp, previous version, and changed fields.
4. Payment-method switching after Invoice V2 generation creates a new Invoice V2 and supersedes the old one.
5. Downloaded/exported invoices must display version and status.
6. Historical invoice lineage remains auditable.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
