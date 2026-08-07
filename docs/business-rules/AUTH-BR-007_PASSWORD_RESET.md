# AUTH-BR-007 — Password Reset

## Feature Origin

Authentication & Authorization v1 — IMS FHS public-web security baseline.

## Rules

1. Authorized reset uses temporary one-time credential/secure reset flow; old password is never visible; reset revokes sessions/trusted devices.
2. Enforcement is server-side and deny-by-default.
3. Security-relevant changes are auditable.
4. Historical actor/security evidence remains reconstructable.
5. Client UI state never overrides server authorization.

## Invariants

- Knowing a URL, ID, or endpoint never grants access.
- Credentials, session secrets, and MFA secrets are never exposed to ordinary clients or logs.
- Protected data is returned only after authentication, permission, and resource-scope checks succeed.
