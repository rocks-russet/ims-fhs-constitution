# SAL-BR-036 — Sales SLA and Aging Control

## Purpose

Define measurable response and completion targets for sales-order stages and unresolved sales exceptions.

## Rules

1. SLA measurement must use authoritative server timestamps.
2. SLA targets may be defined for:
   - payment follow-up;
   - packing start;
   - packing completion;
   - shipment handover;
   - tracking-number recording;
   - delivery follow-up;
   - claim acknowledgement;
   - claim resolution;
   - return inspection; and
   - dispute evidence submission.
3. SLA targets must be versioned and have effective dates.
4. Aging begins from the event that activates the obligation and pauses only under explicitly defined waiting states.
5. Orders or cases approaching breach must be surfaced to the responsible operator.
6. Breached items must record the elapsed time, responsible owner, reason, and corrective action.
7. SLA breach does not automatically alter order, shipment, payment, or financial status.
8. External delays such as courier or marketplace review must remain distinguishable from internal delays.
9. Repeated breaches must trigger process review.
10. SLA reporting must exclude cancelled or invalid obligations only when the exclusion reason is documented.

## Invariants

- Device-local time cannot determine SLA compliance.
- SLA status is derived from immutable event timestamps.
- An SLA breach cannot be cleared by rewriting historical timestamps.

## Related

- SAL-BR-005
- SAL-BR-009
- SAL-BR-010
- SAL-BR-021
- SAL-BR-035
