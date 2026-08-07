        # PUR-BR-018 — Shipping Cost Allocation

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. Purchase shipping cost is allocated equally per purchased quantity across the cart.
2. Total allocation basis is the sum of eligible item quantities.
3. Each unit receives the same shipping allocation before rounding remainder handling.
4. Item allocatedShipping equals per-unit allocation multiplied by item quantity plus assigned remainder if any.
5. Zero shipping produces zero allocatedShipping.
6. Quantity changes trigger recalculation.

        ## Invariants

        - Sum of allocatedShipping equals transaction shipping exactly.
- Shipping allocation is not weighted by item price.
