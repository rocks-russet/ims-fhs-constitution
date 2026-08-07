        # PUR-BR-035 — Purchase Analytics

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. Purchase analytics derive from valid committed Purchase History.
2. Core metrics include transaction count, unit count, gross buy value, shipping, discount, tax, and Final Cost.
3. Metrics support All-Time and date-range views.
4. CARD, PRODUCT, and MIXED transactions remain distinguishable.
5. Test, rolled-back, duplicate-invalid, and rejected draft data are excluded.
6. Metric definitions and data cutoff must be visible.

        ## Invariants

        - Analytics do not alter Purchase data.
- Totals reconcile to authoritative history.
