# API-003 — Contact API

## GET `/api/v1/contacts`
Permission: `CONTACT_VIEW`

Query:
- `q`
- role: buyer/seller/both
- status
- sort
- page / pageSize

## POST `/api/v1/contacts`
Permission: `CONTACT_EDIT`
Runs duplicate detection before create.

## GET `/api/v1/contacts/{contactNumber}`
Returns Contact Detail and authorized Buyer/Seller summaries.

## PATCH `/api/v1/contacts/{contactNumber}`
Permission: `CONTACT_EDIT`

## POST `/api/v1/contacts/{contactNumber}/roles`
Adds/removes Buyer/Seller role without creating a new Contact.

## POST `/api/v1/contacts/duplicate-check`
Read-only duplicate candidate evaluation.

## POST `/api/v1/contacts/merge`
Permission: elevated Contact merge capability.
Atomic and auditable.

## GET `/api/v1/contacts/{contactNumber}/seller-analytics`
Returns:
- Purchase count/value
- avg/median Buy-vs-Market
- below/near/above market proportions
- drill-down references

## GET `/api/v1/contacts/{contactNumber}/buyer-analytics`
Returns:
- Lifetime spending
- completed orders
- avg/median Sale-vs-Market
- above/near/below market proportions
- drill-down references

Analytics are derived and read-only.
