# GUIDE-002 — Transaction & Commit Guide

## Critical Mutation Pattern
1. Client enters VALIDATING.
2. Server validates payload, permission, current state, references, concurrency, and idempotency.
3. Client enters COMMITTING and relevant controls are locked.
4. Server performs one atomic authoritative transaction.
5. Required domain/event records are committed.
6. Server responds with resulting IDs/state.
7. Client enters SUCCESS or safe ERROR state.
8. Non-critical work is queued.

## Required Protections
- server-side idempotency
- transaction boundary
- optimistic/pessimistic concurrency where required
- no double submit
- no partial production state
- safe retry
- explicit error response

A fake percentage progress bar is discouraged. Use real stage labels where useful.
