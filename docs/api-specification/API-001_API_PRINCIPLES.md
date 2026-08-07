# API-001 — Internal API Principles

## Scope
This specification defines the internal IMS FHS HTTP API used by the web client and approved internal services.

It does **not** define external provider integration such as OPTCG API, PriceCharting, or Yuyutei.

## Baseline
- Prefix: `/api/v1`
- JSON request/response unless file streaming is required.
- Protected by server-side authentication and authorization.
- Stable business IDs are used in route parameters and payloads.
- Critical mutations require idempotency.
- API responses never expose secrets, raw session tokens, password hashes, TOTP secrets, storage internals, or server filesystem paths.
- Request validation, permission, resource scope, transaction state, and concurrency are server-authoritative.

## Mutation Pipeline
Authentication → Authorization → Resource Scope → Validation → Transaction → Domain Event / Outbox → Audit → Response → Async follow-up.

## Classification
- Public: only explicitly approved unauthenticated endpoints such as login.
- Authenticated: ordinary user endpoints.
- Admin: elevated permission required.
- Internal/Worker: not callable by ordinary browser clients.
