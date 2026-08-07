# INV-BR-005 — Inventory Activation

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Production inventory becomes active only after the governing acquisition/receiving flow authorizes recognition.
2. Draft Purchase items do not create active Inventory.
3. Activation records recognizedAt and source reference.
4. Activation must include valid owner, cost basis where applicable, and required identity metadata.
5. Failed activation leaves no partial active inventory.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
