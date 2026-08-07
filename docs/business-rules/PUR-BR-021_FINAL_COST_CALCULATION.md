        # PUR-BR-021 — Final Cost Calculation

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. Per-unit Final Cost equals buyPrice plus allocatedShipping per unit minus allocatedDiscount per unit plus allocatedTax per unit.
2. Item total Final Cost equals the sum of expanded unit Final Costs.
3. Final Cost is stored on Inventory and Purchase History.
4. Profit calculations use Final Cost, not raw buyPrice.
5. Recalculation occurs whenever price, quantity, shipping, discount, tax, currency, or eligible allocation basis changes.
6. Displayed totals must reconcile to authoritative server calculation.

        ## Invariants

        - Final Cost is deterministic and reproducible.
- Cart-level totals equal the sum of item-level allocated results.
