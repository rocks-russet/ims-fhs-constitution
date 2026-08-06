# SAL-BR-039 — Sales Analytics Integrity

## Purpose

Ensure dashboards, summaries, and analytical outputs represent sales activity consistently without becoming an alternative transactional source of truth.

## Rules

1. Sales analytics must derive from authoritative sales, inventory, shipment, and financial records.
2. Metric definitions must be explicit and versioned.
3. At minimum, analytics must distinguish:
   - active orders;
   - cancelled orders;
   - completed orders;
   - gross sales value;
   - discounts;
   - additional charges;
   - shipping charged;
   - refunds;
   - recognized revenue;
   - recognized profit;
   - sales channel; and
   - owner attribution.
4. `WAITING_PAYMENT`, `PAID`, `PACKING`, `SHIPPED`, `COMPLETED`, and `CANCELLED` orders must not be combined without explicit labeling.
5. Draft, superseded, test, reversed, and archived records must follow documented inclusion rules.
6. Sales-date metrics must state whether they use order creation, payment confirmation, shipment, delivery, or completion timestamp.
7. Marketplace and Direct sales must remain separately filterable.
8. Multi-payment and split-payment orders count as one order unless the metric explicitly measures payment transactions.
9. Analytics corrections must arise from corrected source records, not direct dashboard edits.
10. Exported metrics must retain report period, data cutoff, filters, metric version, and generation timestamp.

## Invariants

- Analytical totals must reconcile to their declared source population.
- One order cannot be double-counted because it has multiple invoices, payments, or shipments.
- Dashboards do not change transactional state.

## Related

- SAL-BR-005
- SAL-BR-019
- SAL-BR-023
- SAL-BR-028
- FIN-BR-059
