# FIN-BR-019 — Settlement Account and External Cash Custody

Purpose: Separate external money custody from wallet ownership and preserve traceability between physical payment channels and financial rights.

Rules:
- A Settlement Account represents an external bank account, e-wallet, cash box, marketplace balance, or other payment channel used to receive, hold, or disburse money.
- A Settlement Account is a custody location and must not be treated as a Wallet Code or as the owner of financial rights.
- Every active Settlement Account must identify:
  - Settlement Account ID;
  - account type;
  - provider or institution;
  - account holder or custodian;
  - supported currency;
  - operational status;
  - authorized users;
  - reconciliation method.
- Receipt of money into a Settlement Account creates no wallet effect until the economic source and financial-right allocation are identified and validly posted.
- One Settlement Account may hold money attributable to multiple wallets, buckets, orders, obligations, or third parties.
- Movement between Settlement Accounts changes custody only and must not change wallet ownership unless a separate authorized financial event occurs.
- External account balances must not be used as substitutes for derived wallet balances.
- Every receipt and disbursement through a Settlement Account must retain an external reference, amount, currency, transaction timestamp, and linked authoritative source record.
- Cash held by an operator must be assigned to a recognized Settlement Account or custody record and remain subject to reconciliation.
- Closing or replacing a Settlement Account must preserve its historical transactions and references.
- Differences between Settlement Account evidence and IMS FHS financial records must be recorded as reconciliation exceptions and must not be silently assigned to a wallet.
