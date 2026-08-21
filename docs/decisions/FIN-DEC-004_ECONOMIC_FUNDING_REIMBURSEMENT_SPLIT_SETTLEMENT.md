# FIN-DEC-004 Economic Funding, Reimbursement, and Split Settlement

## Decision

IMS FHS separates:

1. **Economic Wallet/Fund** — who economically owns or bears an amount.
2. **Obligation / Entitlement** — an amount owed to a user or fund before settlement.
3. **Settlement Funding Allocation** — one or more Wallets/Funds that economically bear a settlement.
4. **Payment/Custody Account** — the physical bank/payment account used to move money.

A physical payment account never determines economic ownership by itself.

## Packing Supply Procurement

Packing Supplies are FHS operating assets used to fulfill Sales Orders.

A Packing Supply purchase may be funded by:
- FHS economic funds/capital; or
- temporary personal funding by an IMS user, including AK, AH, or RCS.

Personal funding creates a reimbursement obligation to the funding user. It is not profit and it is not considered physically paid back merely because the obligation exists.

The supply acquisition value includes eligible acquisition costs required to obtain the supplies, such as inbound shipping when applicable. Supply valuation should use a consistent inventory-cost method; weighted-average cost is the baseline for fungible Packing Supplies unless a later governed rule explicitly replaces it.

Actual Packing Supply usage transfers value from Packing Supply stock into the related Order's packing cost. Supply usage must not create a second cash/capital outflow because the cash obligation originates from procurement/settlement, not consumption.

## Reimbursement Approval and Wallet Recognition

A personal reimbursement obligation requires the governed approval flow before it becomes available as a recognized Wallet entitlement.

Example:
- AH purchases Rp100,000 of supplies personally.
- The supply procurement creates a Rp100,000 reimbursement obligation to AH.
- After required approval, AH Wallet may recognize +Rp100,000 as an economic entitlement.
- This Wallet credit does not mean a bank transfer has already occurred.

## Settlement Funding Allocation

A withdrawal or reimbursement settlement may be funded by one or multiple economic Wallets/Funds.

Baseline eligible sources may include:
- FHS Wallet/Fund;
- AK Wallet;
- AH Wallet;
- RCS Wallet;
- other governed Wallet/Fund sources added later.

The sum of all settlement funding allocations must equal the economic amount being settled.

The UI may initially support a single source, but the domain model and ledger must support multiple allocations without redesign.

## Recipient Self-Contribution / Netting

The settlement recipient may also be one of the funding sources.

When the recipient contributes from their own Wallet, that allocation is treated as economic contribution/netting. It reduces the recipient's Wallet entitlement but does not require a physical transfer back to the same recipient for that portion.

Example:
- AH reimbursement entitlement: Rp100,000.
- AH contributes Rp30,000 from AH Wallet.
- AK contributes Rp30,000 from AK Wallet.
- RCS contributes Rp40,000 from RCS Wallet.
- FHS contributes Rp0.
- Economic settlement total: Rp100,000.
- Physical transfer to AH: Rp70,000.

Therefore:

`Actual Physical Transfer = Settlement Amount - Recipient Self-Contribution`

The ledger must still preserve every allocation independently for audit and analytics.

## FHS vs Personal Economic Funding

If an AH withdrawal is physically transferred from an AK bank account but economically funded by FHS, the economic effect is FHS-funded; AK Wallet must not be debited merely because AK's bank account executed the transfer.

If the same physical transfer is economically funded by AK, AK Wallet is debited and FHS Wallet/Fund is not.

Accordingly, settlement records must preserve at minimum:
- recipient;
- economic settlement amount;
- funding allocations and source Wallet/Fund;
- recipient self-contribution amount, when any;
- actual physical transfer amount;
- payment/custody account or channel used, when recorded;
- actor, approval, timestamps, and source references.

## Guardrails

- Funding allocations must be explicit and auditable.
- Allocation totals must reconcile exactly to the settlement amount under the system rounding policy.
- A Wallet may not be overdrawn by a contribution/allocation unless a future explicit rule permits negative Wallet balances.
- Approval and settlement are distinct events.
- A Wallet entitlement credit is not proof of physical payment.
- Physical bank movement is not sufficient evidence of which economic Wallet/Fund bears the transaction.
- Reversal/correction must use governed financial events; historical postings must not be silently rewritten.
- Split funding must preserve source-level history for financial analytics and integrity checks.

## Wallet Foundation Requirement

The Wallet / Financial Event Engine implementation must support this decision from its initial data model so that reimbursement, withdrawal, contribution/netting, split settlement, FHS capital, and physical custody/payment channels do not require a later ledger redesign.
