# PUR-BR-045 --- Market Snapshot at Purchase

## Feature Origin

Purchase v1 --- Market Intelligence extension; expanded for CARD and
PRODUCT acquisition analysis.

## Rules

1.  When a CARD or PRODUCT is added/validated in the Purchase Cart, IMS
    captures the applicable transaction-time market snapshot when
    market-reference data is available.
2.  CARD market snapshots follow the active Inventory market-provider
    policy: English cards use PriceCharting and Japanese cards use
    Yuyutei; approved fallback behavior remains governed by the
    market-provider policy.
3.  PRODUCT items may use a manually entered transaction-time market
    reference when no governed automatic provider exists.
4.  A manual PRODUCT market snapshot must be explicitly identified as
    manual and must preserve the entered market value, currency,
    observation/effective date, optional Reference URL, optional note,
    actor, and capture timestamp.
5.  Manual PRODUCT market data must never be represented as
    provider-fetched data.
6.  Snapshot stores stable snapshot identity, item reference,
    market/language where applicable, market value, currency,
    observed/effective time, capture time, source type, provider where
    applicable, retrieval status, and provenance needed to reconstruct
    the observation.
7.  Operator Unit Buy Price remains independently editable from market
    reference value.
8.  A failed or unavailable automatic market lookup does not block
    Purchase unless a later-approved policy explicitly requires it;
    failure/unavailability must remain visible.
9.  Absence of a PRODUCT market reference does not block Purchase unless
    a later-approved policy explicitly requires it.
10. Committed Purchase History preserves the exact snapshot used at
    acquisition.
11. Purchase Item and Purchase-level Market Quality analytics may
    consume CARD provider snapshots and valid PRODUCT manual snapshots
    under the same transaction-time analytical model.
12. Current market observations must never silently replace a missing or
    historical transaction-time Purchase snapshot.

## Invariants

-   Transaction-time market snapshots are immutable historical
    analytical evidence.
-   Manual PRODUCT observations have explicit provenance.
-   Historical source records remain reconstructable.
-   Derived analytics never silently mutate transaction or inventory
    source data.
-   Cross-module references use stable IDs.
