# INT-008 — Integration Security & Observability

## Security
- Provider secrets are server/worker only.
- Browser clients never receive scraping credentials/API keys.
- External payloads are validated as untrusted input.
- Redirects/URLs are constrained to approved provider hosts where applicable.
- Provider content must not be rendered as trusted HTML.
- Integration workers run with minimum required privileges.

## Observability
Track per provider:
- last successful call/refresh
- last failure
- latency
- success/error count
- rate-limit status when known
- stale asset count
- queue/job backlog
- parser/normalization failures

## Health
Admin health view distinguishes:
- provider unreachable
- rate-limited
- parser broken
- data validation failure
- stale but usable cached/DB observation

## Audit
Configuration/provider mapping changes are audited.
Routine market observations belong to market history/job telemetry rather than flooding high-level security audit logs.

## Alerting
Repeated Card DB or Market refresh failures should become visible to operators without blocking unrelated Purchase/Sales operations that can safely proceed with an explicit unavailable/stale market state.
