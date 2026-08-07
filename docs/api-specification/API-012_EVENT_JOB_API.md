# API-012 — Event & Background Job API

These endpoints are primarily Admin/Internal.

## GET `/api/v1/admin/jobs`
Returns queued/running/failed/dead-letter jobs.

## GET `/api/v1/admin/jobs/{jobNumber}`

## POST `/api/v1/admin/jobs/{jobNumber}/retry`
Only for retry-safe jobs and authorized users.

## GET `/api/v1/admin/events/{eventNumber}`
Read-only event envelope and consumer state.

## Internal Worker Contract
Workers claim jobs/events through infrastructure-specific queue/DB mechanism, not public browser endpoints.

## Requirements
- idempotent consumer identity
- attempts/error history
- dead-letter state
- correlationId/causationId
- no arbitrary event injection from normal browser clients
