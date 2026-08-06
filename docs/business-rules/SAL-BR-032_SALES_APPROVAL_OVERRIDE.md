# SAL-BR-032 — Sales Approval Override

## Purpose

Define the narrow conditions under which an authorized actor may override a sales control without bypassing auditability or financial safeguards.

## Rules

1. Override is permitted only for a specifically identified control that supports an override path.
2. The request must record Order ID, blocked action, control being overridden, business justification, risk, requester, approver, and expiry where applicable.
3. The requester must not approve their own override where segregation of duties is required.
4. Override authority must follow role and threshold policy.
5. An override must not:
   - create inventory that does not exist;
   - reuse payment evidence;
   - bypass mandatory financial posting;
   - delete historical records;
   - force completion with unresolved material imbalance; or
   - bypass authentication requirements.
6. Temporary overrides must expire automatically after the approved action or time window.
7. Every action executed under override must carry the Override ID.
8. Failed or unused overrides remain retained and must not silently become active later.
9. High-risk overrides require post-event review.
10. Repeated overrides for the same control must trigger control redesign review.

## Invariants

- An override grants only the minimum approved exception.
- Override usage is fully attributable.
- Expired, revoked, or consumed overrides cannot be reused.

## Related

- SAL-BR-020
- SAL-BR-022
- FIN-BR-043
- FIN-BR-058
