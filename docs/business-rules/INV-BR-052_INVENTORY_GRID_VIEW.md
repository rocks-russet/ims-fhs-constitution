# INV-BR-052 — Inventory Grid View

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Grid View presents a visual inventory experience optimized for images and rapid browsing.
2. Card/Product image, primary name/number, owner, status, market/cost summary, and other compact fields may be displayed.
3. Grid cards adapt to inventory type instead of showing irrelevant fields.
4. Clicking a grid item opens Inventory Detail.
5. Switching view mode preserves active search/filter state.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
