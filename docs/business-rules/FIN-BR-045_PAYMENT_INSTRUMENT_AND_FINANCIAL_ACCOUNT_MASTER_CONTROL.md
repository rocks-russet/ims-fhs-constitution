# FIN-BR-045 — Payment Instrument and Financial Account Master Control

Purpose: Protect the accuracy and authorization of bank accounts, e-wallets, marketplace settlement accounts, payment links, and other instruments used to receive, hold, or disburse funds.

Rules:
- Every payment instrument or external financial account used by IMS FHS must have a controlled master record.
- The master record must include at minimum:
  - account or instrument ID;
  - account type;
  - provider or institution;
  - masked account identifier;
  - legal or registered holder;
  - operational owner or custodian;
  - permitted purpose;
  - supported currency;
  - status;
  - effective dates;
  - verification state;
  - approval references.
- Full credentials, passwords, PINs, private keys, one-time codes, and equivalent secrets must not be stored in ordinary financial master data or business documents.
- Creation, activation, beneficiary change, ownership change, and deactivation of a payment instrument require authorized approval and independent verification.
- Verification must use an authoritative source or controlled confirmation process and must not rely solely on information supplied by the requesting actor.
- Changes to payout or beneficiary details must be subject to heightened review, especially when linked to a pending payment, refund, withdrawal, or settlement.
- A payment instruction must reference the approved master record rather than uncontrolled free-text account details whenever the required account already exists.
- Payments to an unregistered account require documented exception approval, evidence of account ownership, and post-transaction review.
- Inactive, suspended, unverified, expired, or revoked instruments must not be used for new financial activity.
- Marketplace and payment-provider accounts must be linked to their settlement, fee, reserve, and chargeback behavior so external movements can be reconciled correctly.
- Custody responsibility for physical tokens, devices, recovery methods, and administrative access must be assigned and periodically reviewed.
- Access to initiate payments must be separated from access to modify account master data where practicable.
- Every master-data change must preserve previous values, actor, approver, timestamp, reason, and evidence reference.
- Compromised or suspected instruments must be suspended immediately, affected activity reviewed, and replacement or recovery performed through a documented incident process.
