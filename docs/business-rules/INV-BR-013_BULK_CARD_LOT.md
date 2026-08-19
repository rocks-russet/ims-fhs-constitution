# INV-BR-013 — Bulk Card Lot

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Low-value cards may be stored as one BULK_CARD_LOT without identifying every card individually.
2. Bulk Card is represented in Purchase as a controlled canonical Product Definition named `Bulk Card`; individual Bulk groupings are Inventory-instance data and must not require a new Product Definition for every lot.
3. A Purchase Draft may add `Bulk Card` as a Product line. The Purchase line records the purchased lot quantity and the physical card quantity represented by that line.
4. Purchase quantity represents commercial lot count. Physical/Base Quantity represents the number of physical cards contained in the purchased lot(s).
5. On Purchase Commit, one Bulk Card Purchase line creates one BULK_CARD_LOT Inventory record by default, using the total physical card quantity represented by that Purchase line. IMS must not expand the line into one SERIALIZED_CARD per physical card.
6. Multiple commercial lots on one Purchase line are consolidated into that one Bulk Inventory by default. Separate Bulk Inventory records require separate Purchase lines or an explicit Constitution-approved allocation/transformation workflow.
7. Bulk Lot stores inventoryId, canonical Bulk Card Product Definition reference, operator-defined bulk label, remaining physical-card quantity, total remaining cost, average remaining cost per card, owner, holder, storage, notes, and optional grouping metadata.
8. Bulk label and grouping metadata belong to the Purchase/Inventory instance, not to the canonical Bulk Card Product Definition. Examples include `Bulk RED OP11`, `Bulk SR OP09`, `Bulk Event Merah OP13`, or `Bulk Random Cards`.
9. Optional grouping metadata may include color, set, rarity/group, language, event/grouping label, or operator notes. IMS must not require composition detail that was not actually recorded.
10. Bulk Lot does not require a per-card identity list and must not fabricate detailed card composition that was never recorded.
11. Purchase Commit assigns the full authoritative acquisition cost of the Bulk Card Purchase line to the created Bulk Inventory as total remaining cost. Average remaining cost per card is derived from total remaining cost divided by physical card quantity.
12. Bulk acquisition cost remains separate from market value. Market data must never rewrite Bulk acquisition cost or average remaining cost.
13. A Bulk Lot may later be reduced only through an auditable Inventory operation, including Bulk → Serialized extraction, Bulk Sale Allocation, or another Constitution-approved operation.
14. A full sale of the entire remaining Bulk quantity may consume the source BULK_CARD_LOT directly.
15. A partial Bulk sale must not consume an arbitrary quantity directly from the source Bulk Lot as the Sales line's Inventory identity. Before reservation/sale, IMS creates a derived BULK_CARD_LOT through the backend-only Bulk Sale Allocation workflow defined by INV-BR-066.
16. Bulk Sale Allocation uses the source Bulk Lot's weighted-average remaining acquisition cost immediately before allocation to derive the allocated cost basis.
17. Ordinary Bulk Sale Allocation does not allow manual per-sale cost allocation override.
18. After an allocation, source remaining quantity and source total remaining cost are reduced by the exact quantity and cost allocated. Source average remaining cost is derived again from the authoritative remaining balances.
19. Allocation quantity plus source post-allocation quantity must equal source pre-allocation quantity. Allocated cost plus source post-allocation cost must equal source pre-allocation cost, subject only to deterministic currency rounding.
20. When the entire remaining Bulk quantity is sold, the sale consumes the entire remaining Bulk cost so no rounding residue remains stranded on a depleted Bulk Lot.
21. Selling or allocating Bulk does not fabricate card identities for cards that were never serialized.
22. Bulk → Serialized extraction follows INV-BR-015. Extraction creates individual serialized Inventory while preserving permanent lineage to the source Bulk Inventory and upstream acquisition provenance.
23. Bulk Sale Allocation and Bulk → Serialized extraction are distinct operations. Bulk Sale Allocation creates another BULK_CARD_LOT; it does not create SERIALIZED_CARD Inventory.
24. Bulk Card Product representation is a Purchase-entry convenience and canonical catalog identity; the authoritative operational Inventory type after commit remains BULK_CARD_LOT.
25. If a sale using an allocated child Bulk Inventory is cancelled before completion, the child Inventory follows normal Sales cancellation/restoration behavior and remains an independent Inventory record. IMS must not silently merge it back into the parent Bulk Lot.

## Invariants

- One Bulk Card Purchase line creates one BULK_CARD_LOT Inventory by default, regardless of physical-card quantity.
- Bulk Purchase Commit never creates one Serialized Inventory per physical card unless the operator used a normal serialized Card acquisition flow instead of Bulk Card.
- Bulk remaining quantity can never become negative.
- Bulk total remaining cost can never become negative.
- Bulk physical quantity and acquisition cost remain reconstructable from Purchase through Inventory lifecycle.
- Partial Bulk sale uses a derived BULK_CARD_LOT Inventory created through Bulk Sale Allocation.
- Allocation cost plus post-allocation remaining cost equals the pre-allocation remaining cost, subject only to deterministic currency rounding.
- Full depletion absorbs any deterministic rounding remainder.
- Bulk label/grouping metadata must not be promoted into fake canonical Product Definitions.
- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
