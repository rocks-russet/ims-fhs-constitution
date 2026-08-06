# FIN-BR-026 — Purchase Commitment, Vendor Payment, and Inventory Cost

Purpose: Preserve the financial distinction between purchase intent, vendor obligation, payment, inventory recognition, and final inventory cost.

Rules:
- A purchase request, draft cart, or unapproved order creates no payable, ledger effect, or recognized inventory cost.
- An approved purchase commitment must identify:
  - commitment ID;
  - vendor or seller;
  - expected items or services;
  - committed amount and currency;
  - expected fees, shipping, tax, and discounts;
  - responsible actor;
  - approval evidence;
  - related budget when applicable.
- A commitment must remain separate from an actual payable until the obligation-recognition conditions are satisfied.
- Vendor payment must reference the authoritative purchase, payable, advance, or approved expense source.
- Payment before receipt must be classified as an advance or prepayment and must not be treated as recognized inventory cost until allocated to received inventory or another valid destination.
- Inventory cost must be recognized only for inventory accepted under the applicable inventory-recognition rules.
- Allocated purchase components may include item price, shipping, tax, discount, and another approved directly attributable cost.
- Allocation across multiple inventory units must use a deterministic method and preserve any rounding residual treatment.
- Expected costs and final authoritative costs must remain distinguishable.
- Partial receipt, partial payment, vendor credit, cancellation, shortage, or price adjustment must update only the affected outstanding amount and allocation.
- Paying a vendor does not by itself prove that inventory was received, and receiving inventory does not by itself prove that the vendor was paid.
- Duplicate payment, duplicate payable recognition, and duplicate capitalization of the same source amount are prohibited.
- Corrections must preserve the original commitment, payment, receipt, and allocation history through linked reversal, adjustment, or compensating records.
