# INV-BR-038 — Market Price Observation

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. A market observation stores provider, market/language, card/product reference, observed price, observedAt, retrieval status, and source reference where available.
2. Observed price is separate from buy price, Final Cost, listing price, and sold price.
3. Failed refresh does not erase the last valid observation.
4. Observation history is append-only.
5. Current UI always displays provider and observation time alongside market value.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
