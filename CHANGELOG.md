# Changelog

## v0.2.0 Part 21

Added:
- CON-BR-001
- CON-BR-002
- CON-BR-003
- CON-BR-004
- CON-BR-005
- CON-BR-006

## v0.2.0 Part 22 — Corrective Contact Rule Completion

Corrected and completed:
- CON-BR-001 Contact Lifecycle
- CON-BR-002 Buyer Management
- CON-BR-003 Seller Management
- CON-BR-004 Address Management
- CON-BR-005 Contact Duplicate Detection
- CON-BR-006 Contact Merge

The generic placeholder content was replaced with enforceable, scope-specific contact rules and invariants.

## v0.2.0 Part 23 — Contact Governance Expansion

Added:
- CON-BR-007 Contact Deactivation and Archival
- CON-BR-008 Contact Search and Selection
- CON-BR-009 Phone Number Management
- CON-BR-010 Default Address Policy
- CON-BR-011 External Contact Identity
- CON-BR-012 Contact Privacy, Access, and Audit

## v0.2.0 Part 24 — Contact Completion and Integrity Rules

Added:
- CON-BR-013 Contact Tag and Classification
- CON-BR-014 Contact Notes and Communication Preferences
- CON-BR-015 Contact Transaction Snapshot
- CON-BR-016 Contact Import and Export
- CON-BR-017 Contact Data Integrity Audit
- CON-BR-018 System and Generic Contacts

## v0.2.0 Part 25 — Contact Governance Extension

Added:
- CON-BR-019 Contact Role Transition
- CON-BR-020 Contact Alias Management
- CON-BR-021 Contact Verification Status
- CON-BR-022 Contact Relationship Mapping
- CON-BR-023 Contact Retention Policy
- CON-BR-024 Contact Governance Review

## v0.2.0 Part 26 — Corrective Contact Rule Completion

Corrected:
- CON-BR-019
- CON-BR-020
- CON-BR-021
- CON-BR-022
- CON-BR-023
- CON-BR-024

## v0.3.0 Contact v1 Refactor

Replaced and aligned:
- CON-BR-001 through CON-BR-024 against the approved Contact Manager feature map
- Explicitly established one real-world entity as one Contact
- Explicitly established Buyer and Seller as roles of the same Contact
- Removed inferred Contact-to-Contact relationship functionality
- Added Buyer and Seller operational analytics requirements

Added:
- CON-BR-025 Buyer Analytics
- CON-BR-026 Seller Analytics
- CON-BR-027 Contact Analytics Dashboard
- CON-BR-028 Contact Settings

## v0.3.1 — Purchase v1 Complete

Added:
- PUR-BR-001 through PUR-BR-044

Scope:
- Purchase session, cart, draft, mixed CARD and PRODUCT items
- Individual price and quantity
- Seller, platform, date, currency, notes
- Per-item owner, multiple-owner cart, ownership snapshots and overrides
- Shipping-by-quantity, discount-by-value, reserved tax, Final Cost, and rounding
- Product category and duplicate review dependencies
- Atomic commit, Inventory expansion, Inventory ID generation, Purchase History, and rollback
- Purchase History search, filters, detail, analytics, import/export, and settings

## v0.4.0 — Sales v1 Refactor

Replaced:
- SAL-BR-001 through SAL-BR-040

Removed from Sales v1 core:
- Sales Approval Override
- Customer Claim Routing
- Sales SLA / Aging
- Sales Incident Management
- Replay Protection

Added / formalized:
- Buyer Selection and Buyer Snapshot
- Invoice V1 content including auction/claim/direct reference and itemized pricing
- Admin-controlled Payment Option Visibility
- Invoice V2 payment-path behavior
- Direct ↔ Marketplace ↔ Marketplace Split switching with superseded invoices
- Marketplace Calculator and versioned marketplace fee profile usage
- Invoice Template versioning
- Supplies Template / adaptive recommendation
- Actual Supplies Consumption
- Packing Completion
- Explicit Profit Distribution and Wallet Posting at COMPLETED
- Sales History Search / Filter / Detail
- Customer Analytics and Marketplace Analytics
- Sales Transaction Snapshot
- Sales Integrity Audit

Final Sales v1 rule range:
- SAL-BR-001 through SAL-BR-046
