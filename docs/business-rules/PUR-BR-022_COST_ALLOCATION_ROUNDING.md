        # PUR-BR-022 — Cost Allocation Rounding

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. Financial allocations are committed in whole IDR units unless the active currency policy states otherwise.
2. Calculation may use higher internal precision before final allocation.
3. Rounding remainder is assigned deterministically.
4. The selected remainder method must be stable across shipping, discount, and tax.
5. No remainder may be lost or created.
6. Allocation details must remain reproducible.

        ## Invariants

        - Allocated component sums equal their transaction totals exactly.
- Rounding never changes the cart grand total.
