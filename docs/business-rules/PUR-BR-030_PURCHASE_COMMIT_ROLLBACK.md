        # PUR-BR-030 — Purchase Commit Rollback

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. Commit executes as one atomic operation across Purchase History and Inventory creation.
2. Any blocking failure triggers rollback of all commit-side effects.
3. Rollback must not delete prior unrelated records.
4. Retry uses the same idempotency identity or a governed replacement identity.
5. Rollback details are logged.
6. Uncertain rollback creates an integrity exception and blocks further unsafe retry.

        ## Invariants

        - No half-committed Purchase is considered valid.
- Rollback restores the pre-commit state.
