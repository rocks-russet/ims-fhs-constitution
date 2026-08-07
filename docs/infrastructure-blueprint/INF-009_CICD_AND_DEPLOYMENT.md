# INF-009 — CI/CD & Deployment

## Source
GitHub is the source repository for implementation code.

## Pipeline
Recommended:
1. lint/typecheck
2. unit tests
3. integration tests
4. security/static checks
5. migration validation
6. build
7. deploy Staging
8. smoke test
9. Production deployment

## Database Changes
Migrations are applied in controlled order.
Prefer backward-compatible deployments.

## Production
No manual code edits directly on production service instances.

## Rollback
Application rollback is allowed only when schema compatibility is understood.
Production transaction history is never "rolled back" by deletion.
