# DICT-006 — Authentication & Authorization Data Dictionary

## System User
- userId / userCode
- displayName
- roleAssignments[]
- permissionAssignments[]
- active
- accountLocked
- mustChangePassword
- passwordHash
- passwordHashAlgorithm/version
- createdAt
- updatedAt

Raw passwords are never stored.

## Session
- sessionId
- userId
- issuedAt
- lastActivityAt
- expiresAt
- absoluteExpiresAt
- revokedAt
- revokeReason
- assuranceLevel
- riskContext metadata

## MFA
- userId
- totpEnabled/enrolled
- encrypted/protected TOTP secret
- enrolledAt
- recoveryCode hashes
- trustedDevices[]

## Trusted Device
- trustedDeviceId
- userId
- token hash/reference
- createdAt
- expiresAt
- revokedAt
- security metadata

## Permission
Permission is evaluated server-side and may include resource scope.

Representative:
- PURCHASE_CREATE
- PURCHASE_ASSIGN_ANY_OWNER
- OWNERSHIP_OVERRIDE
- INVENTORY_VIEW / INVENTORY_EDIT / INVENTORY_SPLIT
- SALES_MANAGE
- PAYMENT_CONFIRM
- FINANCE_VIEW
- WITHDRAWAL_REQUEST / WITHDRAWAL_APPROVE
- CONTACT_VIEW / CONTACT_EDIT
- ADMIN_ACCESS
- USER_MANAGE
- PERMISSION_MANAGE
