# GUIDE-005 — Database & Migration Guide

- Schema changes use versioned migrations.
- No manual production schema drift.
- Foreign keys and uniqueness constraints should enforce stable-reference integrity where boundaries allow.
- Monetary fields use exact numeric/decimal representation, never floating-point money.
- Store timestamps consistently and present Asia/Jakarta where appropriate for user-facing operations.
- Migrations are tested on staging/backups before production.
- Destructive migration requires explicit migration plan and backup.
- Large backfills should be resumable/observable.
- Historical IDs and snapshots are not rewritten merely to simplify schema.
