# ADR-008 — Non-Critical Work Must Not Block Commits

## Decision
Analytics, portfolio refresh, notifications, thumbnails, routine market refresh, and similar work run asynchronously where transaction correctness does not require them.

## Rationale
Target responsive user experience, normally below five seconds for mutations.

## Consequence
Background queue, observable job state, retries, and idempotent consumers are required.
