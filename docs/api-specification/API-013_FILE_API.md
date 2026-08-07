# API-013 — File & Artifact API

## POST `/api/v1/files`
Authorized multipart upload.
Server determines permitted owner domain/reference and storage visibility.

## GET `/api/v1/files/{fileNumber}`
Returns metadata only when authorized.

## GET `/api/v1/files/{fileNumber}/content`
Authorized download/stream or short-lived signed URL.

## DELETE `/api/v1/files/{fileNumber}`
Only where domain retention rules allow it; business-history artifacts usually archive/version instead of hard delete.

## Artifact Use Cases
- Inventory images
- Invoice PDFs
- Payment evidence
- Withdrawal transfer proof
- Reimbursement evidence
- other approved attachments

Never expose server filesystem paths or unrestricted object-storage keys.
