        # PUR-BR-042 — Purchase Platform Registry

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. Platform registry defines selectable acquisition channels.
2. Each platform has stable ID, label, status, and audit metadata.
3. Duplicate normalized platforms are prohibited.
4. Inactive platforms remain resolvable historically.
5. Authorized users may add or deactivate platforms.
6. Platform registry changes do not rewrite committed Purchases.

        ## Invariants

        - One canonical active record exists per platform.
- Historical references remain valid.
