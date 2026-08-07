# API-014 — Error & Response Contract

## Success Envelope
```json
{
  "success": true,
  "data": {},
  "meta": {
    "requestId": "req_..."
  }
}
```

## Error Envelope
```json
{
  "success": false,
  "error": {
    "code": "PURCHASE_ALREADY_COMMITTED",
    "message": "Purchase is already committed.",
    "requestId": "req_...",
    "details": null
  }
}
```

## HTTP Mapping
- 400 validation / malformed request
- 401 unauthenticated
- 403 authenticated but unauthorized
- 404 resource unavailable/not found where appropriate
- 409 conflict / state / idempotency / concurrency conflict
- 422 semantically invalid business input where preferred by framework
- 429 rate limit
- 500 unexpected internal failure
- 503 dependency/service temporarily unavailable

## Error Principles
- Stable machine-readable `code`.
- User-facing message safe to display when appropriate.
- Do not leak SQL, stack traces, secrets, internal filesystem paths, existence of sensitive unauthorized resources, or provider credentials.
- Validation errors may return field-level structured details.
