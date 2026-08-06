# SAL-BR-026 — Replacement Fulfillment

## Purpose

Govern replacement of missing, damaged, incorrect, or otherwise eligible items without creating an untracked second sale.

## Rules

1. A replacement must reference the original Order ID, affected item, reason, approval, and related return or shipment exception when applicable.
2. Replacement eligibility must be confirmed before new inventory is reserved.
3. Replacement inventory must pass normal availability, identity, ownership, and reservation checks.
4. A replacement creates a distinct fulfillment record linked to the original sales order.
5. A replacement shipment must have its own packing, shipment, courier, tracking, and cost records.
6. The original sold item remains historically linked to the original order and is not silently substituted.
7. Price differences, additional shipping costs, compensation, or owner impact must be recorded explicitly.
8. Where the original item is expected back, the replacement workflow must reference an approved return authorization.
9. Replacement completion must not trigger duplicate sales revenue or duplicate profit recognition.
10. Unavailable equivalent inventory requires an explicit alternate resolution such as refund, credit, substitute approval, or cancellation of the replacement.

## Invariants

- Replacement does not create a second independent sale unless a new commercial order is intentionally created.
- Replacement inventory cannot be reserved twice.
- Financial and inventory effects remain traceable to the original incident and order.

## Related

- SAL-BR-009
- SAL-BR-010
- SAL-BR-021
- SAL-BR-025
