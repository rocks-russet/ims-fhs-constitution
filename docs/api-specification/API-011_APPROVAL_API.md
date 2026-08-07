# API-011 — Approval API

Approval API provides reusable workflow infrastructure. Domain rules decide when approval is required and who qualifies.

## GET `/api/v1/approvals`
Filter:
- sourceType
- status
- requester
- approver eligibility

## GET `/api/v1/approvals/{approvalNumber}`
Returns request + immutable decision history.

## POST `/api/v1/approvals/{approvalNumber}/approve`
Validates:
- session
- permission
- eligible approver
- separation-of-duties
- current status
- domain rule

## POST `/api/v1/approvals/{approvalNumber}/reject`

## Internal Create
Domain engines create approval requests through internal service contract; ordinary clients should not fabricate arbitrary approval subjects.

Publishes:
- ApprovalRequested
- ApprovalDecided

Decision response never directly mutates unrelated domain state except through the approved owning-domain continuation.
