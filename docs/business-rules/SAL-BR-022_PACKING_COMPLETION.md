# SAL-BR-022 — Packing Completion

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery and IMS FHS v2 Packing workflow decisions.

## Rules

1. Packing completes only when all Order items are accounted for.
2. Actual Supply Usage must be confirmed when tracked Packing Supplies are used.
3. Operator may finalize Packing even when no Supply Template matched, provided manual Actual Supply Usage is valid.
4. Packing Completion records operator and timestamp.
5. Packing Completion atomically:
   - freezes the finalized Actual Supply Usage snapshot;
   - applies tracked Packing Supply consumption;
   - records Inventory/Sales audit lineage;
   - marks the Packing Job completed;
   - permits transition toward SHIPPED.
6. Unresolved item discrepancies or invalid negative supply consumption block completion.
7. A mismatch between suggestion and actual usage does not by itself block completion.
8. Completed Packing is immutable except through governed correction/reversal behavior.
9. Packing Completion is idempotent and must not decrement the same supplies more than once.
10. Order moves from PACKING toward shipment only once.

## Invariants

- Suggested Supply output remains preserved as evidence even when Actual Supply Usage differs.
- Final Actual Supply Usage remains reconstructable.
- Inventory and Sales consumption records must reconcile.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
