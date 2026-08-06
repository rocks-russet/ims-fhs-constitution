# SAL-BR-020 — Payment Verification

Purpose:
Define the minimum verification required before received payment may change an order to PAID.

Rules:
- Payment verification must confirm payer or payment source, amount, currency, destination account or channel, transaction reference, and received timestamp.
- The verified amount must reconcile to the order payable amount or to an approved partial-payment allocation.
- Duplicate transaction references must be detected before confirmation.
- Screenshots or buyer statements alone are supporting evidence and do not override contradictory account or marketplace evidence.
- The verifying operator must be recorded.
- Where segregation of duties is required, the payment recorder and payment verifier must be different authorized actors.
- Ambiguous, pending, reversed, expired, or unverifiable payments must not move the order to PAID.
- Manual verification overrides require reason, evidence, and authorized approval.
- Later discovery of invalid payment requires governed reversal, order recovery, and incident handling where applicable.

Invariants:
- PAID status requires valid, traceable payment evidence.
- Verification never edits the external transaction reference.
- One verified payment reference cannot be reused for duplicate recognition.

Related:
- SAL-BR-005
- SAL-BR-012
- SAL-BR-018
- SAL-BR-019
