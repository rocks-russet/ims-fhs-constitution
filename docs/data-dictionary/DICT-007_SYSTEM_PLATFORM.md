# DICT-007 — System / Platform Data Dictionary

## Domain Event
- eventId
- eventType
- aggregate/domain owner
- sourceId
- occurredAt
- schemaVersion
- correlationId
- causationId
- payload
- processing metadata

## Background Job
- jobId
- jobType
- status
- attempts
- scheduledAt
- startedAt
- completedAt
- idempotencyKey
- errorCode/errorMessage
- payload/reference

## Approval
- approvalId
- sourceType
- sourceId
- requestedAction
- requesterUserId
- status
- threshold/rule version
- createdAt

## Approval Decision
- approvalDecisionId
- approvalId
- approverUserId
- decision
- note
- decidedAt

## Audit
- auditId
- actorUserId/systemSource
- action
- targetType
- targetId
- outcome
- correlationId
- metadata
- createdAt

## File Reference
- fileId
- storageProvider
- objectKey
- mimeType
- size
- checksum
- visibility/security class
- createdAt

Never expose internal filesystem path as a business identifier.
