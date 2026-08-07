# INT-001 — External Integration Principles

## Scope
Defines how IMS FHS communicates with third-party data providers. This specification is separate from the internal `/api/v1` IMS FHS API.

## Core Rules
1. Domain engines never depend directly on provider-specific HTTP/scraping details.
2. External sources are accessed through a provider adapter owned by the appropriate integration/Market layer.
3. Provider failure must not corrupt authoritative IMS FHS business data.
4. Provider responses are validated and normalized before being published to Card DB or Market data.
5. External data is never trusted as authentication, ownership, cost basis, or financial truth without an explicit Business Rule.
6. Provider credentials/secrets are stored only in approved secret management.
7. Rate limits, timeouts, retries, and caching are provider-aware and configurable.
8. Every successful external observation stores provider identity and observation/retrieval time.
9. Historical transaction market snapshots are immutable even when provider data changes later.
10. Integration behavior must respect provider terms, access restrictions, and technical limitations.

## Integration Boundary
External Provider → Adapter → Validation/Normalization → IMS FHS Market/Card service → Domain consumers.

Purchase, Inventory, Sales, Portfolio, and Analytics consume normalized IMS FHS data, not raw external responses.
