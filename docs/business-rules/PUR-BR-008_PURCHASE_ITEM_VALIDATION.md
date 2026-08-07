        # PUR-BR-008 — Purchase Item Validation

        ## Feature Origin

        Purchase Manager v1 Feature Map.

        ## Rules

        1. Every item must pass common and type-specific validation before commit.
2. Common validation includes itemType, quantity, buyPrice, ownerCode, and required source metadata.
3. CARD validation includes card identity, variant, language, condition, and other required card attributes.
4. PRODUCT validation includes category, product identity, unit definition, and splittable configuration where applicable.
5. Validation errors must identify the affected item and field.
6. Warnings may require acknowledgement but must not be silently ignored.

        ## Invariants

        - Invalid items cannot be committed.
- Validation does not mutate unrelated items.
