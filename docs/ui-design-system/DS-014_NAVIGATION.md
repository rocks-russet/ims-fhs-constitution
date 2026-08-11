# DS-014 — Navigation

## Primary Navigation
Primary modules:
- Dashboard
- Purchase
- Inventory
- Sales
- Finance
- Contacts
- Approvals
- Reports
- Catalog
- Administration, permission-gated
- Settings

## Catalog Boundary
`Catalog` is operational reference/master-data navigation.

Baseline children:
- Card Catalog
- future Product Catalog
- future category/reference explorers

`Administration > External Catalog` is provider/integration tooling only:
- Bandai Official discovery/import
- OPTCG API synchronization
- dry run / commit
- provider reconciliation
- sync history and integrity review

Canonical Card browsing must not require users to navigate through External Catalog.

## Breadcrumbs
Hierarchical screens use clickable breadcrumbs.

Rules:
- parent segments are links;
- current segment is not a link;
- breadcrumb navigation is hierarchical and does not replace browser Back;
- returning to an Explorer should preserve the relevant query/filter state where supported;
- breadcrumbs never bypass authorization.

## Behavior
- only authorized navigation items are shown;
- hidden navigation does not replace server authorization;
- current section visibly active;
- deep links remain secure and permission checked.

## Quick Navigation
Business IDs may be searchable/clickable for cross-module drill-down.
