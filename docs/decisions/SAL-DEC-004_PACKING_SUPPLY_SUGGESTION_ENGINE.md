# SAL-DEC-004 Packing Supply Suggestion Engine

Decision:

IMS FHS v2 uses an operator-assisted Packing Supply Suggestion Engine.

Packing Supply recommendation is advisory. The operator remains responsible for final Actual Supply Usage.

A Packing Template may contain multiple Supply outputs and versioned Rules. Baseline Rule types are `PER_ITEM`, `PER_MATCHING_ITEM`, `PER_ORDER`, `QUANTITY_THRESHOLD`, and `COMBINATION`.

The engine evaluates Order composition and may suggest quantities for supplies such as sleeves, toploaders, bubble envelopes, cardboard protectors, plastic bags, bubble wrap, and shipping boxes.

Suggested Supplies and Actual Supplies are separate records. Suggestion does not consume Inventory.

The operator may add, remove, replace, or change quantities before finalization.

Confirmed Actual Supply Usage is canonical at Packing Completion and, when the Supply is tracked, is linked to PACKING_SUPPLY Inventory consumption.

Historical overrides and finalized Actual Usage may be analyzed to discover recurring patterns. Such patterns may create DRAFT Template Candidates, but IMS MUST NOT automatically activate or mutate production Packing Templates.

Learned Template Candidates require authorized human approval before becoming ACTIVE.

Failure to find a matching Template must never block manual packing.

The design must remain extensible to multi-package fulfillment even if the first implementation uses one default physical package per Packing Job.
