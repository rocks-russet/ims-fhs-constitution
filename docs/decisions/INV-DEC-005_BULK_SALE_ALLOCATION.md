# INV-DEC-005 — Bulk Sale Allocation

## Status

ACCEPTED

## Context

IMS FHS supports low-value cards as `BULK_CARD_LOT` Inventory with physical quantity and aggregate acquisition cost.

A partial sale from Bulk creates a modeling problem if Sales simply consumes a quantity number from the source Inventory: the sold portion has no independent stable Inventory identity, parent-child provenance becomes weaker, and later cancellation/audit/history behavior becomes harder to reconstruct.

A generic manual Product Split is also not appropriate as the normal Sales UX because selling part of a Bulk Card Lot should remain a simple operator action.

## Decision

IMS FHS adopts **Bulk Sale Allocation** as a dedicated backend Inventory transformation for partial Bulk sales.

When Sales requests less than the entire remaining quantity of a `BULK_CARD_LOT`:

1. Inventory creates one derived `BULK_CARD_LOT` with a new `inventoryId`.
2. The derived Inventory receives the requested quantity and weighted-average allocated acquisition cost.
3. The source Bulk Lot is reduced by the same quantity and cost.
4. Parent-child lineage is recorded permanently.
5. Sales reserves and sells the derived Inventory.
6. The operator does not need to execute a separate manual Split workflow.

When Sales requests the entire remaining quantity, the source Bulk Inventory is used directly and no redundant child is created.

If the sale is cancelled, the allocated child remains an independent Inventory record and returns through normal Sales cancellation/restoration behavior. It is not automatically merged back into the parent.

Bulk Sale Allocation is not Bulk → Serialized extraction and is not generic Product Split.

## Rationale

This model:

- preserves stable Inventory identity for the exact quantity entering Sales;
- keeps Inventory as the authoritative physical/cost source of truth;
- provides explicit and immutable lineage;
- conserves quantity and acquisition cost;
- supports clean Sales cancellation behavior;
- avoids fabricating individual card identities;
- keeps the Sales operator workflow simple;
- allows future audit, analytics, and reconciliation to reconstruct the transaction precisely.

## Consequences

- Inventory requires an atomic Bulk Sale Allocation service/operation.
- Sales partial-Bulk selection depends on that Inventory operation before reservation.
- Inventory Detail and history must expose parent/child allocation lineage.
- Data model/API implementation must support transformation event identity and `parentInventoryId`/child lineage.
- Integrity checks must validate quantity conservation, cost conservation, and orphan/cyclic lineage.
- No automatic merge-back is performed after Sales cancellation.
