# FIN-BR-011 — Financial Approval and Segregation of Duties

Purpose: Ensure that sensitive financial actions are authorized, attributable, and protected from unilateral misuse.

Rules:
- Financial actions requiring approval must remain non-effective until all required approvals are granted.
- Approval requirements may depend on:
  - action type;
  - amount threshold;
  - Wallet Code or bucket;
  - requester role;
  - destination;
  - exception or risk condition.
- The active authorization policy must define who may request, approve, execute, reject, cancel, or reverse each controlled action.
- A requester must not approve their own controlled financial action when segregation of duties is required.
- Approval records must identify:
  - approval request ID;
  - requested action and source reference;
  - requester;
  - approver;
  - decision;
  - decision timestamp;
  - reason or note;
  - policy or threshold applied.
- Approval must authorize the exact amount, destination, Wallet Code, bucket, and purpose presented for review.
- A material change after approval invalidates the prior approval and requires a new approval request.
- Execution must verify that the approval remains valid, unused, and applicable to the current transaction.
- Approval records are immutable and must not be deleted when a request is rejected, cancelled, expired, or superseded.
- Emergency administrative action must be explicitly identified, justified, and subjected to subsequent review.
- Super-administrator capability does not remove the requirement for audit evidence or applicable approval controls.
