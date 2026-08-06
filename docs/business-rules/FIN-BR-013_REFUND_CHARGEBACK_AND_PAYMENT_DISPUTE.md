# FIN-BR-013 — Refund, Chargeback, and Payment Dispute

Purpose: Govern refunds, payment reversals, marketplace disputes, and chargebacks without corrupting order settlement or wallet balances.

Rules:
- A refund, chargeback, or payment dispute must reference the affected order, payment, settlement, and external transaction when available.
- Every case must identify:
  - case ID;
  - case type;
  - affected amount and currency;
  - buyer or counterparty;
  - payment channel;
  - reason;
  - evidence;
  - responsible actor;
  - status and effective timestamps.
- Opening a dispute creates no ledger effect unless funds are actually withheld, debited, reserved, or returned.
- A completed refund must create new ledger entries that reverse or compensate the financial effect of the original payment or settlement.
- Posted ledger entries and completed settlements must not be edited or deleted to represent a refund.
- Partial refunds must preserve the original transaction and identify the exact refunded components, including item value, shipping, fees, discounts, and additional charges.
- A marketplace chargeback or withheld balance must be attributed to the wallet, bucket, order, and party responsible under the applicable business rule or approved decision.
- Refunds must not automatically restore inventory; inventory recovery follows the applicable cancellation, return, and inventory rules.
- Duplicate refunds or duplicate dispute postings for the same external event are prohibited.
- Recovery of previously refunded or charged-back funds must be recorded as a new linked financial event.
- Every case must remain traceable from the order, payment, ledger, wallet, and external settlement records.
