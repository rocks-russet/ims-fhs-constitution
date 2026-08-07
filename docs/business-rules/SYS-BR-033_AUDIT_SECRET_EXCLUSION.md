# SYS-BR-033 — Audit Secret Exclusion

## Feature Origin

System / Platform v1 — IMS FHS Railway architecture foundation.

## Rules

1. Passwords, TOTP secrets, session tokens, plaintext recovery codes, private keys, and other secrets must never be written to audit logs.
2. Domain business rules remain authoritative for domain-specific decisions.
3. Platform behavior must be observable, auditable, and safe under retry/concurrency.
4. User-facing responsiveness must be preserved by keeping non-critical work asynchronous where safe.
5. Security and authorization requirements apply to every platform operation.

## Invariants

- Platform engines do not silently overwrite authoritative domain history.
- Background retry must not duplicate business side effects.
- Knowing internal IDs or routes never bypasses authorization.
