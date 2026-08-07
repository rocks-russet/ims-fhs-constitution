# ARCH-002 — Domain Model

## Core Domains
### Purchase
Acquisition transaction, Purchase Cart, Seller, per-item owner, cost allocation, commit.

### Inventory
Physical/logical assets, serialized cards, bulk lots, quantity products, ownership, storage, transformation, market linkage.

### Sales
Claim Cart, Order, Invoice, Payment, Packing, Shipment, Completion, Return/Replacement.

### Finance
Wallet, Financial Event, Profit, Capital, Withdrawal, Reimbursement, Transfer, financial history.

### Contact
Canonical Buyer/Seller identity and contact analytics.

### Portfolio
Owner-scoped positions, average cost, market value, unrealized gain/loss.

### Market
Price observations, provider mapping, transaction snapshots, refresh jobs.

### Authentication
User identity, session, permissions, MFA, trusted device, security audit.

## Principle
Business ownership, authenticated actor, Contact identity, holder, and wallet identity are separate concepts and must never be conflated.
