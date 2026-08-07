# DB-001 — Database Principles

## Source of Truth
PostgreSQL is the authoritative transactional database for IMS FHS v2.

## Core Rules
1. Stable business IDs (`INV-`, `PUR-`, `ORD-`, `WD-`, etc.) are immutable and unique.
2. Monetary values use exact decimal/numeric storage. Floating point is prohibited for money.
3. Historical transaction snapshots are preserved and never rewritten merely because master data changes.
4. Domain history/audit tables are append-only where practical.
5. Critical mutations use database transactions.
6. Derived Portfolio and Analytics data must be rebuildable from authoritative source tables.
7. Redis, if introduced, may hold cache/session/rate-limit/queue state but never the sole copy of business truth.
8. All user-facing timestamps are rendered in Asia/Jakarta, while database timestamps use timezone-aware UTC-compatible storage.
9. Foreign keys and unique/check constraints enforce invariants whenever domain boundaries allow.
10. Business Rules remain authoritative when this blueprint conflicts with a BR.

## Identifier Strategy
Use an internal UUID primary key where useful for relational joins plus a unique immutable business number where the entity is user-facing.

Example:
- internal `id uuid primary key`
- `inventory_number varchar unique not null` → `INV-000000123`

Business numbers are generated through the SYS Numbering Engine.
