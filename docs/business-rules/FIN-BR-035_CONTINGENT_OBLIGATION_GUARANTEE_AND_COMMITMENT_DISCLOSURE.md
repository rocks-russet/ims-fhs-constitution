# FIN-BR-035 — Contingent Obligation, Guarantee, and Commitment Disclosure

Purpose: Ensure uncertain or future financial exposures are recorded and disclosed without prematurely creating or concealing wallet rights, liabilities, expenses, or revenue.

Rules:
- A contingent obligation is a potential financial outflow whose existence, amount, timing, or responsible party depends on a future event or unresolved condition.
- A commitment is an approved future financial obligation arising from a contract, order, guarantee, reservation, undertaking, or other enforceable or operational promise that has not yet become a posted liability.
- A guarantee is an undertaking by IMS FHS, a wallet, owner, or authorized actor to satisfy another party's obligation if specified conditions occur.
- Every material contingent obligation, guarantee, or commitment must identify:
  - record ID;
  - type;
  - related parties;
  - source agreement or event;
  - maximum exposure or best estimate;
  - currency;
  - triggering condition;
  - expected timing;
  - responsible wallet or economic beneficiary when determinable;
  - approval;
  - status;
  - supporting evidence.
- Supported statuses must distinguish at minimum `PROPOSED`, `APPROVED`, `ACTIVE`, `TRIGGERED`, `SETTLED`, `EXPIRED`, `CANCELLED`, and `DISPUTED` where applicable.
- Creation of a contingent record must not change wallet balances unless a separate valid financial posting event occurs.
- When an exposure becomes sufficiently certain and measurable under the active accounting policy, it must be converted into the appropriate payable, reserve, expense, loss, or other recognized financial record.
- Triggering, settlement, expiration, cancellation, or release must preserve the original commitment history and must not overwrite prior terms.
- Guarantees and commitments involving related parties require conflict-of-interest disclosure and independent approval where required.
- A commitment must not be split, routed, delayed, or omitted to avoid approval thresholds, liquidity controls, reporting, or disclosure.
- Potential recoveries from insurance, vendors, carriers, marketplaces, owners, or other parties must be recorded separately and must not automatically offset the gross exposure.
- Material changes in probability, estimate, due date, beneficiary, or responsible wallet must be versioned with reason, evidence, actor, and timestamp.
- Expired or cancelled commitments must remain available for audit and must state why no financial posting resulted.
- Reporting must distinguish recognized obligations from unrecognized contingencies and must avoid presenting uncertain amounts as available wallet balance.
