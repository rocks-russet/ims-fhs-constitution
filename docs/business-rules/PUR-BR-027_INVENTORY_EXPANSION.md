        # PUR-BR-027 — Inventory Expansion

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. Commit expands each Purchase Item into physical Inventory records according to quantity.
2. Each expanded unit inherits itemType, ownerCode, source fields, Final Cost, and ownership snapshot.
3. CARD and PRODUCT units use their approved inventory schemas.
4. Splittable Product metadata is retained for later Inventory split operations.
5. Expansion order must be deterministic.
6. Expansion failures roll back the entire commit.

        ## Invariants

        - Expanded unit count equals total committed quantity.
- No partial Inventory expansion remains after failure.
