# DB-004 — Authentication & Authorization Schema

## `system_users`
- id UUID PK
- user_code VARCHAR UNIQUE NOT NULL
- display_name VARCHAR NOT NULL
- password_hash TEXT NOT NULL
- password_hash_algorithm VARCHAR NOT NULL
- password_hash_version VARCHAR NOT NULL
- is_active BOOLEAN NOT NULL
- account_locked BOOLEAN NOT NULL
- must_change_password BOOLEAN NOT NULL
- default_owner_code VARCHAR NULL
- created_at / updated_at

## `roles`
- id UUID PK
- role_code UNIQUE
- display_name
- active

Baseline: SUPER_ADMIN, OPERATOR, READ_ONLY.

## `permissions`
- id UUID PK
- permission_code UNIQUE
- description
- active

## `user_roles`, `role_permissions`, `user_permissions`
Explicit many-to-many assignment tables.

## `sessions`
- id UUID PK
- session_token_hash UNIQUE NOT NULL
- user_id FK
- assurance_level
- risk_context JSONB
- issued_at
- last_activity_at
- expires_at
- absolute_expires_at
- revoked_at
- revoke_reason

Unique/partial logic enforces baseline single active session per user.

## `user_mfa`
- user_id PK/FK
- totp_secret_ciphertext
- totp_enrolled_at
- enabled
- updated_at

Never store plaintext TOTP secret.

## `mfa_recovery_codes`
- id UUID PK
- user_id FK
- code_hash
- used_at
- created_at

## `trusted_devices`
- id UUID PK
- user_id FK
- token_hash UNIQUE
- device_context JSONB
- created_at
- expires_at
- revoked_at

## Security
Passwords, raw session tokens, raw TOTP secrets, and plaintext recovery codes must never be queryable business data.
