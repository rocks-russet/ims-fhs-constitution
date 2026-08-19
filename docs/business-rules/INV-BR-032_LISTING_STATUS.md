# INV-BR-032 — Inventory Listing Status

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery and multi-channel Sales behavior.

## Rules

1. Listing status identifies whether Inventory is offered for sale and on which approved channel references.
2. One Inventory item or eligible quantity may have multiple concurrent listing references, including Sales Sessions and external marketplace/channel listings.
3. Adding Inventory to a Sales Session creates/maintains listing exposure for that session and does not by itself create a reservation.
4. LISTED Inventory remains owned Inventory until reserved/sold.
5. Listing status does not itself create a Claim Cart or Sales Order.
6. Listing and reservation are independent: multiple listings may coexist, but reservation availability is globally enforced across all channels.
7. For serialized Inventory, one active reservation makes the Inventory unavailable for any competing reservation regardless of how many listing references remain open.
8. For quantity-bearing Inventory, each channel may continue offering only quantity that remains within global `availableToSell`.
9. Listing references are retained historically after closure.
10. Listing status must remain consistent with sold/reserved quantity and must never be used to bypass reservation integrity.

## Invariants

- Multiple concurrent listings do not imply multiple sellable copies.
- Listing does not create reservation.
- Global reservation availability governs all channels.
- Historical source/listing records remain reconstructable.
- Derived analytics never silently mutate transaction or Inventory source data.
- Cross-module references use stable IDs.
