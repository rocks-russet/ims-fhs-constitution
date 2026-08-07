# INV-BR-046 — Owner Portfolio Scope

## Feature Origin

Inventory v1 Feature Map — reviewed against IMS FHS v1/v2 discovery.

## Rules

1. Portfolio can be viewed by AK, AH, RCS, FHS, and authorized ALL scope.
2. Default personal dashboard resolves the owner context associated with the logged-in user.
3. Holder does not determine portfolio ownership.
4. SUPER_ADMIN/authorized users may switch to other permitted owner scopes.
5. Multi-beneficiary ownership analytics may be added only where the report explicitly defines its basis.

## Invariants

- Historical source records remain reconstructable.
- Derived analytics never silently mutate transaction or inventory source data.
- Cross-module references use stable IDs.
