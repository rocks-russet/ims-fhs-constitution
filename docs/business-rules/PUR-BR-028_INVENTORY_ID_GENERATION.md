        # PUR-BR-028 — Inventory ID Generation

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. Every expanded Inventory unit receives one unique immutable inventoryId.
2. ID generation follows the approved owner-aware Inventory convention.
3. Generated IDs must be reserved atomically.
4. Duplicate IDs are prohibited.
5. Failed commit must not leave reusable ambiguous IDs unless the authoritative ID policy explicitly permits gaps.
6. Purchase History records every generated inventoryId.

        ## Invariants

        - One physical unit has one inventoryId.
- inventoryId never changes after commit.
