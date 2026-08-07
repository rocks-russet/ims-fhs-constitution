# INV-BR-042 — Portfolio Position Grouping

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Inventory Portfolio groups economically comparable inventory into positions without removing underlying inventory identities.
2. Serialized copies of the same specific card/variant/language/grade grouping may form one position.
3. EN and JP positions remain separate for valuation because market providers differ.
4. Product positions use an approved grouping key suitable to their Product Definition.
5. Every position supports drill-down to constituent Inventory records.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
