# ARCH-003 — Entity Relationship Blueprint

## Key Relationships
- Contact 1..N Purchase (as Seller)
- Contact 1..N SalesOrder (as Buyer)
- Purchase 1..N PurchaseItem
- PurchaseItem 1..N Inventory
- Inventory N..1 ProductDefinition/CardDefinition
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
