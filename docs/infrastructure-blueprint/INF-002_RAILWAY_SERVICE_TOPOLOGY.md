# INF-002 — Railway Service Topology

## Baseline Services

### Web Service
Responsibilities:
- serve application UI
- internal `/api/v1`
- authentication/session entry points
- lightweight synchronous domain commands/queries
- emit reliable event/outbox records
- return user-facing success/error quickly

### Worker Service
Responsibilities:
- consume background jobs/events
- market refresh
- Card DB refresh
- portfolio refresh
- analytics refresh
- notification delivery
- file/background processing
- retry/dead-letter handling

### PostgreSQL
Authoritative source of truth.

### Object Storage
Private images, PDFs, evidence, and attachments.

### Redis
Optional.
Use only when justified for:
- cache
- rate limiting
- distributed session acceleration
- background queue
- short-lived locks/deduplication

## Deployment Principle
Start simple, but preserve the ability to split Web and Worker from day one.
