# INF-001 — Infrastructure Principles

## Goals
Infrastructure must support:
- secure public internet access
- responsive user experience
- reliable transactional correctness
- background processing
- recoverability
- observability
- controlled scaling

## Core Principles
1. Railway is the baseline deployment platform.
2. PostgreSQL is the authoritative transactional database.
3. Web requests should stay lightweight and user-facing.
4. Background work runs outside the request path whenever it can be safely deferred.
5. Redis is optional acceleration infrastructure, not business truth.
6. Secrets are never stored in public GitHub or client bundles.
7. All production traffic is HTTPS.
8. Production, staging, and development are isolated.
9. Backups and recovery procedures are part of production readiness.
10. Infrastructure must preserve domain boundaries and not become a place for hidden business logic.
