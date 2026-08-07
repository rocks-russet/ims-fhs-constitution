# AUTH-BR-008 — Super Admin Password Reset

## Feature Origin

Authentication & Authorization v1 — IMS FHS public-web security baseline.

## Rules

1. AK/SUPER_ADMIN may reset another user's password through governed server-side action; may require step-up MFA; fully audited.
2. Enforcement is server-side and deny-by-default.
3. Security-relevant changes are auditable.
4. Historical actor/security evidence remains reconstructable.
5. Client UI state never overrides server authorization.

## Invariants

- Knowing a URL, ID, or endpoint never grants access.
- Credentials, session secrets, and MFA secrets are never exposed to ordinary clients or logs.
- Protected data is returned only after authentication, permission, and resource-scope checks succeed.
