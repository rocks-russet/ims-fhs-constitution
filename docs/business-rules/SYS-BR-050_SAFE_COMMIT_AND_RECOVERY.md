# SYS-BR-050 — Safe Commit, Idempotency, and Error Recovery

## Feature Origin

System / Platform v1 — IMS FHS Railway architecture foundation.

## Rules

1. Critical commits are atomic and server-idempotent; client lock is supplemental; success shows resulting business IDs, while failure preserves/reloads a safe pre-commit draft/state and must not leave partial production side effects.
2. Domain business rules remain authoritative for domain-specific decisions.
3. Platform behavior must be observable, auditable, and safe under retry/concurrency.
4. User-facing responsiveness must be preserved by keeping non-critical work asynchronous where safe.
5. Security and authorization requirements apply to every platform operation.

## Invariants

- Platform engines do not silently overwrite authoritative domain history.
- Background retry must not duplicate business side effects.
- Knowing internal IDs or routes never bypasses authorization.
