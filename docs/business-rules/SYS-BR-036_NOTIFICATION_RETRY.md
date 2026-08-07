# SYS-BR-036 — Notification Retry

## Feature Origin

System / Platform v1 — IMS FHS Railway architecture foundation.

## Rules

1. Delivery failure retries asynchronously and never rolls back a successfully committed business transaction solely because notification failed.
2. Domain business rules remain authoritative for domain-specific decisions.
3. Platform behavior must be observable, auditable, and safe under retry/concurrency.
4. User-facing responsiveness must be preserved by keeping non-critical work asynchronous where safe.
5. Security and authorization requirements apply to every platform operation.

## Invariants

- Platform engines do not silently overwrite authoritative domain history.
- Background retry must not duplicate business side effects.
- Knowing internal IDs or routes never bypasses authorization.
