# FIN-BR-046 — Counterparty Credit and Financial Exposure Control

Purpose: Control financial risk arising from customers, vendors, marketplaces, consignors, custodians, and other parties that owe funds, hold funds, receive advances, or create future obligations.

Rules:
- Financial exposure must be identified for any counterparty that can create receivables, payables, deposits, advances, guarantees, unsettled proceeds, chargeback risk, or inventory-related obligations.
- Exposure must be measured on a gross and net basis where relevant and must include known unsettled, disputed, contingent, and overdue amounts.
- A counterparty exposure record must identify:
  - counterparty ID;
  - exposure type;
  - source transactions;
  - currency;
  - outstanding amount;
  - due or expected settlement date;
  - security, deposit, reserve, or offset rights;
  - aging status;
  - risk classification;
  - review status.
- Credit terms, advance limits, consignment settlement terms, and maximum open exposure must be explicitly approved before use.
- New activity must be blocked or escalated when the applicable exposure limit, overdue threshold, dispute threshold, or risk condition is exceeded.
- Exposure must not be understated by omitting disputed items, netting unrelated counterparties, assuming unconfirmed recoveries, or excluding funds held by a marketplace or custodian.
- Related counterparties may be aggregated for control purposes when common ownership, control, benefit, or coordinated behavior creates shared risk.
- Counterparty risk assessment must consider payment history, unresolved disputes, external settlement reliability, concentration, documentation quality, and operational dependency.
- Material overdue receivables, unreturned advances, unsettled marketplace proceeds, and vendor non-performance must be reviewed and assigned a resolution action.
- Expected loss, impairment, reserve, write-off, or recovery treatment must follow approved financial rules and remain linked to the underlying exposure.
- Release of blocked activity or increase of a limit requires documented approval and must not erase prior exceptions or aging history.
- Exposure reports must be periodically reconciled to ledger, order, purchase, inventory, and external settlement records.
- Counterparty deactivation must not close or remove unresolved financial obligations; obligations remain open until settled, transferred, written off, or otherwise formally resolved.
