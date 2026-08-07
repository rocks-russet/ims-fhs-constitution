        # PUR-BR-007 — Purchase Quantity

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. Quantity must be a positive whole number for CARD and ordinary PRODUCT items.
2. Quantity represents the number of purchased inventory units before any later split operation.
3. Quantity changes trigger cost-allocation recalculation.
4. Quantity changes after commit are prohibited.
5. Splittable PRODUCT quantity and internal split-unit definition remain distinct concepts.
6. Zero or negative quantities block commit.

        ## Invariants

        - Committed expanded unit count equals the declared Purchase quantity.
- Quantity cannot silently change after commit.
