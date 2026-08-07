# INV-BR-022 — Raw Card to Graded Card

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. A raw Serialized Card may be transformed into a graded/slabbed Serialized Card when grading is completed.
2. Graded child stores grading company, grade, certification number where available, and slab images/metadata.
3. Raw parent lineage remains visible.
4. Cost additions related to grading require an approved cost treatment before changing the child's cost basis.
5. Grading does not erase Purchase origin or ownership history.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
