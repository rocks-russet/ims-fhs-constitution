# INF-005 — Redis & Cache Policy

## Decision
Redis is optional at initial deployment.

## Appropriate Uses
- hot read cache
- portfolio/dashboard summary cache
- market observation cache
- session/risk metadata acceleration
- rate limiting
- distributed job queue
- request deduplication
- short-lived coordination locks

## Prohibited Use
Redis must not be the sole authoritative store for:
- Inventory
- Purchase
- Sales
- Wallet balances/history
- Profit
- Contact
- Ownership
- transaction market snapshots

## Failure Rule
Loss of Redis should degrade performance/functionality gracefully but must not destroy authoritative business data.

## Cache Invalidation
Prefer event-driven invalidation/refresh after authoritative commits.
