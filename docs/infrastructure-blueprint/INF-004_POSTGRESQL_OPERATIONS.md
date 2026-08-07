# INF-004 — PostgreSQL Infrastructure

## Responsibilities
PostgreSQL stores:
- domain transactional data
- immutable snapshots
- histories
- approvals/events/jobs when implemented in DB-backed mode
- authoritative Wallet Postings
- market observation history
- audit metadata where specified

## Operational Requirements
- connection pooling
- migration discipline
- statement/query monitoring
- appropriate indexes
- backup/restore support
- no public unrestricted database exposure
- least-privilege application credentials

## Transactions
Critical mutations use PostgreSQL transactions and constraints.

## Performance
Use:
- server-side pagination
- indexes based on real query patterns
- query-plan review
- bounded joins/aggregations

Avoid solving slow SQL by moving business truth to cache.
