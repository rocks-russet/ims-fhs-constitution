# INV-BR-015 — Bulk Card Extraction

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. An operator may extract one or more individual cards from a Bulk Card Lot when market, meta, grading, sales, collection, or operational value justifies serialized tracking.
2. Extraction records parent bulk inventoryId, pre-extraction quantity and cost, extracted quantity, created child inventoryId(s), cost allocation method, allocated child cost(s), operator, timestamp, and justification.
3. Parent bulk quantity decreases by the exact extracted physical-card quantity.
4. Each extracted physical card becomes one SERIALIZED_CARD Inventory record with its own Inventory ID, including when multiple copies of the same canonical card are extracted in one operation.
5. Default extracted cost uses the weighted-average remaining cost per card of the parent Bulk Lot immediately before extraction.
6. The operator may use an explicit manual extracted-cost override when justified by known acquisition economics or another auditable operational reason.
7. A manual override reallocates existing Bulk acquisition cost; it never creates or destroys cost and never substitutes current market value for acquisition cost.
8. When several cards are extracted in one operation, any manual override must record the cost allocated to each created serialized Inventory.
9. Parent remaining cost after extraction equals pre-extraction parent remaining cost minus the total cost allocated to all extracted children.
10. Parent remaining cost plus all extracted child costs must equal the pre-extraction parent cost after deterministic currency rounding.
11. Extraction preserves lineage from the created Serialized Card to the source Bulk Lot and, where available, to the source Purchase/Acquisition.
12. Bulk extraction is not a reversible merge-back mechanism. A serialized child is not automatically returned to or collapsed into its former Bulk Lot.

## Invariants

- Extracted quantity cannot exceed the parent Bulk remaining quantity.
- Allocated extracted cost cannot exceed the parent Bulk remaining cost.
- Parent remaining quantity and remaining cost can never become negative.
- Total acquisition cost is strictly conserved across the extraction transaction.
- One extracted physical card maps to one stable Serialized Inventory ID.
- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
