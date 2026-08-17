# INV-BR-029 — Inventory Cost Basis

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Authoritative Inventory cost basis is Final Cost received from the committed Purchase/Acquisition calculation.
2. Cost detail retains buyPrice, allocatedShipping, allocatedDiscount, allocatedTax, and finalCost where supplied by Purchase.
3. Transformation/split/extraction cost inherits or reallocates existing cost rather than inventing new cost.
4. For BULK_CARD_LOT, average remaining cost per card is derived from authoritative total remaining cost divided by remaining physical-card quantity.
5. Bulk → Serialized extraction uses the pre-extraction weighted-average remaining cost per card by default; an authorized justified override may reallocate existing cost only when strict total-cost conservation is preserved.
6. Ordinary partial Bulk sale consumes cost automatically using the pre-sale weighted-average remaining cost per card and does not accept a manual cost allocation override.
7. A full depletion of Bulk consumes all remaining cost so deterministic rounding cannot leave stranded cost on a zero-quantity Bulk Lot.
8. Current market price never changes acquisition cost, Final Cost, extracted allocated cost, or Bulk remaining cost.
9. Inventory Detail displays the applicable cost basis and cost provenance to authorized users.

## Invariants

- Inventory transformations, Bulk extraction, and Bulk sale never create or destroy acquisition cost.
- Cost basis and market value remain separate concepts.
- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
