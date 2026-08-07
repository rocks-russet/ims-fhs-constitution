# SAL-BR-012 — Payment Option Visibility

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. Before Invoice V1 generation, the operator chooses which of DIRECT, MARKETPLACE, and MARKETPLACE_SPLIT are shown to the buyer.
2. At least one payment option must be enabled.
3. Hidden options are not displayed on Invoice V1.
4. Visibility controls presentation only; it does not delete the underlying supported payment method.
5. Changing visible options requires a new Invoice V1 version if the invoice has already been issued.
6. Visibility selection is stored with the invoice snapshot.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
