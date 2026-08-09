# IMS FHS v2 — UI Reference Index

This directory contains the approved HTML mockups used as implementation references for IMS FHS v2.

## Governance

- Files under `docs/ui/mockups/` are **reference artifacts**, not runtime application source code.
- Production code belongs under `src/`.
- Business rules, architecture, database/API contracts, and design-system rules remain authoritative in the `ims-fhs-constitution` repository.
- When a mockup conflicts with an explicit Constitution rule, the Constitution wins and the UI implementation must be reconciled without silently changing business behavior.
- The mockups listed below are the current **APPROVED / LOCKED visual references** unless a later approved version is committed.

## Approved screen references

| Module | Screen | Approved reference |
|---|---|---|
| Dashboard | Dashboard | `mockups/dashboard/IMS_FHS_DASHBOARD_MOCKUP_V1_20260809_172641_WIB.html` |
| Inventory | Inventory Explorer | `mockups/inventory/IMS_FHS_INVENTORY_EXPLORER_MOCKUP_V3_20260807_1608_WIB.html` |
| Inventory | Inventory Detail | `mockups/inventory/IMS_FHS_INV_DETAIL_MOCKUP_V2_20260807_1546_WIB.html` |
| Purchase | Purchase Explorer | `mockups/purchase/IMS_FHS_PURCHASE_EXPLORER_MOCKUP_V1_20260807_1620_WIB.html` |
| Purchase | Purchase Detail | `mockups/purchase/IMS_FHS_PURCHASE_DETAIL_MOCKUP_V1_20260807_1700_WIB.html` |
| Sales | Sales Explorer | `mockups/sales/IMS_FHS_SALES_EXPLORER_MOCKUP_V1_20260807_1634_WIB.html` |
| Sales | Sales Detail | `mockups/sales/IMS_FHS_SALES_DETAIL_MOCKUP_V1_20260807_1646_WIB.html` |
| Contacts | Contact Explorer | `mockups/contacts/IMS_FHS_CONTACT_EXPLORER_MOCKUP_V3_20260809_095832_WIB.html` |
| Contacts | Contact Detail | `mockups/contacts/IMS_FHS_CONTACT_DETAIL_MOCKUP_V1_20260809_075158_WIB.html` |
| Wallet | Wallet Explorer | `mockups/wallet/IMS_FHS_WALLET_EXPLORER_MOCKUP_V2_20260809_100517_WIB.html` |
| Wallet | Wallet Detail | `mockups/wallet/IMS_FHS_WALLET_DETAIL_MOCKUP_V1_20260809_100248_WIB.html` |
| Approvals | Approval Explorer — SUPER_ADMIN | `mockups/approvals/IMS_FHS_APPROVAL_EXPLORER_MOCKUP_V1_20260809_103422_WIB.html` |
| Approvals | Approval Center — AH requester-only view | `mockups/approvals/IMS_FHS_APPROVAL_REGULAR_USER_AH_MOCKUP_V2_20260809_171444_WIB.html` |
| Approvals | Approval Detail | `mockups/approvals/IMS_FHS_APPROVAL_DETAIL_MOCKUP_V2_20260809_172224_WIB.html` |
| Settings | Settings | `mockups/settings/IMS_FHS_SETTINGS_MOCKUP_V1_20260809_173003_WIB.html` |
| Administration | Administration | `mockups/administration/IMS_FHS_ADMINISTRATION_MOCKUP_V1_20260809_183359_WIB.html` |
| Reports | Reports | `mockups/reports/IMS_FHS_REPORTS_MOCKUP_V1_20260809_183725_WIB.html` |

## Locked UX decisions reflected by these mockups

- Global application supports Light / Dark / System theme and per-user appearance preferences.
- Explorer tables use column-header sorting; advanced filters remain extensible.
- Inventory Detail keeps the asset/card image persistent while tabs change information context.
- Purchase and Sales Detail use lifecycle/progress patterns.
- Contact Explorer global search includes structured address fields; Contact Preview includes primary address plus Facebook Profile / Messenger actions.
- Wallet visibility is authorization-aware: SUPER_ADMIN may see all wallets; regular users see self only; FHS visibility is explicitly granted.
- Approval Center is cross-module governance, not wallet-only. AH's approved regular-user reference is requester-only; approval authority is not implied by access to the screen.
- Approval Detail includes the requester's latest 30 wallet transactions when relevant to withdrawal review.
- Settings is personal preference/security; Administration is SUPER_ADMIN system control.
- Development, Staging, and Production must remain operationally isolated; test data must not be carried into clean Production by default.

## Implementation rule

When implementing a screen, engineers/AI agents should read:

1. the relevant Constitution business rules and API/database contracts;
2. the current UI Design System specification;
3. this approved mockup reference;
4. any later implementation decision record that supersedes a mockup detail.
