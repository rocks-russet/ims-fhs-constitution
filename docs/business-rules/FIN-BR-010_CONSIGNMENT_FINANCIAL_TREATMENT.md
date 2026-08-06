# FIN-BR-010 — Consignment Financial Treatment

Purpose: Separate consigned inventory proceeds from IMS FHS-owned capital and recognize only the financial rights earned by IMS FHS.

Rules:
- Inventory held on consignment remains economically owned according to its approved ownership or consignment agreement until a valid transfer of ownership occurs.
- Receiving consigned inventory creates no capital contribution and no wallet balance by itself.
- Every consignment arrangement must identify:
  - consignor Contact or Wallet Code;
  - covered inventory;
  - effective period;
  - pricing authority;
  - fee, commission, or profit-sharing basis;
  - permitted expenses and deductions;
  - settlement timing;
  - payment destination;
  - approval evidence.
- Sale proceeds attributable to a consignor must be recorded as a payable or settlement obligation and must not be recognized as IMS FHS capital or profit.
- IMS FHS may recognize only the approved commission, fee, reimbursable cost, or profit share arising from the completed consignment sale.
- Consignment settlement occurs only after the related order is `COMPLETED`, unless an approved agreement explicitly defines another trigger.
- Item-level consignment calculations must be preserved before order-level aggregation.
- Deductions from consignor proceeds must be authorized by the consignment agreement and supported by traceable records.
- Payment to the consignor must reference the consignment settlement and create the required immutable ledger entries.
- Cancellation, return, loss, damage, or ownership conversion of consigned inventory must remain traceable to the original arrangement.
- A change to consignment terms must not retroactively alter completed settlements.
