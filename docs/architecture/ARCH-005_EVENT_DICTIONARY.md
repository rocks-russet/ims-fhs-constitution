# ARCH-005 — Domain Event Dictionary

## Purchase
- PurchaseDraftSaved
- PurchaseCommitted
- PurchaseCommitFailed
- PurchaseCancelled
- PurchaseMarketSnapshotCaptured

## Inventory
- InventoryCreated
- InventoryUpdated
- InventoryOwnerConverted
- InventoryHolderChanged
- InventoryStorageChanged
- InventoryReserved
- InventoryReleased
- InventorySold
- InventorySplit
- InventoryBulkExtracted
- InventoryTransformed
- InventoryMarketLinked

## Sales
- OrderCreated
- OrderMerged
- OrderSplit
- OrderCancelled
- InvoiceGenerated
- InvoiceSuperseded
- PaymentConfirmed
- PaymentMethodChanged
- PackingStarted
- PackingCompleted
- ShipmentCreated
- ShipmentShipped
- DeliveryConfirmed
- OrderCompleted
- ReturnCreated
- ReplacementCreated
- SaleMarketSnapshotCaptured

## Finance
- FinancialEventCreated
- ProfitCalculated
- ProfitFinalized
- WalletPosted
- WalletPostingReversed
- WithdrawalRequested
- WithdrawalApproved
- WithdrawalCompleted
- ReimbursementCompleted
- CapitalContributionCompleted
- InternalTransferCompleted

## Contact
- ContactCreated
- ContactUpdated
- ContactMerged
- ContactRoleChanged

## Market
- MarketObservationCaptured
- MarketRefreshFailed
- CardDatabaseUpdated

## Portfolio / Analytics
- PortfolioRefreshRequested
- PortfolioUpdated
- AnalyticsRefreshRequested
- AnalyticsUpdated

## Auth / System
- UserLoggedIn
- LoginFailed
- SessionRevoked
- PasswordReset
- MFAChallenged
- PermissionChanged
- ApprovalRequested
- ApprovalDecided
- BackgroundJobFailed

## Envelope
Every event carries eventId, eventType, aggregate/source ID, occurredAt, schemaVersion, correlationId, causationId where applicable, and payload.
