# INV-DEC-005 — Bulk Sales Reservation and Completion Finalization

## Status

ACCEPTED — SUPERSEDES the previous INV-DEC-005 Bulk Sale Allocation decision.

## Context

IMS FHS supports low-value cards as `BULK_CARD_LOT` Inventory with physical quantity and aggregate acquisition cost.

A Sales operator may sell only part of a Bulk Card Lot. The previous decision created a derived Bulk Inventory immediately when Sales selected a partial quantity. That makes a reversible Sales selection produce a permanent Inventory transformation too early.

Sales selection and reservation are not physical Inventory transformations. Until an Order is completed, the selected quantity can still be released by cancellation or another valid Sales reversal.

## Decision

IMS FHS adopts **Sales-owned Bulk quantity reservation with Inventory-owned completion finalization**.

### 1. Selection happens in Sales

Bulk quantity selection is performed from the Sales workflow, not from Inventory Detail.

The operator selects a `BULK_CARD_LOT` and the quantity required by the Sales line.

Example:

- Source Inventory: `INV-000000123`
- Physical Quantity: `100`
- Requested Sales Quantity: `20`

### 2. Reservation does not split Inventory

Before Order completion, selecting or reserving 20 cards:

- MUST NOT create a derived Inventory ID;
- MUST NOT permanently reduce source physical quantity;
- MUST NOT permanently reduce source acquisition cost;
- MUST create a Sales reservation/allocation record linked to the source Inventory and Sales/Order context.

Availability is quantity-aware:

`availableToSell = physicalQuantity - activeReservedQuantity`

The system MUST prevent aggregate active reservations from exceeding the source physical quantity.

### 3. Reservation carries provisional cost information

The reserved Sales quantity may carry a provisional weighted-average cost snapshot for operator visibility and Sales calculation.

That provisional value does not itself constitute permanent Inventory depletion or realized COGS.

### 4. Completion is the permanent boundary

When the Order reaches `COMPLETED`, Inventory finalization occurs atomically.

For the Bulk quantity sold, the system:

1. consumes the reserved quantity from the source `BULK_CARD_LOT`;
2. allocates acquisition cost using the canonical weighted-average rule;
3. reduces the source remaining quantity and remaining acquisition cost;
4. records immutable Sales-to-Inventory consumption provenance;
5. supplies finalized COGS to the Sales/Financial completion process;
6. releases/closes the corresponding reservation.

A partial Bulk sale does not require creation of an AVAILABLE derived Bulk Inventory merely to represent the sold portion.

### 5. Cancellation releases reservation

If the Sales/Order is cancelled before completion:

- the reservation is released;
- source physical quantity and acquisition cost remain unchanged;
- no merge-back operation is required because no premature Inventory split occurred.

### 6. Full remaining quantity follows the same lifecycle

Selecting the full currently available quantity still creates a Sales reservation first.

Permanent source depletion occurs only at `COMPLETED`.

### 7. Domain ownership

- Sales owns selection, reservation lifecycle, Order linkage, and cancellation release.
- Inventory owns authoritative physical quantity, acquisition cost, availability validation, and completion depletion.
- Finance consumes finalized COGS/profit effects from successful completion.
- Inventory Detail may expose reservation/consumption history for audit, but Inventory Detail is not the operator entry point for Bulk Sales allocation.

### 8. Separation from other transformations

Bulk Sales reservation/finalization is distinct from:

- Bulk → Serialized Card extraction;
- generic Product Split;
- deliberate manual transformation of one Bulk Lot into multiple independently AVAILABLE Bulk Lots.

Those operations may create new Inventory identities because they represent actual Inventory transformations. A Sales reservation does not.

## Invariants

1. `activeReservedQuantity <= physicalQuantity`.
2. `availableToSell = physicalQuantity - activeReservedQuantity`.
3. Reservation creation cannot permanently mutate physical quantity or acquisition cost.
4. Cancellation before completion cannot require Inventory merge-back.
5. Completion is idempotent.
6. Completion cannot consume more quantity than the Order owns through active reservation.
7. Quantity and acquisition-cost conservation must hold after completion.
8. Finalized COGS must correspond to the quantity actually consumed.
9. A reservation cannot be finalized twice.
10. Concurrent Sales operations must not oversell the same Bulk Lot.

## Rationale

This model keeps reversible Sales intent separate from permanent Inventory mutation, prevents unnecessary child Inventory records, eliminates cancellation merge-back complexity, preserves Inventory as the authoritative stock/cost source of truth, and gives Sales a quantity-aware reservation model suitable for concurrent orders.

## Consequences

- The previous pre-reservation Bulk Sale Allocation transformation is superseded.
- Bulk partial-sale UI belongs in Sales.
- Sales requires quantity-aware Inventory reservation.
- Inventory requires atomic completion-time Bulk depletion.
- Order completion must coordinate Sales reservation finalization, Inventory consumption, and Finance effects idempotently.
- Existing implementation of premature `bulk-sale-allocation` must not be treated as the final canonical Sales behavior and should be refactored when Sales integration is implemented.
