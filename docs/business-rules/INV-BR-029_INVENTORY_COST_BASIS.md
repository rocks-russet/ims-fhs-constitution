# INV-BR-029 — Inventory Cost Basis

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Authoritative Inventory cost basis is Final Cost received from the committed Purchase/Acquisition calculation.
2. Cost detail retains buyPrice, allocatedShipping, allocatedDiscount, allocatedTax, and finalCost where supplied by Purchase.
3. Transformation/split cost inherits or reallocates existing cost rather than inventing new cost.
4. Current market price never changes Final Cost.
5. Inventory Detail displays the cost basis to authorized users.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
