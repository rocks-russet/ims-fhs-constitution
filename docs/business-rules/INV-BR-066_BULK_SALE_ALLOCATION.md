# INV-BR-066 — Bulk Sales Reservation and Completion Finalization

## Status

SUPERSEDES the previous pre-reservation Bulk Sale Allocation transformation behavior.

## Purpose

Define how Sales may reserve partial or full quantity from a `BULK_CARD_LOT` without prematurely transforming Inventory, and how Inventory permanently consumes the sold quantity only when the Order reaches `COMPLETED`.

## Rules

1. Ordinary Bulk Sales selection is initiated from the Sales workflow.
2. The Sales line references the source `BULK_CARD_LOT` Inventory ID plus explicit requested quantity.
3. Requested quantity must be a positive whole number.
4. Sales validates requested quantity against `availableToSell`.
5. `availableToSell = physicalQuantity - activeReservedQuantity`.
6. Reservation MUST be concurrency-safe and MUST prevent aggregate active reservations from exceeding physical quantity.
7. Creating a reservation MUST NOT create a derived Bulk Inventory ID.
8. Creating a reservation MUST NOT permanently reduce source physical quantity.
9. Creating a reservation MUST NOT permanently reduce source remaining acquisition cost.
10. Creating a reservation MUST NOT change economic ownership.
11. The reservation stores source Inventory identity, reserved quantity, Sales context, actor/time, and status.
12. A provisional weighted-average cost snapshot may be stored for visibility, but it is not realized COGS.
13. Claim Cart to Order reservation transfer MUST be atomic and MUST NOT duplicate reserved quantity.
14. Removing an eligible Claim Cart item releases its active reservation.
15. Cancelling an eligible Order before completion releases its active reservations.
16. Release of a reservation does not require merge-back because no permanent Inventory split occurred.
17. Order `COMPLETED` is the authoritative permanent depletion boundary for Bulk Sales.
18. Completion MUST revalidate that the Order owns an active reservation for the quantity being finalized.
19. Completion MUST consume exactly the reserved/finalized quantity from the source Bulk Inventory.
20. Completion MUST allocate acquisition cost using the source weighted-average remaining-cost rule.
21. Ordinary Bulk Sales do not allow manual cost-basis override.
22. Source remaining physical quantity and remaining acquisition cost are reduced atomically at completion.
23. Finalized COGS is supplied to Sales/Finance only after successful Inventory consumption.
24. Reservation finalization and Inventory consumption MUST be idempotent.
25. A reservation MUST NOT be finalized twice.
26. Completion MUST record immutable Sales-to-Inventory consumption provenance.
27. Full currently-available Bulk quantity follows the same reservation-first lifecycle.
28. When completion depletes the source to zero, all remaining acquisition cost is consumed to avoid rounding residue.
29. Inventory Detail may expose active reservations and completed consumption for audit, but ordinary Bulk Sales allocation controls belong in Sales.
30. Bulk Sales reservation/finalization is distinct from Bulk → Serialized extraction and generic Product Split.
31. A deliberate manual transformation into separately AVAILABLE Bulk Lots requires a separate governed Inventory transformation and is not ordinary Sales behavior.

## Invariants

- `activeReservedQuantity <= physicalQuantity`.
- `availableToSell = physicalQuantity - activeReservedQuantity`.
- Reservation does not permanently alter physical quantity or acquisition cost.
- Cancellation before completion releases reservation without merge-back.
- Completion consumes quantity/cost at most once.
- Finalized COGS equals canonical cost allocated to actually consumed quantity.
- Concurrent operations cannot oversell the same Bulk Lot.
- Historical reservation and consumption provenance remains reconstructable.
