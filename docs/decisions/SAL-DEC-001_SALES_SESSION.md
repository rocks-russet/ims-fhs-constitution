# SAL-DEC-001 Sales Session

Decision:

Sales Session is optional and is used for coordinated selling events such as Facebook claim sales, auctions, live selling, or similar multi-buyer activity.

Standalone Sales, including marketplace/Tokopedia, offline, or ordinary direct Sales, do not require a Sales Session.

An OPEN Sales Session may contain an Inventory Pool before any Buyer is known. Inventory may be added/removed individually or in bulk. Inventory in the pool is LISTED for the session but is not RESERVED merely because it belongs to the pool.

Inventory may be listed in multiple Sales channels simultaneously.

`SERIALIZED_CARD` and `PRODUCT` Inventory are listed, assigned, and reserved as whole Inventory IDs with Sales quantity exactly `1`.

A normal Product's physical contents or pack size do not permit partial Product sale in Sales. Smaller Product commercial units must first be produced through canonical Inventory Split/Transformation and receive their own Inventory IDs.

`BULK_CARD_LOT` is the only normal Sales inventory type that permits explicit partial quantity listing, claim/winner assignment, and reservation from one source Inventory ID.

When an Inventory item or eligible Bulk quantity is claimed/won/assigned to a Buyer, IMS creates or reuses the Buyer's appropriate active Claim Cart within that Sales Session and creates the reservation atomically.

Serialized Card and Product Inventory may have only one active reservation globally across all channels. Bulk Card may have multiple quantity reservations only up to global available-to-sell quantity.

Sales Session deletion is a soft-delete/void operation, not a destructive historical delete.

Delete Sales Session is blocked once the Session has Claim Cart, reservation, or Order lineage that must remain attached to the Session.

Session deletion never releases an active reservation.

For an eligible Session without dependent transactional lineage, deletion deactivates that Session's remaining Inventory Pool listings and recalculates Inventory availability from remaining global listing and reservation state.

A buyer may participate in multiple Sales Sessions.
