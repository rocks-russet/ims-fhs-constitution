# ARCH-004 — Database Design Principles

## Source of Truth
PostgreSQL is the authoritative transactional database.

## Requirements
- Foreign keys where domain ownership permits.
- Unique constraints on all stable business IDs.
- Transactional commits for Purchase, Sales completion, wallet postings, split/transformation, and approval-sensitive mutations.
- Server-side pagination/filter/sort for large tables.
- Index common lookup fields such as inventoryId, purchaseId, orderId, contactId, ownerCode, status, cardNumber, productDefinitionId, referenceType/referenceId.
- Immutable/history tables are append-only where practical.
- Derived Portfolio/Analytics read models may be rebuilt from authoritative data.
- Redis, if introduced, is cache/queue/session infrastructure only and never the sole source of business truth.
