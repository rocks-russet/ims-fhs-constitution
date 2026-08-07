        # PUR-BR-039 — Purchase by Platform Analytics

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. Platform analytics aggregate committed Purchases by platform identity.
2. Metrics include spend, transaction count, unit count, average purchase value, and date trends.
3. Inactive platform history remains included for historical periods.
4. Unknown or generic platform values remain separately identifiable.
5. Platform changes after commit do not rewrite historical classification.
6. Totals across all platforms reconcile to the selected Purchase population.

        ## Invariants

        - Platform is a transaction channel, not Seller identity.
- Analytics are read-only.
