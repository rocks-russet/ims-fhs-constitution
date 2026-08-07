# DB-011 — System, Event, Approval & Job Schema

## `domain_events`
- id UUID PK
- event_number UNIQUE
- event_type
- domain_owner
- source_type
- source_id
- schema_version
- correlation_id
- causation_id nullable
- payload JSONB
- occurred_at
- published_at
- processing_status

## `event_consumptions`
Tracks consumer idempotency:
- event_id
- consumer_code
- status
- attempts
- last_error
- completed_at

Unique `(event_id, consumer_code)`.

## `background_jobs`
- id UUID PK
- job_number UNIQUE
- job_type
- status
- attempts
- scheduled_at
- started_at
- completed_at
- idempotency_key nullable
- payload JSONB
- error_code/error_message

## `dead_letter_records`
- source_type EVENT/JOB
- source_id
- failure_reason
- attempts
- last_failed_at
- resolved_at nullable
- resolution_note

## `approval_requests`
- id UUID PK
- approval_number UNIQUE
- source_type
- source_id
- requested_action
- requester_user_id
- rule_code/version
- amount/context JSONB
- status
- created_at

## `approval_decisions`
- id UUID PK
- approval_request_id FK
- approver_user_id FK
- decision
- note
- decided_at

Separation-of-duties rules are enforced by domain/Approval Engine logic.
