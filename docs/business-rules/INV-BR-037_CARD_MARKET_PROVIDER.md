# INV-BR-037 — Card Market Provider Mapping

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. English card market values use PriceCharting as the baseline provider.
2. Japanese card market values use Yuyutei as the baseline provider.
3. Provider selection is driven by card language/market classification.
4. Lookup/scraping implementation may reproduce proven IMS FHS v1 GAS behaviour without embedding scraper selectors into Business Rules.
5. Changing a provider requires versioned configuration and must not rewrite historical observations.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
