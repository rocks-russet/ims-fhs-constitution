# FIN-DEC-001 Wallet Philosophy

Decision:
Wallet represents economic/financial rights and governed economic balances inside IMS FHS; it does not represent the balance of a physical bank account.

A physical payment or custody account and an economic Wallet/Fund are separate concepts. A bank account may physically hold money belonging to more than one economic owner or fund, while IMS FHS must preserve the economic ownership in separate ledgers.

For example, an AK bank account may physically custody both AK funds and FHS funds. A transfer executed from that bank account does not by itself determine whether AK Wallet or FHS Wallet is economically debited. The governed Settlement Funding Allocation determines the economic source.

Wallet movements must therefore be derived from governed financial events, approvals, allocations, and settlements. There is no generic manual balance-edit behavior.

Reason:
Business ownership, reimbursement rights, contributions, settlement funding, and profit/capital attribution must remain independent from the banking channel used to move physical cash.
