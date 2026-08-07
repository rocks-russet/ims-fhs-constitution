# INV-BR-032 — Inventory Listing Status

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Listing status identifies whether inventory is offered for sale and on which approved channel references.
2. LISTED inventory remains owned inventory until reserved/sold.
3. Listing status does not itself create a Sales Order.
4. Listing references are retained historically after closure.
5. Listing status must remain consistent with sold/reserved quantity.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
