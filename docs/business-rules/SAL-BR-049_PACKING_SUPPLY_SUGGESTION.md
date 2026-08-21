# SAL-BR-049 — Packing Supply Suggestion

## Feature Origin

IMS FHS v2 Packing workflow decision — operator-assisted packing recommendation.

## Rules

1. When an Order enters PACKING, IMS may evaluate approved Packing Template Rules against the current Order composition.
2. The engine returns zero or more Suggested Supply lines.
3. Each Suggested Supply line records:
   - Supply reference;
   - suggested quantity;
   - Template ID/version;
   - Rule ID/version or equivalent provenance;
   - human-readable reason;
   - evaluation timestamp.
4. Multiple rules that produce the same Supply may be aggregated into one operator-facing quantity while retaining source-rule provenance.
5. Suggestion evaluation must be deterministic for the same Order snapshot and active Template/Rule versions.
6. Suggestion generation must not reserve, consume, or decrement Packing Supply Inventory.
7. The engine may warn when a suggested tracked Supply is unavailable, but recommendation failure alone must not prevent manual packing.
8. Re-evaluation after Order composition changes must produce a new suggestion snapshot rather than destructively rewriting historical suggestion evidence.
9. Suggestion output must distinguish between system recommendation and operator-confirmed Actual Usage.
10. Operator remains the final authority for Actual Supply Usage.

## Invariants

- Suggestions are advisory.
- No suggestion may silently become Actual Supply Usage.
- Suggestion provenance must be auditable.
- No-template/no-match is a valid result.
