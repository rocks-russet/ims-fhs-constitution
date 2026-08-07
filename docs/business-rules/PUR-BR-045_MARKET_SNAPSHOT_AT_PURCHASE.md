# PUR-BR-045 — Market Snapshot at Purchase

## Feature Origin

Purchase v1 — Market Intelligence extension.

## Rules

1. When a card is added/validated in the Purchase Cart, IMS captures the applicable market price snapshot when provider data is available.
2. English cards use PriceCharting and Japanese cards use Yuyutei under the active Inventory market-provider policy.
3. Snapshot stores provider, market/language, marketPriceAtPurchase, observedAt, card/product reference, and retrieval status.
4. Operator Buy Price remains independently editable.
5. A failed market lookup does not block Purchase unless a later-approved policy explicitly requires it; failure must remain visible.
6. Committed Purchase History preserves the snapshot used at acquisition.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
