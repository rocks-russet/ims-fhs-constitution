# DICT-005 — Contact Data Dictionary

## Contact
- contactId
- displayName
- aliases[]
- roles { buyer, seller }
- status
- phones[]
- addresses[]
- externalIdentities[]
- tags[]
- notes[]
- createdAt
- updatedAt
- mergedIntoContactId

## Principle
One real-world person/organization = one Contact.
Buyer and Seller are roles of the same Contact.

## Phone
- phoneId
- originalValue
- normalizedValue
- label
- active
- verificationStatus

## Address
- addressId
- label/purpose
- recipientName
- phone
- address lines
- locality/city/province/postalCode/country
- active
- isDefault

## External Identity
- provider/platform
- externalId/handle
- profileUrl
- verificationStatus
- active

## Seller Analytics
Derived from Purchase:
- total purchased value
- purchase count
- units supplied
- average buy
- average/median Buy-vs-Market variance
- % below / near / above transaction-time market
- estimated saving/premium vs market
- drill-down Purchase / Inventory

## Buyer Analytics
Derived from completed Sales:
- lifetime spending
- order count
- average order
- first/last purchase
- average/median Sale-vs-Market variance
- % above / near / below transaction-time market
- drill-down Order / Inventory

Analytics never rewrite Contact master data.
