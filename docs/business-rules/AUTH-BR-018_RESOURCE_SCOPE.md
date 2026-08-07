# AUTH-BR-018 — Resource-Level Authorization

## Feature Origin

Authentication & Authorization v1 — IMS FHS public-web security baseline.

## Rules

1. Access is checked per resource/scope to prevent IDOR/BOLA; changing URL/ID must never expose another user's portfolio, wallet, finance, or admin data.
2. Enforcement is server-side and deny-by-default.
3. Security-relevant changes are auditable.
4. Historical actor/security evidence remains reconstructable.
5. Client UI state never overrides server authorization.

## Invariants

- Knowing a URL, ID, or endpoint never grants access.
- Credentials, session secrets, and MFA secrets are never exposed to ordinary clients or logs.
- Protected data is returned only after authentication, permission, and resource-scope checks succeed.
