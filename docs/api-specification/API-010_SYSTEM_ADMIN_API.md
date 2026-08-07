# API-010 — System & Admin API

## Configuration
- `GET /api/v1/admin/config`
- `PATCH /api/v1/admin/config/{key}`
Permission: ADMIN_ACCESS / specific config permission.

## Users
- list users
- activate/deactivate
- lock/unlock
- role assignments
- permission assignments
- session revoke
All audited.

## Storage Master
- list/create/update/deactivate storage locations

## Product Category / Definition Administration
Uses domain-authorized admin endpoints rather than direct DB editing.

## Integrity
### POST `/api/v1/admin/integrity/run`
Starts read-only integrity job.

### GET `/api/v1/admin/integrity/runs/{id}`
Returns progress/findings.

## Health
### GET `/api/v1/admin/health`
Authorized detailed health view.

Public infrastructure liveness, if exposed, returns minimal non-sensitive status only.

## Maintenance
Admin-only maintenance-mode actions.

No endpoint may expose `.env`, DB credentials, filesystem listing, internal object keys as public access paths, or raw infrastructure secrets.
