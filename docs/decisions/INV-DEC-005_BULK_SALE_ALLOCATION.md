# INV-DEC-005 — Bulk Sales Reservation and Completion Finalization

## Status

ACCEPTED — SUPERSEDES the previous Bulk Sale Allocation decision.

## Context

IMS FHS supports low-value cards as `BULK_CARD_LOT` Inventory with physical quantity and aggregate acquisition cost.

A Sales operator may sell only part of a Bulk Card Lot. Creating a derived Bulk Inventory immediately when Sales merely selects a partial quantity turns reversible Sales intent into a permanent Inventory transformation too early.

Sales selection and reservation are not physical Inventory transformations. Until an Order is completed, the selected quantity can still be released by cancellation or another valid Sales reversal.

## Decision

IMS FHS adopts **Sales-owned Bulk quantity reservation with Inventory-owned completion finalization**.

### 1. Selection happens in Sales

Bulk quantity selection is performed from the Sales workflow, not from Inventory Detail.

The operator selects a `BULK_CARD_LOT` and the quantity required by the Claim Cart / Sales line.

### 2. Reservation does not split Inventory

Before Order completion, selecting or reserving Bulk quantity:

- MUST NOT create a derived Inventory ID solely for the reserved portion;
- MUST NOT permanently reduce source physical quantity;
- MUST NOT permanently reduce source acquisition cost;
- MUST create an auditable Sales/Inventory reservation linked to the source Inventory and Sales context.

Availability is quantity-aware:

`availableToSell = physicalQuantity - activeReservedQuantity`

The system MUST prevent aggregate active reservations from exceeding physical quantity.

### 3. Reservation carries provisional cost information

The reserved Sales quantity may carry a provisional weighted-average acquisition-cost snapshot for operator visibility and pre-completion calculations.

The provisional snapshot is not permanent Inventory depletion and is not realized COGS.

### 4. Checkout transfers reservation atomically

Claim Cart reservation may be transferred into the resulting Order during checkout.

The transfer MUST be atomic and MUST NOT temporarily duplicate reserved quantity.

### 5. Completion is the permanent boundary

When the Order reaches `COMPLETED`, Inventory finalization occurs atomically.

For each reserved Bulk quantity, IMS:

1. validates the active reservation owned by the Order;
2. consumes the finalized quantity from the source `BULK_CARD_LOT`;
3. allocates acquisition cost using the canonical weighted-average remaining-cost rule;
4. reduces source remaining quantity and remaining acquisition cost;
5. records immutable Sales-to-Inventory consumption provenance;
6. closes the corresponding reservation;
7. supplies finalized COGS to Sales/Finance completion processing.

A partial Bulk sale does not require creation of an AVAILABLE derived Bulk Inventory merely to represent the sold portion.

### 6. Cancellation releases reservation

If Sales/Order is cancelled before completion:

- the active reservation is released;
- source physical quantity and acquisition cost remain unchanged;
- no merge-back is required because no premature Inventory split occurred.

### 7. Full remaining quantity follows the same lifecycle

Selecting the full currently available Bulk quantity still creates/owns a Sales reservation first.

Permanent source depletion occurs only at `COMPLETED`.

### 8. Domain ownership

- Sales owns selection, Claim Cart/Order linkage, and reservation lifecycle.
- Inventory owns authoritative physical quantity, cost, availability validation, and completion-time depletion.
- Finance consumes finalized COGS/profit effects after successful completion.
- Inventory Detail may expose reservation and consumption history, but is not the operator entry point for ordinary Bulk Sales selection.

### 9. Separation from Inventory transformations

Bulk Sales reservation/finalization is distinct from:

- Bulk → Serialized Card extraction;
- generic Product Split;
- deliberate manual transformation of one Bulk Lot into independently AVAILABLE Bulk Lots.

Those operations may create new Inventory identities because they represent actual Inventory transformations. A Sales reservation does not.

## Invariants

1. `activeReservedQuantity <= physicalQuantity`.
2. `availableToSell = physicalQuantity - activeReservedQuantity`.
3. Reservation creation cannot permanently mutate physical quantity or acquisition cost.
4. Cancellation before completion cannot require Inventory merge-back.
5. Completion is idempotent.
6. Completion cannot consume more quantity than the Order owns through active reservation.
7. Quantity and acquisition-cost conservation must hold after completion.
8. Finalized COGS must correspond to quantity actually consumed.
9. A reservation cannot be finalized twice.
10. Concurrent Sales operations must not oversell the same Bulk Lot.

## Consequences

- The previous pre-reservation derived-Bulk allocation model is superseded.
- Partial Bulk selection UI belongs in Sales.
- Sales requires quantity-aware Inventory reservations.
- Inventory requires atomic completion-time Bulk depletion.
- Order completion must coordinate reservation finalization, Inventory consumption, and Finance effects idempotently.
- Any legacy `bulk-sale-allocation` implementation that permanently splits Inventory before completion is non-canonical and must be refactored before use by Sales.
