        # PUR-BR-043 — Purchase Currency Settings

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. IDR is the default Purchase currency for IMS FHS v1.
2. Enabled currencies come from approved configuration.
3. Currency precision and rounding rules are explicit.
4. Foreign-currency support requires exchange-rate configuration.
5. Changing settings does not rewrite committed Purchases.
6. Unsupported currencies cannot be selected.

        ## Invariants

        - One cart uses one currency.
- Historical currency snapshots remain immutable.
