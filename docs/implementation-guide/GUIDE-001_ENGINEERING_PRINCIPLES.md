# GUIDE-001 — Engineering Principles

1. Business Rules are authoritative for behaviour.
2. PostgreSQL is authoritative transactional storage.
3. Domain engine owns mutation of its data.
4. Other engines use approved contracts/events; no uncontrolled cross-domain table mutation.
5. Client UI is never trusted for permission, owner, financial amount, or status authority.
6. Stable business IDs are immutable.
7. Historical snapshots are preserved.
8. Derived data must be rebuildable.
9. Prefer explicit state over hidden side effects.
10. Optimize for correctness first, then move safely deferrable work asynchronous.
