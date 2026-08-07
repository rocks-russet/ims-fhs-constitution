        # PUR-BR-014 — Item Owner Assignment

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. ownerCode is mandatory for every Purchase Item.
2. The authenticated user is the actor and may assign an authorized ownerCode independently.
3. Default owner may follow the logged-in user for convenience but remains editable.
4. Supported owner codes follow the authoritative owner registry.
5. Changing ownerCode triggers ownership-rule re-resolution.
6. Unauthorized owner selection must be blocked.

        ## Invariants

        - Login identity never automatically fixes item ownership.
- Owner is stored per item.
