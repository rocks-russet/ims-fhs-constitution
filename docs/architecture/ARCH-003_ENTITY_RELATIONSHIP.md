# ARCH-003 — Entity Relationship Blueprint

## Key Relationships
- Contact 1..N Purchase (as Seller)
- Contact 1..N SalesOrder (as Buyer)
- Purchase 1..N PurchaseItem
- PurchaseItem 1..N Inventory
- CardDefinition 1..N CardPrinting/ProductDefinition
- Inventory N..1 ProductDefinition/CardPrinting
- Inventory 1..N InventoryHistory
- Inventory 0..N InventoryTransformationLink
- SalesOrder N..M Inventory through OrderItem
- SalesOrder 1..N InvoiceVersion
- SalesOrder 1..N Payment
- SalesOrder 1..N Shipment
- SalesOrder 0..N PackingSupplyConsumption
- SalesOrder 0..1 finalized ProfitSnapshot
- FinancialEvent 1..N WalletPosting
- Withdrawal/Capital/Transfer/Reimbursement 1..N FinancialEvent
- User 1..N AuditRecord
- User 0..N TrustedDevice
- OwnerScope 1..N PortfolioPosition (derived/read model)

## Referential Rule
Stable IDs remain immutable. Historical transaction snapshots survive changes to mutable master data.


## Revision Note — 2026-08-10 11:54:25 WIB
Card catalog identity now explicitly models one base CardDefinition with one or more collectible CardPrinting/ProductDefinition records. Inventory references the collectible printing, not Card Number alone.
