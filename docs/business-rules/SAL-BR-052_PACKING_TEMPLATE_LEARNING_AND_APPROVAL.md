# SAL-BR-052 — Packing Template Learning and Approval

## Feature Origin

IMS FHS v2 Packing workflow decision — learn from operator packing history without autonomous production rule mutation.

## Rules

1. IMS may analyze historical Suggested Supplies, operator overrides, and finalized Actual Supply Usage to identify recurring packing patterns.
2. A discovered pattern is created only as a Template Candidate/DRAFT.
3. Template Candidate evidence may include:
   - matching Order composition;
   - sample count;
   - observed Actual Supply combination;
   - quantity relationship;
   - override frequency;
   - confidence/coverage metrics.
4. A learned candidate MUST NOT automatically become ACTIVE.
5. Promotion to ACTIVE requires an authorized human approval/governance action.
6. Approval creates or activates a versioned Packing Template/Rule set.
7. Rejection leaves historical evidence intact and prevents that candidate version from becoming ACTIVE.
8. Operator may continue manual packing regardless of candidate availability.
9. Learning must use finalized Actual Usage as the strongest behavioral signal; raw suggestions alone must not be treated as proof of correct packing.
10. The learning subsystem may recommend refinements to an existing Template but must create a new candidate/version rather than mutating an ACTIVE rule in place.

## Invariants

- No autonomous self-modifying production rule.
- Human governance is required before learned behavior affects future canonical suggestions.
- Candidate evidence and approval history are auditable.
