# SAL-BR-001 — Sales Session

## Feature Origin

Sales Manager v1 Feature Map — reviewed against IMS FHS v1 discovery and IMS FHS v2 coordinated selling workflow.

## Rules

1. Sales Session is an optional container for coordinated selling activity such as Facebook claim sales, auctions, live selling, or similar multi-buyer selling events.
2. A standalone sale, including marketplace/Tokopedia, offline, or ordinary direct sale, does not require a Sales Session.
3. An OPEN Sales Session may contain an Inventory Pool of serialized Inventory, Product Inventory, and eligible `BULK_CARD_LOT` Inventory selected for offering during that selling event.
4. Inventory may be added to or removed from an OPEN Sales Session individually or in bulk.
5. Adding Inventory to a Sales Session is a listing action only. It does not identify a Buyer, create a Claim Cart, or create an Inventory reservation.
6. Inventory listed in a Sales Session may remain listed in other sales channels at the same time, subject to global reservation availability.
7. When an Inventory item or eligible Bulk quantity is claimed/won/assigned to a Buyer, IMS creates or reuses an appropriate active Claim Cart for that Buyer within the Sales Session and creates the corresponding reservation atomically.
8. A Sales Session may contain multiple Claim Carts for different buyers.
9. One Buyer may receive multiple claimed/won items within the same Sales Session without requiring a new Claim Cart for every item.
10. Unclaimed Inventory may remain in the Sales Session or be removed without creating a Claim Cart or reservation.
11. The authenticated user is the actor; Buyer identity is selected independently when claim/winner assignment occurs.
12. Session state, Inventory Pool membership, claim/winner assignment, and Claim Cart state must survive normal UI refresh through persistence.
13. Closing a Sales Session must not delete already-created Claim Carts, Orders, reservations, or historical listing evidence.
14. Sales Session deletion is implemented as a soft-delete/void operation. Historical Session and listing evidence must remain reconstructable.
15. Delete Sales Session is allowed only when the Session has no active or historical Claim Cart, active reservation, or Order lineage that depends on the Session. If any such transactional lineage exists, deletion MUST be blocked and the user must resolve/cancel the dependent Sales activity first.
16. Deleting an eligible Sales Session MUST NOT release any Inventory reservation. Reservation lifecycle is controlled only by the owning Claim Cart/Order cancellation or completion flow.
17. Deleting an eligible Sales Session deactivates all remaining unassigned Inventory Pool listings belonging to that Session.
18. After deletion, Inventory availability is recalculated from remaining global listing and reservation state:
    - no remaining listing and no active reservation -> `AVAILABLE`;
    - one or more remaining active listings and no active reservation -> `LISTED`;
    - active reservation -> reservation state remains authoritative and MUST NOT be cleared by Session deletion.
19. Multi-channel listing references outside the deleted Session are unaffected.
20. Session actions, deletion attempts, deletion blocks, and successful deletion are auditable.

## Invariants

- Sales Session is not mandatory for standalone Sales.
- Listing in a Sales Session is not equivalent to reservation.
- Multi-channel listing is allowed; reservation availability is global across channels.
- Session deletion never releases an active reservation.
- Session deletion cannot orphan Claim Cart, reservation, Order, or historical transaction lineage.
- Deleting one Session never removes listing evidence belonging to another Session/channel.
- Historical transaction and listing evidence must remain reconstructable.
- Cross-domain Inventory, Contact, Finance, and Sales references must remain consistent.
