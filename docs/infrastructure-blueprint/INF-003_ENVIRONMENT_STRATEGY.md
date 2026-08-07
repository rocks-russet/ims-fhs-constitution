# INF-003 — Environment Strategy

## Environments
- Development
- Staging
- Production

## Isolation
Each environment has independent:
- database
- secrets
- session secrets
- storage namespace/bucket
- queue/cache namespace
- external-provider configuration
- deployment URL

## Production Data
Production data must not be copied casually to Development/Staging.

When production-like data is needed:
- sanitize/anonymize sensitive fields
- use controlled snapshots
- document the reason and retention

## Feature Rollout
New high-risk features should be verified in Staging before Production.
