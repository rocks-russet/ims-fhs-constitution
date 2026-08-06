# FIN-BR-017 — Multi-Currency and Exchange Rate

Purpose: Preserve accurate source-currency records and controlled conversion when IMS FHS transactions involve more than one currency.

Rules:
- The default reporting and wallet currency is `IDR` unless an approved governance decision establishes another currency for a specific wallet or record.
- Every foreign-currency transaction must preserve:
  - original amount;
  - original currency;
  - converted amount when applicable;
  - target currency;
  - exchange rate;
  - rate source;
  - rate timestamp or effective date;
  - conversion method.
- Original foreign-currency values must never be replaced by converted values.
- Exchange rates must come from an approved source or a documented actual settlement rate.
- Estimated conversion and actual settled conversion must remain distinguishable.
- Realized exchange differences arise only when settlement occurs at a rate different from the recognized conversion basis.
- Unrealized exchange differences may be reported but must not change wallet balances unless an approved revaluation rule explicitly permits it.
- Conversion rounding must follow FIN-BR-015 and must be recorded deterministically.
- Fees charged by banks, marketplaces, or payment processors must be recorded separately from exchange-rate differences.
- A transaction must not use multiple exchange rates for the same calculation component without explicit justification.
- Corrections must use linked reversal or compensating entries and preserve the original rate evidence.
- Financial reports must clearly identify whether amounts are original-currency, converted, or consolidated values.
