# DB-016 — Migration, Archiving & Backup

## Migrations
- Every schema change is versioned.
- No manual production schema drift.
- Migrations run in deterministic order.
- Test in staging against representative backup/data volume.
- Prefer additive/backward-compatible migration sequences.
- Large backfills are resumable and observable.
- Destructive migrations require verified backup and explicit plan.

## Legacy GAS Migration
Import/migration must preserve:
- stable legacy references where needed for traceability
- owner/ownership snapshots
- Purchase/Inventory/Sales relationships
- Wallet history
- source timestamps
- audit/migration provenance

Do not blindly preserve obsolete storage implementation details such as GAS JSON-file mechanics when PostgreSQL provides the new source of truth.

## Archiving
Use lifecycle status/read-only archival rather than hard delete for production business records.

## Backup
Database backup plus required object-storage metadata/files must be restorable together.
Backup verification is required; successful file creation alone is not proof of recoverability.

## Go-Live
Before production:
1. final migration rehearsal
2. clean approved test data
3. restore inventory state correctly
4. run cross-domain integrity audit
5. verify backup
6. deploy production migration
7. smoke test critical flows
