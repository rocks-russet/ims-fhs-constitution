        # PUR-BR-013 — Purchase Notes

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. Purchase Notes store transaction-relevant operational context.
2. Notes must not contain credentials, tokens, or full payment secrets.
3. Notes do not override Seller, Platform, item, owner, or cost fields.
4. Notes are included in draft persistence and Purchase History.
5. Material note edits after commit require an audited correction path.
6. Notes may be internal-only.

        ## Invariants

        - Notes are contextual, not authoritative cost evidence.
- Secrets are prohibited.
