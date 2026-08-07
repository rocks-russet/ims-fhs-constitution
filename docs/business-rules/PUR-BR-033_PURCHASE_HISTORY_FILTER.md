        # PUR-BR-033 — Purchase History Filter

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. Filters support date range, Seller, owner, Platform, itemType, category, currency, and status where applicable.
2. Multiple filters combine deterministically.
3. Filter state may be reset.
4. All-Time view is available where practical.
5. Filtered totals must state the active scope.
6. Test or invalid data exclusion must be explicit.

        ## Invariants

        - Filtered totals reconcile to the displayed population.
- Filters do not alter source data.
