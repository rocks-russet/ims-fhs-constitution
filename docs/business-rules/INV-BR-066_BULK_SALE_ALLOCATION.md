# INV-BR-066 — Bulk Sale Allocation

## Feature Origin

IMS FHS v2 Inventory/Sales workflow decision — partial sale from a Bulk Card Lot must preserve stable Inventory identity, quantity/cost conservation, and auditable parent-child lineage without exposing a manual split workflow to the Sales operator.

## Purpose

Bulk Sale Allocation is an Inventory-domain operation used when Sales needs less than the full remaining quantity of a BULK_CARD_LOT.

The operation isolates the quantity being sold into a derived BULK_CARD_LOT Inventory record before that quantity enters the Sales lifecycle.

## Rules

1. Bulk Sale Allocation applies only to a source Inventory whose authoritative inventory type is `BULK_CARD_LOT`.
2. The requested allocation quantity must be greater than zero and strictly less than the source Bulk Lot's remaining physical-card quantity.
3. If the requested sale quantity equals the source Bulk Lot's entire remaining quantity, IMS uses the source Inventory directly and must not create a redundant allocation child.
4. Bulk Sale Allocation is initiated by the Sales workflow when the operator chooses a partial quantity from a Bulk Lot.
5. The Sales UI may present this as a simple `Sell from Bulk` or equivalent quantity action. The operator is not required to perform a separate generic Split workflow.
6. The authoritative allocation operation is executed by the Inventory domain before the derived quantity is reserved or attached to the Sales transaction.
7. A successful allocation creates exactly one new Inventory record with a new stable `inventoryId`.
8. The created Inventory remains type `BULK_CARD_LOT`; Bulk Sale Allocation must not create `SERIALIZED_CARD` records.
9. The created child quantity equals the requested sale quantity.
10. The source Bulk Lot's remaining quantity is reduced by exactly the allocated quantity.
11. The allocated acquisition cost is derived from the source Bulk Lot's weighted-average remaining cost immediately before allocation.
12. The ordinary allocation cost formula is:
    `allocatedCost = sourceAverageRemainingCost × allocatedQuantity`,
    subject to the system's deterministic currency-rounding policy.
13. Manual cost-basis override is not permitted for ordinary Bulk Sale Allocation.
14. The source Bulk Lot's total remaining cost is reduced by the exact authoritative allocated cost.
15. The child Bulk Lot's total remaining cost equals the authoritative allocated cost.
16. The source Bulk Lot's average remaining cost is re-derived from its post-allocation remaining quantity and remaining cost.
17. Allocation must preserve exact quantity conservation:
    `sourceQtyBefore = sourceQtyAfter + childQty`.
18. Allocation must preserve cost conservation:
    `sourceCostBefore = sourceCostAfter + childCost`,
    subject only to deterministic currency rounding.
19. Bulk Sale Allocation must execute atomically. Failure must leave the source Bulk Lot unchanged and must not leave a partial/orphan child Inventory.
20. The child Inventory records `parentInventoryId` referencing the source Bulk Inventory.
21. The transformation event records the source Inventory, child Inventory, allocated quantity, allocated cost, actor, timestamp, and originating Sales context when available.
22. Parent-child lineage follows INV-BR-020 and is immutable after successful allocation.
23. The child inherits the source Bulk Lot's canonical Bulk Card Product Definition reference.
24. The child inherits the source owner and the applicable immutable ownership/distribution snapshot. Allocation must not silently change economic ownership.
25. The child inherits relevant Bulk instance metadata such as bulk label, grouping metadata, language, holder, storage, and upstream acquisition provenance unless a field is explicitly governed as non-inheritable.
26. The child preserves navigation to the original Purchase Item/acquisition provenance through lineage; allocation must not fabricate a new Purchase.
27. The child is a first-class Inventory record and can be referenced by Sales, Inventory Detail, audit, history, and integrity tooling using its own `inventoryId`.
28. After allocation, the Sales workflow reserves/uses the child Inventory, not an arbitrary quantity slice of the parent Inventory.
29. The parent Inventory must not simultaneously represent the physical quantity assigned to the child.
30. If the associated sale is cancelled before completion, normal Sales cancellation/restoration rules apply to the child Inventory. The child returns to the appropriate available state and remains independent.
31. Cancellation must not automatically merge the child back into the parent Bulk Lot.
32. Any future explicit merge operation requires its own Constitution-approved rule and must preserve full quantity, cost, and lineage history.
33. Bulk Sale Allocation is distinct from generic Product Split and from Bulk → Serialized extraction.
34. Bulk Sale Allocation must be visible in Inventory history/audit as a system-recognizable transformation event even when the Sales UI abstracts the operation from the operator.
35. Concurrency control must prevent two simultaneous allocations from consuming the same source quantity or causing negative quantity/cost.
36. Validation and commit behavior must follow the platform's atomicity, idempotency, interaction-locking, and integrity rules.

## Invariants

- A partial Bulk sale never references an unmaterialized quantity slice as if it were an independent Inventory item.
- Every partial-sale allocation has one stable child `inventoryId`.
- Parent quantity + child quantity conservation is reconstructable.
- Parent cost + child cost conservation is reconstructable.
- Economic ownership is unchanged by allocation.
- Allocation never fabricates serialized card identity.
- Parent and child remain traceable to the original acquisition.
- Cancellation never silently destroys lineage by merging the child back.
- No allocation may create negative quantity, negative remaining cost, duplicate physical quantity, or orphan lineage.
- Sales consumes the allocated child Inventory; Inventory remains authoritative for the transformation.
