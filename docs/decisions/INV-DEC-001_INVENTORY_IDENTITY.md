# INV-DEC-001 Inventory Identity

## Decision
Every physical inventory item receives exactly one immutable Inventory ID.

## Rules
- Format: INV-########
- Never reused.
- Never reassigned.
- Survives ownership changes.
- Survives listing status changes.

## Rationale
Inventory history must always be traceable.
