# INV-BR-006 — Inventory History

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Inventory History is append-only and records material changes to owner, holder, storage, status, listing, reservation, transformation, market linkage, and corrections.
2. History records actor/system source, timestamp, previous value, new value, reason, and reference where applicable.
3. History remains available after sale or archival.
4. History does not replace Purchase History, Sales History, or Wallet History.
5. Inventory Detail must expose relevant history to authorized users.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
