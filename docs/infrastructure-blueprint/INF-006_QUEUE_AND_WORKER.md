# INF-006 — Queue & Worker Infrastructure

## Background Candidates
- Portfolio refresh
- Analytics refresh
- Market refresh
- Card DB refresh
- Notifications
- thumbnails/image derivation
- backup verification
- integrity scans
- stale-data checks

## Job Requirements
Every job has:
- jobId
- jobType
- idempotency identity where needed
- attempts
- state
- timestamps
- error details
- source/correlation reference

## Reliability
- bounded retry
- exponential backoff with jitter
- dead-letter state
- visible operator recovery
- duplicate-safe consumers

## UX
A user-facing commit must not wait for non-critical jobs to finish.
