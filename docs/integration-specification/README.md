# IMS FHS External Integration Specification v1

Reading order:
1. INT-001 Integration Principles
2. INT-002 OPTCG Card API
3. INT-003 Bandai Official Card Source
4. INT-004 PriceCharting EN
5. INT-005 Yuyutei JP
6. INT-006 Provider Adapter & Normalization
7. INT-007 Rate / Retry / Cache / Freshness
8. INT-008 Security & Observability

Boundary:
- Internal browser/backend API is specified under `docs/api-specification`.
- External provider mechanics live here.
- Purchase, Sales, Inventory, and Portfolio consume normalized IMS FHS services rather than provider-specific responses.

Exact external rate limits/endpoints/selectors are implementation/configuration details and must be verified when integration code is built.
