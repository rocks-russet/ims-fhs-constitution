# CON-BR-022 — Cross-Module Contact Reference Mapping

## Feature Origin

Contact integration with Purchase and Sales.

## Purpose

Define how Purchase, Sales, Invoice, and Shipment records reference Contacts. This rule does not create a Contact-to-Contact relationship feature.

## Rules

1. Purchase references Seller `contactId`.
2. Sales references Buyer `contactId`.
3. Invoice and Shipment retain transaction snapshots plus the source `contactId`.
4. A Contact performing both roles is referenced through the same `contactId`.
5. Current navigation may resolve merged Contacts to the survivor.
6. Historical records preserve their original Contact reference and snapshot.
7. Contact analytics aggregate by canonical Contact identity while retaining source lineage.
8. No inferred relationship graph between Contacts is generated.

## Invariants

- Cross-module references remain resolvable.
- Buyer/Seller role differences do not create separate Contacts.
- This rule does not introduce a Relationship menu.
