# API-008 — Market API

The Market API is IMS FHS internal API. External provider implementation is hidden behind Market Engine adapters.

## GET `/api/v1/market/cards/{cardKey}`
Returns current valid observation based on language/provider policy.

## GET `/api/v1/market/cards/{cardKey}/history`
Historical observations.

## POST `/api/v1/market/cards/{cardKey}/refresh`
Authorized/manual refresh request.
May queue background job rather than blocking until scraper/provider finishes.

## GET `/api/v1/market/status`
Returns freshness/health summary:
- PriceCharting
- Yuyutei
- Card DB / OPTCG source

## Internal Worker Endpoints
Ordinary browser clients must not directly call provider credentials or scraper internals.

Market responses include:
- provider
- language/market
- value
- observedAt
- freshness/stale status

Current Market Observation is never presented as historical Purchase/Sale snapshot.
