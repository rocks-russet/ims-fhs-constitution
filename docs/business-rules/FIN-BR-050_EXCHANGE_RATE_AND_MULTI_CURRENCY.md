# FIN-BR-050 — Exchange Rate Application and Currency Conversion

Purpose: Extend FIN-BR-017 with deterministic transaction-level application of approved exchange rates.

Rules:
- Each foreign-currency transaction must retain original amount, original currency, applied rate, rate source, rate timestamp, converted IDR amount, and rounding result.
- The applied rate is snapshotted when the financial event is recognized.
- Later rate changes must not rewrite recognized historical values.
- Manual rates require justification and approval.
- Conversion differences caused by settlement at a later rate must be recorded separately as realized currency gain or loss.
- Unsettled foreign-currency positions may be revalued only through explicit period-end adjustment entries.
- Currency conversion must use one defined precision and rounding policy across wallet, ledger, reports, and exports.
- Missing or invalid rates must block recognition rather than silently defaulting to 1.

Invariants:
- Original-currency evidence is never discarded.
- Historical rate snapshots are immutable.
- Exchange differences are not mixed into product margin unless explicitly classified.

Related:
- FIN-BR-015
- FIN-BR-017
- FIN-BR-040
