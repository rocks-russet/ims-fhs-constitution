# FIN-BR-024 — Opening Balance, Migration, and Financial Cutover

Purpose: Govern introduction of historical financial positions into IMS FHS without fabricating transaction history or compromising ledger integrity.

Rules:
- A financial migration must define an approved cutover timestamp and the source systems or records being replaced.
- Historical balances introduced at cutover must be represented by explicit opening-balance entries or imported historical ledger entries according to the approved migration method.
- Opening balances must identify:
  - migration or cutover ID;
  - Wallet Code and bucket;
  - amount and currency;
  - effective timestamp;
  - source evidence;
  - calculation basis;
  - preparer, reviewer, and approver;
  - import batch or posting reference.
- Opening balances must not be presented as ordinary capital contributions, sales revenue, expenses, or profit unless the source evidence proves that classification.
- The migration must prevent the same historical transaction from being represented both in opening balances and imported transaction detail.
- Imported records must preserve stable source identifiers or a documented mapping to new immutable identifiers.
- Migration transformations, exclusions, assumptions, and unresolved differences must be documented and reviewable.
- The sum of migrated wallet and bucket positions must reconcile to the approved source snapshot, subject only to disclosed exceptions.
- A cutover must include validation of ledger totals, wallet balances, bucket balances, outstanding obligations, unsettled payments, and relevant source links.
- Normal financial operation must not begin on migrated data until required integrity checks and approval are complete.
- Post-cutover corrections must use auditable adjustment, reversal, or compensating entries and must reference the migration batch.
- Re-running an import must be idempotent and must not duplicate previously accepted records.
- Source backups, reconciliation evidence, and migration reports must be retained according to FIN-BR-018.
