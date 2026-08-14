# DICT-001 --- Inventory Data Dictionary

## Purpose

Define authoritative Inventory data concepts shared by Inventory,
Purchase, Sales, Finance, Portfolio, and Market.

## Core Inventory

  ------------------------------------------------------------------------------------------
  Field                 Type                  Required          Mutable Meaning
  --------------------- ------------- ---------------- ---------------- --------------------
  inventoryId           string                     yes               no Stable `INV-...`
                                                                        identifier

  inventoryType         enum                       yes       controlled `SERIALIZED_CARD`,
                                                                        `BULK_CARD_LOT`,
                                                                        `PRODUCT`,
                                                                        `PACKING_SUPPLY`

  productDefinitionId   string/null        conditional       controlled Product master
                                                                        reference

  cardDefinitionId      string/null        conditional       controlled Card DB reference

  ownerCode             string                     yes          yes via Economic owner
                                                             conversion 

  holderCode            string/null                 no              yes Current physical
                                                                        holder

  storageId             string/null                 no              yes Current storage
                                                                        location

  availabilityStatus    enum                       yes              yes Availability / sale
                                                                        state

  originType            enum                       yes               no `PURCHASE`,
                                                                        `CONSIGNMENT`,
                                                                        `MIGRATION`,
                                                                        `RETURN`,
                                                                        `TRANSFORMATION`

  originId              string                     yes               no Source business
                                                                        document

  purchaseId            string/null        conditional               no Source Purchase

  purchaseItemId        string/null        conditional               no Source Purchase Item

  quantity              integer                    yes       controlled Current
                                                                        physical/logical
                                                                        quantity represented
                                                                        by this Inventory
                                                                        record

  createdAt             datetime                   yes               no Recognition
                                                                        timestamp

  updatedAt             datetime                   yes              yes Last master-state
                                                                        update
  ------------------------------------------------------------------------------------------

Inventory `quantity` is not Purchase Base Qty. Purchase Base Qty records
acquisition units; Inventory quantity records the current quantity
represented by an Inventory record and may participate in governed
transformations.

## Cost Basis

  Field                Type           Meaning
  -------------------- -------------- -----------------------------------------------
  buyPrice             decimal        Original unit purchase price where applicable
  allocatedShipping    decimal        Purchase shipping allocation
  allocatedDiscount    decimal        Purchase discount allocation
  allocatedTax         decimal        Reserved/active tax allocation
  finalCost            decimal        Authoritative acquisition cost basis
  totalRemainingCost   decimal/null   Bulk/quantity lot remaining cost
  averageUnitCost      decimal/null   Derived average lot cost

`finalCost` and cost lineage are never replaced by current market
values.

## Ownership Snapshot

  Field                  Type         Meaning
  ---------------------- ------------ ---------------------------------------
  ownershipRuleId        string       Rule used
  ownershipRuleVersion   string/int   Version
  capitalDistribution    object       Capital beneficiaries and percentages
  profitDistribution     object       Profit beneficiaries and percentages
  ownershipResolvedAt    datetime     Snapshot time

## Card Metadata

Typical fields include: - cardNumber - cardName - setCode - rarity -
color - cardType - counter - language - variant - condition - grade -
gradingCompany - gradingCertNumber

## Bulk Card Lot

  ----------------------------------------------------------------------------------
  Field                   Type                    Meaning
  ----------------------- ----------------------- ----------------------------------
  bulkLabel               string                  Operator-defined grouping

  bulkGroupingMetadata    object/null             Set/color/rarity/type/theme/etc.
                                                  when recorded

  quantity                integer                 Remaining card count

  totalRemainingCost      decimal                 Remaining lot cost

  averageUnitCost         decimal                 Derived cost/card
  ----------------------------------------------------------------------------------

Bulk composition must not claim card-level detail that was never
captured.

## Transformation

  -----------------------------------------------------------------------
  Field                   Type                    Meaning
  ----------------------- ----------------------- -----------------------
  parentInventoryId       string                  Parent Inventory
                                                  consumed/reduced by
                                                  transformation

  childInventoryIds       array                   Child Inventory records
                                                  created by
                                                  transformation

  transformationType      enum/string             Governed transformation
                                                  type

  transformedQuantity     integer                 Underlying quantity
                                                  moved from Parent to
                                                  Children

  transformedCost         decimal                 Cost moved from Parent
                                                  to Children

  transformationEventId   string                  Stable transformation
                                                  event identity

  transformedAt           datetime                Successful
                                                  transformation
                                                  timestamp
  -----------------------------------------------------------------------

A Child Inventory may later become a Parent Inventory in another
transformation. Lineage remains immutable and multi-generation
navigation must remain possible.

## Market Links

-   acquisitionMarketSnapshotId
-   saleMarketSnapshotId
-   currentMarketObservationId

Historical transaction snapshots and current market observations are
separate data concepts. Acquisition snapshots may originate from
governed CARD providers or explicitly manual PRODUCT market references.

## Cross References

Inventory Detail must support navigation to: - Purchase - Purchase Item
and its immutable Base Qty - Seller Contact - Sales Order - Buyer
Contact where sold - Parent/Child transformation lineage - Market
observations - Portfolio position
