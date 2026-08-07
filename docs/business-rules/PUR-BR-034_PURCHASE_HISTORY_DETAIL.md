        # PUR-BR-034 — Purchase History Detail

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. Detail view shows transaction-level data and all committed item rows.
2. Each item shows owner, quantity, unit price, allocation components, Final Cost, ownership snapshot, and generated Inventory IDs.
3. Detail links to Seller Contact and related Inventory records.
4. Corrections and audit events are visible.
5. Sensitive internal fields follow authorization.
6. Detail view is read-only for committed core values.

        ## Invariants

        - Displayed detail can reproduce the committed calculation.
- History links remain valid.
