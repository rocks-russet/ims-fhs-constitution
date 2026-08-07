# INV-BR-010 — Card Metadata

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Serialized Card inventory references the authoritative card identity and stores required variant metadata.
2. Supported searchable metadata includes card number, name, set, rarity, color, card type, counter, language, variant, condition, grade, and grading data where applicable.
3. Card metadata must support Inventory Explorer dynamic columns.
4. Language is mandatory where market-provider selection depends on it.
5. Card identity metadata must remain traceable to the card database source.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
