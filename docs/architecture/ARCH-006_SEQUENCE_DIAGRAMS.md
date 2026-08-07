# ARCH-006 — Critical Sequence Flows

## Purchase Commit
UI -> Purchase Engine: validate/commit
Purchase Engine -> PostgreSQL: atomic transaction
Purchase Engine -> Numbering Engine: PUR/INV IDs
Purchase Engine -> Event Engine: PurchaseCommitted
Event Engine -> Inventory/Market/Portfolio/Analytics/Audit subscribers
UI returns SUCCESS without waiting for non-critical refresh jobs.

## Sales Completion
UI -> Sales Engine: Complete Order
Sales Engine validates payment/packing/shipment
Sales Engine -> Inventory Engine: finalize SOLD state through approved domain contract
Sales Engine -> Event Engine: OrderCompleted
Profit Engine consumes OrderCompleted
Profit Engine -> Finance Engine: finalized financial event
Finance Engine -> WalletPosting
Portfolio/Analytics refresh asynchronously.

## Withdrawal
User -> Finance Engine: WithdrawalRequest
Approval Engine -> AK final approval
Finance Engine -> WithdrawalCompletion
Finance Engine -> WalletPosting
Audit and History linked by Withdrawal ID.

## Inventory Split
UI -> Inventory Engine: Split
Inventory Engine validates splittable/quantity/cost
PostgreSQL atomic parent-child transformation
Event Engine: InventorySplit
Portfolio/Analytics refresh asynchronously.

## Login
Browser -> Auth: password
Auth -> Risk Evaluation
Low risk -> session
Elevated risk -> TOTP
Auth -> secure server-side session + bootstrap.
