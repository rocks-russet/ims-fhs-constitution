        # PUR-BR-037 — Purchase by Owner Analytics

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. Owner analytics aggregate item-level Final Cost by ownerCode.
2. A multi-owner cart contributes only the relevant item amounts to each owner.
3. Transaction count and item count must be labeled distinctly.
4. Owner capital-distribution analytics may use ownership snapshots where required.
5. Date-range filtering follows Purchase analytics policy.
6. Owner totals across a full scope reconcile to total Purchase Final Cost.

        ## Invariants

        - Multi-owner carts are not duplicated in monetary totals.
- Owner assignment comes from committed item data.
