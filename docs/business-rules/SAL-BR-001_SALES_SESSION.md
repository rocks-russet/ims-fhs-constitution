# SAL-BR-001 — Sales Session

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery and IMS FHS v2 coordinated selling workflow.

## Rules

1. Sales Session is an optional container for coordinated selling activity such as Facebook claim sales, auctions, live selling, or similar multi-buyer selling events.
2. A standalone sale, including marketplace/Tokopedia, offline, or ordinary direct sale, does not require a Sales Session.
3. An OPEN Sales Session may contain an Inventory Pool of serialized or quantity-bearing Inventory selected for offering during that selling event.
4. Inventory may be added to or removed from an OPEN Sales Session individually or in bulk.
5. Adding Inventory to a Sales Session is a listing action only. It does not identify a Buyer, create a Claim Cart, or create an Inventory reservation.
6. Inventory listed in a Sales Session may remain listed in other sales channels at the same time, subject to global reservation availability.
7. When an Inventory item or eligible quantity is claimed/won/assigned to a Buyer, IMS creates or reuses an appropriate active Claim Cart for that Buyer within the Sales Session and creates the corresponding reservation atomically.
8. A Sales Session may contain multiple Claim Carts for different buyers.
9. One Buyer may receive multiple claimed/won items within the same Sales Session without requiring a new Claim Cart for every item.
10. Unclaimed Inventory may remain in the Sales Session or be removed without creating a Claim Cart or reservation.
11. The authenticated user is the actor; Buyer identity is selected independently when claim/winner assignment occurs.
12. Session state, Inventory Pool membership, claim/winner assignment, and Claim Cart state must survive normal UI refresh through persistence.
13. Closing a Sales Session must not delete already-created Claim Carts, Orders, reservations, or historical listing evidence.
14. Session actions are auditable.

## Invariants

- Sales Session is not mandatory for standalone Sales.
- Listing in a Sales Session is not equivalent to reservation.
- Multi-channel listing is allowed; reservation availability is global across channels.
- Historical transaction and listing evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
