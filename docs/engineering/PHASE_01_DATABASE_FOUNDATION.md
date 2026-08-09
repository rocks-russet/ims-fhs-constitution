# Phase 01 — Database Foundation

Status: IMPLEMENTATION CHECKPOINT

## Constitution alignment

This checkpoint implements the platform-level database foundation required before domain phases:

- PostgreSQL remains the authoritative transactional source of truth.
- Schema changes are deterministic, ordered, versioned migrations.
- Applied migration files are protected by SHA-256 checksum.
- Development uses Railway `DATABASE_URL` through a service reference.
- User-facing timestamps remain an application presentation concern; PostgreSQL uses `timestamptz`.
- Domain tables are intentionally deferred to their roadmap phases.

## Migration 0001

Creates only:

- `schema_migrations`
- `system_configurations`
- `numbering_sequences`
- `system_logs`

It also seeds non-secret platform configuration and initial business-number sequence definitions.

## Deployment behavior

Application startup:

1. validates `DATABASE_URL`
2. executes unapplied migrations in lexical order
3. refuses to start if an already-applied migration file has changed
4. starts Next.js only after migration success

This keeps Development deterministic while the project has a single application replica.

Before horizontal scaling or Production, migration execution will be moved to a dedicated release/pre-deploy job so multiple replicas cannot race to migrate.

## Environment rule

Development, Staging, and Production require independent databases and secrets.
No Development business/test data is promoted into Production by default.
