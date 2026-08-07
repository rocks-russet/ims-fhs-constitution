# INF-012 — Backup & Disaster Recovery

## Backup Scope
- PostgreSQL
- file/object metadata
- required private object-storage artifacts
- configuration references necessary for restore

## Requirements
- automated schedule
- retention policy
- restore testing
- checksum/readability verification
- backup status visibility

## Recovery Objective
Exact RPO/RTO targets are set before Production based on business tolerance.

## Recovery Procedure
1. identify incident
2. stop unsafe mutations if required
3. select verified restore point
4. restore DB/files
5. run integrity checks
6. validate Auth/critical flows
7. reopen Production

A backup is not trusted until restore has been tested.
