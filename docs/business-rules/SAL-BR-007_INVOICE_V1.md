# SAL-BR-007 — Invoice V1

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery.

## Rules

1. Invoice V1 is generated while the order is WAITING_PAYMENT.
2. Invoice V1 shows buyer name, sales reference/link, complete item list, quantity, item price, subtotal, discount, additional charge, and current grand total.
3. Sales reference may be Auction, Claim Sale, Direct Purchase, Marketplace source, or another approved source; URL is shown when available.
4. Invoice V1 presents only the payment options enabled by the operator for that invoice.
5. Invoice V1 is a payment-selection document and does not itself confirm payment.
6. Generated artifact records invoice ID, version, timestamp, order ID, and template version.

## Invariants

- Historical transaction evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
