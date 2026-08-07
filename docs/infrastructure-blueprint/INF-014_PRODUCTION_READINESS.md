# INF-014 — Production Readiness Checklist

Before Go-Live verify:

## Security
- HTTPS
- adaptive MFA
- permissions/resource scope
- secrets
- no direct internal-file exposure
- rate limits
- security headers

## Data
- migrations complete
- test data cleanup approved
- Inventory restored to correct production state
- cross-domain integrity clean
- ownership/financial snapshots intact

## Performance
- critical user flows within acceptable latency
- no blocking non-critical work
- commit UI locking/loading state validated

## Reliability
- backup verified
- restore tested
- worker/job retry works
- scheduler visible
- dead-letter visibility
- health checks

## Integrations
- OPTCG/Card DB refresh healthy
- PriceCharting/Yuyutei behavior validated
- stale/unavailable behavior tested

## Operations
- monitoring
- admin access
- rollback/forward-fix plan
- incident ownership
