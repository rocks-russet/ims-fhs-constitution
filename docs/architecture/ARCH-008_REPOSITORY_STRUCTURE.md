# ARCH-008 — Application Repository Structure

Recommended implementation layout:

```text
apps/
  web/
  worker/

packages/
  domain/
    purchase/
    inventory/
    sales/
    finance/
    contact/
    portfolio/
    market/
    auth/
  platform/
    events/
    approvals/
    numbering/
    audit/
    notifications/
    storage/
    scheduler/
  db/
  shared/

migrations/
tests/
```

## Rule
Business logic lives in domain/application services, not UI components or route handlers. Platform code must not absorb domain business decisions.
