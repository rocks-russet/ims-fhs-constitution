# ARCH-010 — Deployment Architecture

## Baseline
- Railway Web Service
- Railway Worker Service where background jobs justify separation
- PostgreSQL
- Object Storage for private images/PDFs/attachments
- Redis optional for cache, distributed session support, rate limiting, and job queue
- HTTPS/TLS enforced

## Performance
- Common reads/search target <2s under expected load.
- Normal transaction mutations target <5s.
- Non-critical work runs asynchronously.
- UI shows VALIDATING/COMMITTING state and prevents duplicate interaction during critical mutations.

## Operations
- Scheduled OPTCG/Card DB refresh
- PriceCharting/Yuyutei refresh
- Portfolio/analytics refresh
- Backup and integrity schedules
- Health monitoring and dead-letter visibility
