# FIN-BR-027 — Deposit, Prepayment, and Deferred Financial Treatment

Purpose: Control payments and receipts whose final economic treatment occurs after the initial cash movement.

Rules:
- A deposit or prepayment must remain separate from expense, revenue, profit, capital, and inventory cost until the applicable recognition event occurs.
- Every deposit or prepayment record must identify:
  - record ID;
  - paying and receiving party;
  - amount and currency;
  - purpose;
  - source agreement, order, or obligation;
  - payment or receipt reference;
  - recognition or settlement condition;
  - outstanding amount;
  - status.
- Supported statuses must distinguish at minimum `OPEN`, `PARTIALLY_APPLIED`, `APPLIED`, `REFUNDED`, `FORFEITED`, `CANCELLED`, and `DISPUTED`.
- Applying a deposit or prepayment must reference the authoritative expense, inventory receipt, sale, payable, receivable, or other approved destination.
- Application must not exceed the unapplied amount.
- Partial application must preserve the amount applied, application date, destination, and remaining amount.
- Refund of an unapplied balance must reference the original payment or receipt and follow the applicable approval and ledger rules.
- Forfeiture requires an explicit contractual or approved basis and must not be inferred solely from age.
- Customer deposits received before final sale settlement must not be recognized as realized revenue or profit.
- Supplier deposits paid before goods or services are accepted must not be recognized as final expense or inventory cost.
- Reclassification must use linked entries and preserve the complete deferred-treatment history.
- Aging reports may support review but must not automatically alter the economic classification of an open deposit or prepayment.
