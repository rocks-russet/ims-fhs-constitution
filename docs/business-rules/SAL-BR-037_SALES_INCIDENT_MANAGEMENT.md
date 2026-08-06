# SAL-BR-037 — Sales Incident Management

## Purpose

Govern operational incidents that materially threaten sales integrity, fulfillment continuity, buyer obligations, or data correctness.

## Rules

1. A sales incident must be created for systemic or high-impact conditions such as:
   - duplicate order creation;
   - widespread reservation conflict;
   - incorrect mass invoice generation;
   - payment-confirmation failure;
   - fulfillment-state corruption;
   - repeated duplicate shipment;
   - missing sales history;
   - unauthorized order mutation; or
   - broad marketplace synchronization failure.
2. Each incident must record severity, detection source, affected scope, start time, owner, containment action, evidence, and current status.
3. Valid statuses are `OPEN`, `CONTAINED`, `INVESTIGATING`, `RECOVERING`, `MONITORING`, `RESOLVED`, and `CLOSED`.
4. Severity must consider buyer impact, number of affected orders, inventory exposure, financial exposure, and data-integrity risk.
5. Containment may temporarily suspend checkout, payment confirmation, packing, shipment, completion, or affected integrations.
6. Incident handling must not use direct data deletion or unlogged balance edits.
7. Every correction must use the applicable governed workflow.
8. Resolution requires:
   - identified root cause;
   - affected-record inventory;
   - completed corrections;
   - reconciliation;
   - preventive action; and
   - authorized closure.
9. Financially material incidents must also follow FIN incident and exception controls.
10. Post-incident review is mandatory for high-severity incidents.

## Invariants

- Incident status does not replace order-level status.
- Containment and recovery actions are append-only and attributable.
- Closure requires evidence that affected sales records are internally consistent.

## Related

- SAL-BR-032
- SAL-BR-033
- FIN-BR-036
- FIN-BR-052
- FIN-BR-071
