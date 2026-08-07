# ARCH-009 — API Contract Principles

## Style
HTTP API with versioned contracts; internal event contracts are separately versioned.

## Requirements
- Authenticated protected routes.
- Server-side permission + resource-scope checks.
- Stable business IDs in URLs/payloads.
- Idempotency key for critical mutations.
- Consistent error envelope.
- Pagination/filter/sort contracts for large lists.
- Mutation responses return resulting business ID/state.
- Long non-critical work is queued; API returns accepted/committed state without waiting for background processing.
- Never expose server filesystem paths, secrets, password hashes, session tokens, or internal credentials.
