# DICT-008 — Market Data Dictionary

## Market Provider
Baseline card mapping:
- English → PriceCharting
- Japanese → Yuyutei

## Market Observation
- marketObservationId
- provider
- market/language
- cardDefinitionId/productDefinitionId
- observedPrice
- currency
- observedAt
- retrievedAt
- retrievalStatus
- sourceReference
- validity/outlier flag

## Market Snapshot
Transaction snapshot is separate from current observation.

Purchase:
- marketPriceAtPurchase
- provider
- observedAt

Sale:
- marketPriceAtSale
- provider
- observedAt

## Card Database Sync
- source
- external card identity
- fetchedAt
- sourceVersion where available
- validationStatus
- publishedVersion

OPTCG/Card DB scheduled refresh must stage/validate before publishing authoritative changes.

## Integrity
Failure to refresh current market data does not erase the previous valid observation.
