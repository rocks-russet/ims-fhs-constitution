# INV-BR-025 — Inventory Storage

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. storage identifies the current physical storage location.
2. Storage uses an approved selectable label/master to avoid inconsistent free-text naming.
3. Storage may be simple or hierarchical in display, but no formal custody workflow is required.
4. Changing storage records previous/new location, actor, and timestamp.
5. Storage does not determine ownership.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
