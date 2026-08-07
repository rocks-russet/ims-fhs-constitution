        # PUR-BR-025 — Duplicate Inventory Warning

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. Purchase validation may warn when a highly similar item appears already present or duplicated within the cart.
2. Warning criteria differ between CARD and PRODUCT.
3. A warning does not automatically mean the purchase is invalid because multiple physical copies are allowed.
4. User acknowledgement may be required.
5. Exact accidental duplicate cart rows should be detectable.
6. Warnings and user decisions remain auditable where material.

        ## Invariants

        - Duplicate warning does not merge physical inventory units.
- Legitimate multiple copies remain supported.
