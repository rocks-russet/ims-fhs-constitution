# API-002 — Authentication API

## POST `/api/v1/auth/login`
Purpose: Authenticate username/userCode + password and perform adaptive risk evaluation.

Request:
```json
{"userCode":"AK","password":"***"}
```

Response states:
- `AUTHENTICATED`
- `MFA_REQUIRED`
- failure

If MFA required, return a short-lived challenge identifier, never a TOTP secret.

Publishes/Audits:
- UserLoggedIn
- LoginFailed
- MFAChallenged where applicable

## POST `/api/v1/auth/mfa/verify`
Verifies TOTP/recovery challenge.

## POST `/api/v1/auth/logout`
Revokes current server-side session.

## GET `/api/v1/auth/me`
Returns:
- user identity
- roles
- permissions/capabilities
- default owner context
- current session assurance
- authorized dashboard scopes

## POST `/api/v1/auth/password/change`
Authenticated self-password change. Step-up may be required.

## POST `/api/v1/admin/users/{userCode}/password-reset`
Permission: `USER_MANAGE`
High sensitivity; step-up auth may be required.

## POST `/api/v1/auth/mfa/enroll/start`
## POST `/api/v1/auth/mfa/enroll/confirm`
## POST `/api/v1/auth/mfa/recovery/regenerate`
## DELETE `/api/v1/auth/trusted-devices/{id}`
## POST `/api/v1/admin/users/{userCode}/sessions/revoke`

All state-changing Auth endpoints are rate-limited and audited.
