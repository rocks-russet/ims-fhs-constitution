# AUTH-BR-033 — HTTPS and Secure Transport

## Feature Origin

Authentication & Authorization v1 — IMS FHS public-web security baseline.

## Rules

1. All production auth/protected traffic uses HTTPS/TLS; Secure cookies; credentials/TOTP/session IDs never sent over plaintext HTTP.
2. Enforcement is server-side and deny-by-default.
3. Security-relevant changes are auditable.
4. Historical actor/security evidence remains reconstructable.
5. Client UI state never overrides server authorization.

## Invariants

- Knowing a URL, ID, or endpoint never grants access.
- Credentials, session secrets, and MFA secrets are never exposed to ordinary clients or logs.
- Protected data is returned only after authentication, permission, and resource-scope checks succeed.
