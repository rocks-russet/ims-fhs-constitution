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

## v0.5.0 — Finance v1 Refactor

Replaced:
- FIN-BR-001 through FIN-BR-052

Removed from Finance v1 core:
- Generic enterprise finance rules not required by the approved IMS FHS v1 workflow
- Generic certification/self-assessment/period-close constructs without approved FHS feature origin

Aligned Finance v1 scope:
- Wallet Engine
- Financial Event Engine
- Profit Engine
- Capital
- Withdrawal with AK final approval
- Reimbursement
- Internal Transfer
- Wallet History / Financial Timeline
- Withdrawal / Capital / Transfer / Reimbursement History
- Financial Snapshot
- Financial Reference Engine and drill-down
- Financial Analytics
- Financial Integrity

Repository cleanup required:
- DELETE old FIN-BR-053 through FIN-BR-078

## v0.6.0 — Inventory v1 Refactor + Market Intelligence

Inventory:
- Replaced INV-BR-001 through INV-BR-016 with the reviewed Inventory v1 model
- Added INV-BR-017 through INV-BR-062
- Added Serialized Card and low-value Bulk Card Lot models
- Added operator-defined bulk grouping and Bulk -> Serialized extraction
- Added free-form splittable Product workflow with quantity/cost conservation
- Simplified physical tracking to Owner + Holder + Storage; no formal custody-transfer workflow
- Deferred High-Value second-person verification from baseline
- Added PriceCharting for English and Yuyutei for Japanese card market observations
- Added Portfolio Engine, personal asset dashboard integration, Inventory Explorer Grid/List views, dynamic columns, sorting, filtering, and type-aware Inventory Detail
- Added bidirectional Inventory <-> Purchase <-> Contact/Sales navigation
- Added Packing Supply inventory integration

Purchase:
- Added PUR-BR-045 Market Snapshot at Purchase
- Added PUR-BR-046 Purchase Price vs Market Variance

Sales:
- Added SAL-BR-047 Market Snapshot at Sale
- Added SAL-BR-048 Sale Price vs Market Variance

Contact:
- Added CON-BR-029 Seller Price Behaviour Analytics
- Added CON-BR-030 Buyer Price Behaviour Analytics

Repository cleanup:
- Delete the old INV-BR-001 through INV-BR-016 files before/after uploading this replacement because the refactor uses new filenames.
- Delete obsolete duplicate SAL-BR files left from the pre-refactor Sales naming set; keep the current Sales v1 filenames and SAL-BR-047/048.

## v0.7.0 — Authentication & Authorization v1

Added:
- AUTH-BR-001 through AUTH-BR-038

Scope:
- Modern adaptive password hashing (Argon2id preferred)
- Login/password/reset/account lock
- Server-side sessions, 8-hour baseline TTL, sliding expiration, single active session
- Granular roles/permissions and resource-level authorization
- Actor vs owner separation
- Read-only access and authenticated bootstrap
- Personal Wallet + Portfolio dashboard context
- TOTP enrollment for all users with adaptive risk-based MFA
- Trusted devices, recovery codes, step-up authentication
- Rate limiting, CSRF, HTTPS, security headers, secret management
- Direct-URL/API protection, IDOR/BOLA protection, and filesystem/static exposure protection
- Auth audit and integrity checks

Existing AUTH-BR detected before generation: 0

## v0.8.0 — System / Platform v1

Added:
- SYS-BR-001 through SYS-BR-050

Scope:
- Configuration and feature flags
- Central Numbering Engine for PUR / ORD / INV and other governed business documents
- Reusable Approval Engine
- Event Engine with domain ownership, retry, and dead-letter handling
- Background Queue and Scheduler
- Scheduled OPTCG/card database refresh
- Scheduled PriceCharting EN and Yuyutei JP refresh
- Portfolio / analytics / backup / security cleanup jobs
- Central Audit Engine
- Notification Engine with pluggable future channels
- File/Object Storage, Backup/Restore, Migration, Maintenance
- System and cross-domain integrity / health monitoring
- User-facing performance objective
- Non-blocking asynchronous processing
- Explicit VALIDATING / COMMITTING / SUCCESS / ERROR UI state
- Interaction locking, visible loading, double-submit prevention, atomic/idempotent commit and safe recovery

Existing SYS-BR detected before generation: 0

## v0.9.0 — Architecture v1 Foundation

Added:
- ARCH-001 through ARCH-010
- ADR-001 through ADR-008

Scope:
- System overview
- Domain model
- ER blueprint
- Database principles
- Domain Event Dictionary
- Critical sequence flows
- Permission matrix blueprint
- Application repository structure
- API contract principles
- Railway deployment architecture
- PostgreSQL source-of-truth decision
- Event-driven platform decision
- Optional Redis accelerator decision
- Portfolio separation decision
- Transaction market snapshot decision
- Actor/owner separation decision
- Adaptive MFA decision
- Async non-critical work decision

## v0.10.0 — Data Dictionary & Implementation Guide v1

Added Data Dictionary:
- DICT-001 Inventory
- DICT-002 Purchase
- DICT-003 Sales
- DICT-004 Finance
- DICT-005 Contact
- DICT-006 Authentication
- DICT-007 System / Platform
- DICT-008 Market
- DICT-009 Portfolio
- DICT-010 Analytics

Added Implementation Guide:
- GUIDE-001 Engineering Principles
- GUIDE-002 Transaction & Commit
- GUIDE-003 Performance & Responsiveness
- GUIDE-004 Security
- GUIDE-005 Database & Migration
- GUIDE-006 Testing Strategy
- GUIDE-007 Release & Rollback
- GUIDE-008 Observability & Operations

Purpose:
- establish shared data contracts before Railway implementation
- establish implementation, performance, security, testing, migration, release, and operational discipline

## v0.11.0 — Repository Navigation & Implementation Roadmap

Added:
- docs/IMPLEMENTATION_ROADMAP.md

Updated:
- README.md
- Reading Order reflects current repository structure
- Added implementation phases from Foundation to Production

## v0.12.0 — Database Blueprint v1

Added:
- DB-001 through DB-016
- PostgreSQL relational blueprint aligned with reviewed IMS FHS Business Rules
- Contact, Auth, Purchase, Inventory, Product/Card/Market, Sales, Finance schemas
- Portfolio/Analytics read models
- Event/Approval/Job/Audit/File schemas
- Index, constraint, transaction-boundary, migration, archive and backup strategy

Notes:
- PostgreSQL remains source of truth
- Redis remains optional acceleration infrastructure only
- Portfolio/Analytics remain rebuildable derived models
- Critical commits remain atomic/idempotent

## v0.13.0 — Internal API Specification v1

Added:
- API-001 through API-015
- Internal IMS FHS API contract across Auth, Contact, Purchase, Inventory, Sales, Finance, Market, Portfolio, System/Admin, Approval, Event/Job, and File domains
- Standard response/error contract
- Idempotency, concurrency, pagination, sorting, and filtering rules

Updated:
- README reading order now includes Database Blueprint and Internal API Specification

Boundary:
- External OPTCG API / PriceCharting / Yuyutei integration is intentionally excluded and will be documented separately.

## v0.14.0 — External Integration Specification v1

Added:
- INT-001 through INT-008
- OPTCG Card API integration boundary
- Bandai official card-source verification
- PriceCharting EN market adapter
- Yuyutei JP market adapter
- provider normalization/matching contract
- rate-limit/retry/cache/freshness behavior
- integration security and observability

Updated:
- README reading order now includes External Integration Specification

Notes:
- Provider-specific rate limits, URLs, selectors, and authentication details must be verified at implementation time.
- Domain engines consume normalized IMS FHS Market/Card services rather than calling external providers directly.

## v0.15.0 — Infrastructure Blueprint v1

Added:
- INF-001 through INF-014
- Railway Web/Worker/PostgreSQL/Object Storage topology
- optional Redis policy
- queue/worker and scheduler strategy
- environment isolation
- CI/CD/deployment
- secrets/network security
- observability
- backup/disaster recovery
- performance/scaling
- production readiness checklist

Updated:
- README reading order now includes Infrastructure Blueprint


## v0.16.0 — Coding Standard v1

Added:
- CODE-001 to CODE-016
- Engineering, backend/frontend, database, transaction, worker, security, validation, performance, testing and release standards.
