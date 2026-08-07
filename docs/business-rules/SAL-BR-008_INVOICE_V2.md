# SAL-BR-008 — Invoice V2

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. Invoice V2 represents the currently selected payment path and payable instruction.
2. Direct Invoice V2 shows the selected FHS receiving account and direct-payment amount.
3. Marketplace Invoice V2 shows marketplace checkout instruction and calculator result.
4. Split Marketplace Invoice V2 shows each required payment component separately.
5. Only one Invoice V2 version may be ACTIVE for the order at one time.
6. Invoice V2 generation does not lock the buyer permanently to that payment method.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
