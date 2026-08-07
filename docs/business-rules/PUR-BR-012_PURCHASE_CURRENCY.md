        # PUR-BR-012 — Purchase Currency

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. Every Purchase has one transaction currency.
2. IMS FHS v1 defaults to IDR.
3. Currency is shared by all items in one cart.
4. Buy price, shipping, discount, and tax use the cart currency.
5. Foreign currency use requires an approved exchange-rate workflow before IDR Final Cost is committed.
6. Currency changes trigger complete recalculation.

        ## Invariants

        - One cart cannot mix transaction currencies.
- Committed currency and rate snapshot remain immutable.
