# INT-007 — Rate Limit, Retry, Cache & Freshness

## Timeouts
Every external request has finite connect/read/overall timeouts.

## Retry
Retry only transient failures using bounded exponential backoff with jitter.
Do not blindly retry permanent validation/not-found responses.

## Rate Budget
Per-provider rate-budget policy is centrally configurable.
Background jobs must respect provider budgets and avoid stampeding concurrent requests.

## Cache
Normalized provider observations may be cached.
Cache is acceleration only; authoritative market observation history remains in PostgreSQL.

## Freshness
Every provider-specific dataset declares freshness state:
- FRESH
- STALE
- UNAVAILABLE
- FAILED_REFRESH

UI must expose stale/unavailable market values instead of silently presenting them as current.

## Request Deduplication
Concurrent requests for the same provider/card refresh should coalesce where practical to avoid unnecessary external calls.

## Circuit Protection
Repeated provider failures may temporarily open a circuit/cooldown while existing IMS FHS data remains available.
