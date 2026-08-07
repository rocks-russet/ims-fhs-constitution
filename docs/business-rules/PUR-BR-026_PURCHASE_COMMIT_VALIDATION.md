        # PUR-BR-026 — Purchase Commit Validation

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. Commit requires valid transaction-level data and every item to pass validation.
2. Required ownership snapshots must resolve successfully.
3. Cost allocations must reconcile exactly.
4. Pending category or unresolved blocking approval prevents commit.
5. Commit must acquire the required concurrency protection.
6. Commit request must carry an idempotency identity.

        ## Invariants

        - Invalid or partially validated carts cannot commit.
- Commit either succeeds completely or leaves no production side effects.
