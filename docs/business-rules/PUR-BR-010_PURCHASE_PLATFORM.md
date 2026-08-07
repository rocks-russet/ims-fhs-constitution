        # PUR-BR-010 — Purchase Platform

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. Every Purchase may reference one acquisition platform or channel.
2. Platform values come from the approved Platform registry.
3. Inline platform creation requires authorization where enabled.
4. Inactive platforms cannot be selected for new purchases.
5. Historical platform values remain resolvable after registry changes.
6. Platform selection does not determine Seller identity.

        ## Invariants

        - One active platform value is stored per Purchase.
- Platform changes after commit require governed correction.
