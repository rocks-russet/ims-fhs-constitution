# INF-010 — Secrets & Network Security

## Secrets
Store in Railway or approved secret management:
- DB credentials
- session secrets
- TOTP encryption keys
- external API/provider credentials
- object-storage credentials
- webhook/notification secrets

## Public Exposure
Only required Web routes are internet-facing.

Do not expose:
- database admin ports unnecessarily
- Redis publicly without need
- worker administration endpoints
- internal debug routes
- filesystem listings
- `.env`
- backups
- source/config internals

## TLS
HTTPS enforced for Production.

## Principle
Infrastructure access is least privilege and deny-by-default.
