# INV-BR-013 — Bulk Card Lot

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Low-value cards may be stored as one BULK_CARD_LOT without identifying every card individually.
2. Bulk Card is represented in Purchase as a controlled canonical Product Definition named `Bulk Card`; individual Bulk groupings are Inventory-instance data and must not require a new Product Definition for every lot.
3. A Purchase Draft may add `Bulk Card` as a Product line. The Purchase line records the purchased lot quantity and the physical card quantity represented by that line.
4. Purchase quantity represents commercial lot count. Physical/Base Quantity represents the number of physical cards contained in the purchased lot(s).
5. On Purchase Commit, one Bulk Card Purchase line creates one BULK_CARD_LOT Inventory record by default, using the total physical card quantity represented by that Purchase line. IMS must not expand the line into one SERIALIZED_CARD per physical card.
6. Multiple commercial lots on one Purchase line are consolidated into that one Bulk Inventory by default. Separate Bulk Inventory records require separate Purchase lines or an explicit future lot-separation workflow.
7. Bulk Lot stores inventoryId, canonical Bulk Card Product Definition reference, operator-defined bulk label, remaining physical-card quantity, total remaining cost, average remaining cost per card, owner, holder, storage, notes, and optional grouping metadata.
8. Bulk label and grouping metadata belong to the Purchase/Inventory instance, not to the canonical Bulk Card Product Definition. Examples include `Bulk RED OP11`, `Bulk SR OP09`, `Bulk Event Merah OP13`, or `Bulk Random Cards`.
9. Optional grouping metadata may include color, set, rarity/group, language, event/grouping label, or operator notes. IMS must not require composition detail that was not actually recorded.
10. Bulk Lot does not require a per-card identity list and must not fabricate detailed card composition that was never recorded.
11. Purchase Commit assigns the full authoritative acquisition cost of the Bulk Card Purchase line to the created Bulk Inventory as total remaining cost. Average remaining cost per card is derived from total remaining cost divided by physical card quantity.
12. Bulk acquisition cost remains separate from market value. Market data must never rewrite Bulk acquisition cost or average remaining cost.
13. A Bulk Lot may later be reduced only through an auditable Inventory operation, including Bulk → Serialized extraction, Sales quantity consumption, or another Constitution-approved operation.
14. A Bulk Lot may be sold in full or partially by quantity without first creating serialized child Inventory for the random/unidentified cards being sold.
15. For an ordinary partial Bulk sale, the cost basis consumed by the sale is derived automatically from the Bulk Lot's weighted-average remaining cost per card immediately before the sale.
16. Ordinary partial Bulk sale does not allow manual per-sale cost allocation override.
17. After a partial sale, remaining quantity and total remaining cost are reduced by the exact quantity and cost consumed by that sale, and the remaining average cost is derived again from those authoritative balances.
18. When the entire remaining Bulk quantity is sold, the sale consumes the entire remaining Bulk cost so no rounding residue remains stranded on a depleted Bulk Lot.
19. Selling Bulk does not fabricate card identities for cards that were never serialized.
20. Bulk → Serialized extraction follows INV-BR-015. Extraction creates individual serialized Inventory while preserving permanent lineage to the source Bulk Inventory and upstream acquisition provenance.
21. Bulk Card Product representation is a Purchase-entry convenience and canonical catalog identity; the authoritative operational Inventory type after commit remains BULK_CARD_LOT.

## Invariants

- One Bulk Card Purchase line creates one BULK_CARD_LOT Inventory by default, regardless of physical-card quantity.
- Bulk Purchase Commit never creates one Serialized Inventory per physical card unless the operator used a normal serialized Card acquisition flow instead of Bulk Card.
- Bulk remaining quantity can never become negative.
- Bulk total remaining cost can never become negative.
- Bulk physical quantity and acquisition cost remain reconstructable from Purchase through Inventory lifecycle.
- Partial-sale cost consumption plus post-sale remaining cost equals the pre-sale remaining cost, subject only to deterministic currency rounding with final depletion absorbing any remainder.
- Bulk label/grouping metadata must not be promoted into fake canonical Product Definitions.
- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
