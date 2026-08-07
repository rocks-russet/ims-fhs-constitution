# ADR-003 — Redis as Optional Accelerator

## Decision
Redis is optional infrastructure for cache/session/rate-limit/queue workloads, not business truth.

## Rationale
Initial FHS scale may not require Redis everywhere; architecture remains Redis-ready without unnecessary complexity.

## Consequence
System remains functionally recoverable if Redis cache is lost.
