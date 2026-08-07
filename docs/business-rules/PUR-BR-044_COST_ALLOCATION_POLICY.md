        # PUR-BR-044 — Purchase Cost Allocation Policy

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. Active Purchase cost-allocation policy is server-authoritative.
2. IMS FHS v1 allocates shipping equally per quantity.
3. IMS FHS v1 allocates discount proportionally by gross item value.
4. Tax is reserved and defaults to zero until activated by approved policy.
5. Rounding remainder assignment is deterministic.
6. Policy changes are versioned and affect only new or uncommitted Purchases.

        ## Invariants

        - Committed allocations retain the policy version used.
- Policy changes never rewrite historical Final Cost.
