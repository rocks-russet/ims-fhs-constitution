# API-015 — Versioning, Idempotency, Pagination & Concurrency

## Versioning
Baseline prefix: `/api/v1`.
Breaking contract changes require a reviewed versioning strategy.

## Idempotency
Critical mutation endpoints require `Idempotency-Key`.

Examples:
- Purchase Commit
- Inventory Split/Bulk Extraction
- Order Completion
- Withdrawal Completion
- Internal Transfer Completion
- other financial postings

Server stores/reconciles idempotency identity so network retry cannot duplicate business side effects.

## Concurrency
Use entity version/updatedAt or transactional locking as appropriate.
State conflicts return `409`.

## Pagination
Large collections use server-side pagination.

Suggested response meta:
```json
{
  "page":1,
  "pageSize":50,
  "total":1200,
  "hasNext":true
}
```

Cursor pagination may replace page-number pagination for high-volume histories if later justified.

## Sorting / Filtering
Only whitelisted fields may be sorted/filtered.
Never interpolate raw client column names directly into SQL.

## Field Selection
Inventory dynamic columns may request approved field sets, but server authorization controls whether sensitive financial fields are returned.
