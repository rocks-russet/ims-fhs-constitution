# ARCH-007 — Permission Matrix Blueprint

## SUPER_ADMIN
Broad administrative capability subject to server-side permission checks and step-up authentication for sensitive actions.

## OPERATOR
Operational access based on explicit permissions, not role name alone.

## READ_ONLY
Viewing only within explicitly granted scopes.

## Representative Permissions
- PURCHASE_CREATE
- PURCHASE_ASSIGN_ANY_OWNER
- OWNERSHIP_OVERRIDE
- INVENTORY_VIEW
- INVENTORY_EDIT
- INVENTORY_SPLIT
- SALES_MANAGE
- PAYMENT_CONFIRM
- FINANCE_VIEW
- WITHDRAWAL_REQUEST
- WITHDRAWAL_APPROVE
- CONTACT_VIEW
- CONTACT_EDIT
- ADMIN_ACCESS
- USER_MANAGE
- PERMISSION_MANAGE

## Rule
Resource scope is evaluated in addition to action permission. Changing a URL or ID never expands access.
