# SAL-BR-039 — Sales Search

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. Search supports Order ID, Buyer, Contact ID, Inventory ID, item/card/product name, invoice ID, payment reference, tracking number, and marketplace reference.
2. Search is normalized where appropriate.
3. Results display enough context to distinguish similar orders.
4. Search includes archived history subject to filters and authorization.
5. Broad queries use bounded pagination.
6. Search does not mutate order data.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
