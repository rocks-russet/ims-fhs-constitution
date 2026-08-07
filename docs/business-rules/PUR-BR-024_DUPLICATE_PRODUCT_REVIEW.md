        # PUR-BR-024 — Duplicate Product Review

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. New Product definitions require duplicate checking before approval.
2. Duplicate review compares normalized category, product name, attributes, unit, branding, and reference URL where applicable.
3. Likely duplicates must be resolved by reuse, merge proposal, or justified separate creation.
4. Review result is recorded.
5. Product approval and Purchase commit remain separate actions.
6. Ordinary CARD identity continues to use the Card DB and card-specific duplicate logic.

        ## Invariants

        - Duplicate review never silently merges Product definitions.
- Purchase cannot bypass Product master approval.
