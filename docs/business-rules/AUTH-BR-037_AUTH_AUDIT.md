# AUTH-BR-037 — Authentication and Authorization Audit

## Feature Origin

Authentication & Authorization v1 — IMS FHS public-web security baseline.

## Rules

1. Audit login success/failure, logout, revoke, password change/reset, lock/unlock, TOTP/recovery, trusted-device, role/permission changes, and sensitive admin actions; never log secrets.
2. Enforcement is server-side and deny-by-default.
3. Security-relevant changes are auditable.
4. Historical actor/security evidence remains reconstructable.
5. Client UI state never overrides server authorization.

## Invariants

- Knowing a URL, ID, or endpoint never grants access.
- Credentials, session secrets, and MFA secrets are never exposed to ordinary clients or logs.
- Protected data is returned only after authentication, permission, and resource-scope checks succeed.
