# ADR-001 — PostgreSQL as Source of Truth

## Decision
Use PostgreSQL as the authoritative transactional store.

## Rationale
IMS FHS requires transactions, constraints, cross-domain references, history, and reproducible financial state.

## Consequence
Redis/cache/read models may accelerate access but must be rebuildable from PostgreSQL.
