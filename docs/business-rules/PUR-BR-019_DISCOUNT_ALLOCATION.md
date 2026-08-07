        # PUR-BR-019 — Discount Allocation

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. Purchase discount is allocated proportionally by item gross value.
2. Item gross value equals unit buy price multiplied by quantity.
3. Allocation weight equals item gross value divided by total eligible gross value.
4. Zero discount produces zero allocatedDiscount.
5. If total gross value is zero, non-zero discount blocks commit.
6. Quantity or price changes trigger recalculation.

        ## Invariants

        - Sum of allocatedDiscount equals transaction discount exactly.
- Higher-value items receive proportionally higher discount allocation.
