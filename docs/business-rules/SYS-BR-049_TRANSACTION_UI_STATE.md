# SYS-BR-049 — Transaction UI State and Interaction Lock

## Feature Origin

System / Platform v1 — IMS FHS Railway architecture foundation.

## Rules

1. Important mutations expose IDLE→VALIDATING→COMMITTING→SUCCESS/ERROR state; during COMMITTING related controls are disabled, visible loading/stage feedback is shown, and double-submit is prevented.
2. Domain business rules remain authoritative for domain-specific decisions.
3. Platform behavior must be observable, auditable, and safe under retry/concurrency.
4. User-facing responsiveness must be preserved by keeping non-critical work asynchronous where safe.
5. Security and authorization requirements apply to every platform operation.

## Invariants

- Platform engines do not silently overwrite authoritative domain history.
- Background retry must not duplicate business side effects.
- Knowing internal IDs or routes never bypasses authorization.
