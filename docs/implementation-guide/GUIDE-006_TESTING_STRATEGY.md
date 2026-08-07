# GUIDE-006 — Testing Strategy

## Unit
- cost allocation
- profit calculation
- ownership distribution
- numbering
- permission evaluation
- market variance
- portfolio aggregation

## Integration
- Purchase Commit → Inventory
- Order Completion → Profit → Wallet
- Withdrawal → AK Approval → Posting
- Inventory Split → lineage/cost conservation
- Login → adaptive MFA → session

## Security
- direct URL/API access
- IDOR/BOLA
- privilege escalation
- session reuse/revocation
- CSRF
- brute-force/rate-limit behaviour

## Integrity
- duplicate inventory reservation
- duplicate financial posting
- broken reference
- orphan snapshot
- event retry idempotency

## Regression
Every bug affecting money, ownership, inventory quantity, authorization, or immutable history must receive regression coverage.
