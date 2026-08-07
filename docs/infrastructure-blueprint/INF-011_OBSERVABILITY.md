# INF-011 — Observability & Monitoring

## Web
Monitor:
- latency p50/p95/p99
- request/error rate
- 4xx/5xx
- auth failure spikes

## Database
Monitor:
- connections
- slow queries
- lock contention
- storage growth
- backup health

## Worker/Queue
Monitor:
- queue depth
- oldest job age
- retry count
- dead-letter count
- worker failures

## Integrations
Monitor:
- last successful OPTCG/Card refresh
- PriceCharting freshness
- Yuyutei freshness
- rate limits/failures
- parser failures

## Business Integrity
Surface critical integrity audit findings separately from ordinary infrastructure alerts.
