# SYS-BR-035 — Notification Channels

## Feature Origin

System / Platform v1 — IMS FHS Railway architecture foundation.

## Rules

1. Baseline supports in-app/email where implemented; WhatsApp, Discord, push, and webhooks are future pluggable channels and do not require domain-engine rewrites.
2. Domain business rules remain authoritative for domain-specific decisions.
3. Platform behavior must be observable, auditable, and safe under retry/concurrency.
4. User-facing responsiveness must be preserved by keeping non-critical work asynchronous where safe.
5. Security and authorization requirements apply to every platform operation.

## Invariants

- Platform engines do not silently overwrite authoritative domain history.
- Background retry must not duplicate business side effects.
- Knowing internal IDs or routes never bypasses authorization.
