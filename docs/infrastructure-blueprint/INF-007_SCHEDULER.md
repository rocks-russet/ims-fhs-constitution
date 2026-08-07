# INF-007 — Scheduler Infrastructure

## Responsibilities
Trigger recurring jobs only; scheduler itself contains no business logic.

## Candidate Schedules
- OPTCG/Card DB refresh
- PriceCharting EN refresh
- Yuyutei JP refresh
- stale market checks
- portfolio refresh fallback
- analytics refresh
- security/session cleanup
- backup
- integrity checks

## Policy
Exact cadence is configuration, not hard-coded Constitution behavior.

## Safety
- no overlapping duplicate run where unsafe
- stable schedule/job identity
- last-success/last-failure visibility
- manual rerun for authorized operators
