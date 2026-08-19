# SAL-DEC-001 Sales Session

Decision:

Sales Session is optional and is used for coordinated selling events such as Facebook claim sales, auctions, live selling, or similar multi-buyer activity.

Standalone Sales, including marketplace/Tokopedia, offline, or ordinary direct Sales, do not require a Sales Session.

An OPEN Sales Session may contain an Inventory Pool before any Buyer is known. Inventory may be added/removed individually or in bulk. Inventory in the pool is LISTED for the session but is not RESERVED merely because it belongs to the pool.

Inventory may be listed in multiple Sales channels simultaneously.

When an item or eligible quantity is claimed/won/assigned to a Buyer, IMS creates or reuses the Buyer's appropriate active Claim Cart within that Sales Session and creates the reservation atomically.

Serialized Inventory may have only one active reservation globally across all channels. Quantity-bearing Inventory may have multiple reservations only up to global available-to-sell quantity.

A buyer may participate in multiple Sales Sessions.
