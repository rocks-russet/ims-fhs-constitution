# DB-002 — Naming & Data Types

## Naming
- Table names: `snake_case`, plural.
- Column names: `snake_case`.
- Primary key: `id`.
- Foreign key: `<entity>_id`.
- User-facing number: `<entity>_number`.
- Timestamps: `created_at`, `updated_at`, `<event>_at`.
- Boolean fields: `is_*`, `has_*`, or explicit business term.

## Recommended PostgreSQL Types
- Internal ID: `uuid`
- Business number/code: `varchar`
- Money: `numeric(18,2)` for IDR-compatible exact arithmetic
- Percentages: `numeric(9,6)`
- Quantity: `integer`
- Timestamp: `timestamptz`
- Date: `date`
- Flexible immutable snapshot payload: `jsonb`
- Long note: `text`
- Hash/checksum: `varchar` or `bytea` based on implementation
- Enums: PostgreSQL enum or constrained varchar only after migration policy is chosen

## JSONB Policy
JSONB is allowed for:
- immutable snapshots
- versioned event payloads
- flexible category-specific metadata
- external-provider raw metadata

JSONB must not be used to avoid proper relational modeling for fields that are frequently filtered, joined, constrained, or indexed.
