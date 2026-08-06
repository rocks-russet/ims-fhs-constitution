# SAL-BR-035 — Customer Claim Routing

## Purpose

Classify and route buyer claims to the correct sales workflow without duplicating refund, return, shipment-exception, replacement, or marketplace-dispute logic.

## Rules

1. Every buyer claim must reference the relevant Order ID and, where applicable, the affected item, shipment, invoice, or payment.
2. Claim intake must record:
   - claim type;
   - description;
   - supporting evidence;
   - received timestamp;
   - source channel;
   - responsible operator; and
   - current status.
3. Supported claim types include:
   - wrong item;
   - missing item;
   - damaged item;
   - delivery failure;
   - payment issue;
   - invoice issue;
   - marketplace dispute;
   - return request;
   - replacement request; and
   - other documented sales issue.
4. A claim must be routed to the governing workflow:
   - shipment exceptions under SAL-BR-021;
   - returns under SAL-BR-025;
   - replacements under SAL-BR-026;
   - marketplace disputes under SAL-BR-027;
   - payment issues under SAL-BR-018 through SAL-BR-020; or
   - invoice issues under SAL-BR-023.
5. Claim routing must not itself create financial, inventory, refund, or replacement effects.
6. Duplicate claims for the same issue must be linked rather than independently resolved.
7. Claim status must be one of `OPEN`, `TRIAGED`, `ROUTED`, `AWAITING_BUYER`, `AWAITING_INTERNAL_ACTION`, `RESOLVED`, `REJECTED`, or `CLOSED`.
8. Claim closure requires a recorded outcome and reference to the resolving workflow.
9. Material claims must preserve buyer communication and evidence.
10. Claims involving suspected fraud or systemic failure must be escalated under the applicable incident rules.

## Invariants

- Claim intake never bypasses the governing sales workflow.
- One claim may reference multiple related resolution records, but every resolution remains traceable.
- Closing a claim does not erase the original complaint or evidence.

## Related

- SAL-BR-021
- SAL-BR-025
- SAL-BR-026
- SAL-BR-027
