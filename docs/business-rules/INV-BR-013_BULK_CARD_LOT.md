# INV-BR-013 — Bulk Card Lot

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Low-value cards may be stored as one BULK_CARD_LOT without identifying every card individually.
2. Bulk Lot stores inventoryId, operator-defined label, remaining quantity, total remaining cost, average remaining cost per card, owner, holder, storage, and notes.
3. Examples include Bulk RED OP11, Bulk SR OP09, Bulk Event Merah OP13, or another operator-defined grouping.
4. Bulk Lot does not require a per-card identity list.
5. Bulk use must not fabricate detailed card composition that was never recorded.
6. A Bulk Lot may be sold in full or partially by quantity without first creating serialized child Inventory for the random/unidentified cards being sold.
7. For an ordinary partial Bulk sale, the cost basis consumed by the sale is derived automatically from the Bulk Lot's weighted-average remaining cost per card immediately before the sale.
8. Ordinary partial Bulk sale does not allow manual per-sale cost allocation override.
9. After a partial sale, remaining quantity and total remaining cost are reduced by the exact quantity and cost consumed by that sale, and the remaining average cost is derived again from those authoritative balances.
10. When the entire remaining Bulk quantity is sold, the sale consumes the entire remaining Bulk cost so no rounding residue remains stranded on a depleted Bulk Lot.
11. Selling Bulk does not fabricate card identities for cards that were never serialized.

## Invariants

- Bulk remaining quantity can never become negative.
- Bulk total remaining cost can never become negative.
- Partial-sale cost consumption plus post-sale remaining cost equals the pre-sale remaining cost, subject only to deterministic currency rounding with final depletion absorbing any remainder.
- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
