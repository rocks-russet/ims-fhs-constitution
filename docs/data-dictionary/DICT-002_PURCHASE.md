# DICT-002 --- Purchase Data Dictionary

## Purchase

  Field             Type                 Required Meaning
  ----------------- --------------- ------------- -----------------------------------
  purchaseId        string                    yes Stable `PUR-...` identifier
  sellerContactId   string                    yes Canonical Seller Contact
  platformId        string/null                no Acquisition platform
  purchaseDate      date                      yes Real-world economic date
  currency          string                    yes IDR baseline
  shippingCost      decimal                   yes Transaction shipping
  discountAmount    decimal                   yes Transaction discount
  taxAmount         decimal                   yes Reserved, default 0 unless active
  notes             text/null                  no Operational notes
  actorUserId       string                    yes User committing transaction
  status            enum                      yes Purchase lifecycle state
  committedAt       datetime/null     conditional Commit time

## Purchase Item

  -------------------------------------------------------------------------------
  Field                   Type                          Required Meaning
  ----------------------- ---------------- --------------------- ----------------
  purchaseItemId          string                             yes Stable line
                                                                 identity

  purchaseId              string                             yes Parent Purchase

  itemType                enum                               yes `CARD` or
                                                                 `PRODUCT`

  cardDefinitionId        string/null                conditional Card master

  productDefinitionId     string/null                conditional Product master

  quantity                integer                            yes Acquisition Base
                                                                 Qty; immutable
                                                                 after commit

  unitBuyPrice            decimal                            yes Individual buy
                                                                 price

  itemSubtotal            decimal                            yes unit price ×
                                                                 Base Qty

  ownerCode               string                             yes Economic owner
                                                                 per item

  allocatedShipping       decimal                            yes Shipping
                                                                 allocation

  allocatedDiscount       decimal                            yes Discount
                                                                 weighted by
                                                                 gross value

  allocatedTax            decimal                            yes Tax allocation

  finalCost               decimal                            yes Authoritative
                                                                 acquisition cost

  ownershipSnapshot       object                             yes Capital/profit
                                                                 rule snapshot

  generatedInventoryIds   array                     after commit Inventory IDs
                                                                 created from
                                                                 Base Qty
  -------------------------------------------------------------------------------

`quantity` is the canonical Purchase Item Base Qty. Later Inventory
splits/transformation quantities are separate Inventory-domain facts and
never rewrite this field.

## Market Snapshot at Purchase

  -----------------------------------------------------------------------
  Field                   Type                    Meaning
  ----------------------- ----------------------- -----------------------
  marketSnapshotId        string                  Stable snapshot ID

  sourceType              enum                    `PROVIDER` / `MANUAL`

  provider                string/null             Provider when
                                                  provider-fetched; null
                                                  for manual Product
                                                  snapshot unless
                                                  separately identified

  marketLanguage          string/null             EN / JP where
                                                  applicable

  marketPriceAtPurchase   decimal/null            Transaction-time market
                                                  reference value

  currency                string                  Currency of the market
                                                  reference

  observedAt              datetime/null           Provider observation
                                                  time or
                                                  operator-declared
                                                  effective observation
                                                  time

  capturedAt              datetime                IMS capture timestamp

  retrievalStatus         enum                    success / unavailable /
                                                  failed / manual

  referenceUrl            string/null             Optional evidence URL,
                                                  especially for manual
                                                  Product reference

  note                    text/null               Optional
                                                  provenance/context note

  capturedByUserId        string/null             Actor for manual
                                                  capture where
                                                  applicable

  varianceAmount          decimal/null            Unit Buy Price − Market
                                                  reference

  variancePercent         decimal/null            Transaction-time market
                                                  variance
  -----------------------------------------------------------------------

CARD snapshots use governed market-provider policy. PRODUCT may use an
explicitly manual transaction-time market reference when no governed
automatic provider exists. Manual data must remain distinguishable from
provider data.

Seller behaviour and Purchase Market Quality analytics use the preserved
transaction-time snapshot, not current market price.

## Navigation

Purchase Detail must expose: - Seller Contact link - every Purchase
Item - Base Qty - every generated Inventory ID as a clickable Inventory
Detail link - allocation breakdown - ownership snapshot -
transaction-time market snapshot and provenance
