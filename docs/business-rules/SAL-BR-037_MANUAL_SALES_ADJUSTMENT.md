# SAL-BR-037 — Manual Sales Adjustment

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. Manual adjustment is exceptional and is used only when normal amendment/refund/cancellation workflows cannot represent a legitimate correction.
2. Adjustment records Order ID, field/component, previous value, new value, reason, actor, evidence, and financial impact.
3. Historical values are not silently overwritten.
4. Adjustment affecting invoice totals requires invoice revision.
5. Adjustment affecting completed financials requires governed Finance adjustment/reversal.
6. Inventory identity or quantity changes must use the appropriate inventory/order workflow rather than a numeric shortcut.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
