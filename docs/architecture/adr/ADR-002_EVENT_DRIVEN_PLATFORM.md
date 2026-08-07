# ADR-002 — Event-Driven Platform

## Decision
Use domain events for downstream reactions while keeping synchronous correctness inside the owning domain transaction.

## Rationale
Reduces coupling and keeps user-facing commits fast.

## Consequence
Consumers must be idempotent and failed events/jobs require retry/dead-letter handling.
