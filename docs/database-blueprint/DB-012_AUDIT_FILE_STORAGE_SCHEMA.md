# DB-012 — Audit & File Storage Schema

## `audit_records`
- id UUID PK
- audit_number UNIQUE
- actor_user_id nullable
- system_source nullable
- action
- target_type
- target_id
- outcome
- correlation_id nullable
- metadata JSONB
- created_at

Append-only.
Never store passwords, raw TOTP secrets, session tokens, private keys, or plaintext recovery codes.

## `file_references`
- id UUID PK
- file_number UNIQUE
- storage_provider
- object_key
- original_filename
- mime_type
- size_bytes
- checksum
- visibility_class
- owner_domain
- owner_reference_id
- created_by_user_id nullable
- created_at
- archived_at nullable

`object_key` is internal storage metadata and must not be exposed as unrestricted public filesystem path.

## File Access
Private artifacts (invoice PDF, proof, private images) are accessed through authorized application routes or signed-storage URLs with limited lifetime.
