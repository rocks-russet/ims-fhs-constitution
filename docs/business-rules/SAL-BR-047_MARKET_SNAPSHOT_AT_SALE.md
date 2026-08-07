# SAL-BR-047 — Market Snapshot at Sale

## Feature Origin

Sales v1 — Market Intelligence extension.

## Rules

1. When the agreed selling price becomes authoritative for an order/item, IMS captures the applicable market-price snapshot when provider data is available.
2. English cards use PriceCharting and Japanese cards use Yuyutei under the active Inventory provider policy.
3. Snapshot stores provider, market/language, marketPriceAtSale, observedAt, inventory/card reference, and Sales Order reference.
4. Current market refresh after the sale does not rewrite this snapshot.
5. A missing market snapshot is reported as unavailable rather than reconstructed from a future price.
6. Sales History retains the transaction-time snapshot.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
