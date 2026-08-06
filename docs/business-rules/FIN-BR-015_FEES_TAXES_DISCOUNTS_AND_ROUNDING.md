# FIN-BR-015 — Fees, Taxes, Discounts, and Rounding

Purpose: Standardize financial treatment of fees, taxes, discounts, additional charges, and rounding differences.

Rules:
- Every monetary adjustment must be classified explicitly and must not be hidden inside an unrelated amount.
- Supported adjustment classes include:
  - discount;
  - marketplace or payment fee;
  - tax;
  - shipping charge;
  - additional charge;
  - rebate or credit;
  - rounding adjustment.
- Each adjustment must identify its calculation basis, rate or fixed amount, sign, currency, source, and affected transaction component.
- Discounts reduce the amount charged or recognized according to the approved sales or purchase rule and must not be posted as a separate expense unless explicitly required.
- Marketplace and payment-processing fees must be recognized separately from gross sale proceeds.
- Taxes collected or paid on behalf of another authority or party must not be treated as IMS FHS profit.
- Additional charges require a human-readable description and must not duplicate shipping, fees, taxes, or item value.
- Percentage calculations must define whether they apply before or after discounts, shipping, tax, and other fees.
- The system must use a single approved currency precision and rounding method for each transaction.
- Rounding must occur only at defined calculation boundaries and must not be repeatedly applied to intermediate values.
- Any residual rounding difference must be recorded explicitly and assigned according to the approved settlement rule.
- Recalculation must be deterministic from the stored inputs and applied rule version.
- Completed financial records must preserve the original calculated values even when default rates or tax policies later change.
