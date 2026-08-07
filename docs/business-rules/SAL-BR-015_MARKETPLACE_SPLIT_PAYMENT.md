# SAL-BR-015 — Marketplace Split Payment

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. MARKETPLACE_SPLIT supports an order being paid through more than one payment component.
2. Each component records amount, payment channel, status, and evidence independently.
3. Marketplace fee applies only to the marketplace component unless an explicit rule says otherwise.
4. The direct component and marketplace component must reconcile to the order payable amount.
5. The agreed split must be shown clearly on Invoice V2.
6. Order moves to PAID only when all required components are satisfied.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
