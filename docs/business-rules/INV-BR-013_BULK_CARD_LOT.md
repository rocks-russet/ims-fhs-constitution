# INV-BR-013 — Bulk Card Lot

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Low-value cards may be stored as one `BULK_CARD_LOT` without identifying every card individually.
2. Bulk Card is represented in Purchase as the controlled canonical Product Definition `Bulk Card`; grouping labels remain Purchase/Inventory instance data.
3. Purchase Qty represents commercial lot count. Physical/Base Qty represents the physical card count represented by the Purchase line.
4. On Purchase Commit, one Bulk Card Purchase line creates one `BULK_CARD_LOT` Inventory record by default.
5. Purchase Commit MUST NOT expand Bulk physical quantity into one `SERIALIZED_CARD` per physical card.
6. Bulk Lot stores stable Inventory ID, Bulk Product Definition reference, label/grouping metadata, physical quantity, remaining acquisition cost, average remaining cost per card, owner, holder, storage, notes, and provenance.
7. Bulk composition detail MUST NOT be fabricated when it was not actually recorded.
8. Purchase Commit assigns the authoritative acquisition cost of the Bulk Purchase line to the created Bulk Inventory.
9. Average remaining cost per card is derived from authoritative remaining acquisition cost divided by remaining physical quantity.
10. Bulk acquisition cost remains separate from market value. Market data MUST NOT rewrite acquisition cost.
11. Bulk → Serialized extraction is an Inventory transformation and follows the applicable Bulk Extraction and lineage rules.
12. Ordinary Bulk Sales selection is NOT an Inventory split/transformation.
13. Sales may reserve all or part of a Bulk Lot by source Inventory ID plus explicit quantity.
14. Bulk Sales reservation MUST NOT create a derived Bulk Inventory merely because the selected quantity is partial.
15. Bulk Sales reservation MUST NOT permanently reduce physical quantity or acquisition cost before Order completion.
16. Available Bulk quantity for Sales is:
    `availableToSell = physicalQuantity - activeReservedQuantity`.
17. Aggregate active reservations MUST NOT exceed physical quantity.
18. A valid pre-completion cancellation releases reserved quantity without Inventory merge-back.
19. Permanent Bulk quantity depletion occurs at Order `COMPLETED`.
20. At completion, Inventory consumes the reserved quantity and canonical weighted-average acquisition cost atomically.
21. Ordinary Bulk sale cost allocation does not permit a manual per-sale cost-basis override.
22. When completion consumes the entire remaining physical quantity, the complete remaining acquisition cost is consumed so deterministic rounding residue is not stranded.
23. Selling Bulk does not fabricate serialized card identities for unidentified cards.
24. Bulk Sales reservation/finalization is distinct from Bulk → Serialized extraction and generic Product Split.
25. Historical Purchase, reservation, Sales consumption, and extraction provenance must remain reconstructable.

## Invariants

- Bulk remaining physical quantity can never become negative.
- Bulk remaining acquisition cost can never become negative.
- `activeReservedQuantity <= physicalQuantity`.
- Reservation does not permanently mutate physical quantity or acquisition cost.
- Cancellation before completion does not require merge-back.
- Completion is the permanent Sales depletion boundary.
- Quantity and cost conservation are enforced at completion.
- Full depletion consumes all remaining acquisition cost.
- Historical source records remain reconstructable.
- Cross-module references use stable IDs.
