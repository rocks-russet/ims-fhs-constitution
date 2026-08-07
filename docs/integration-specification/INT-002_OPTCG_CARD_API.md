# INT-002 — OPTCG Card API Integration

## Purpose
Provide structured One Piece Card Game catalog data for IMS FHS Card DB discovery and refresh.

## Usage
- discover new sets/cards
- obtain structured card metadata when available
- support scheduled Card DB refresh
- assist validation against official card identity

## Adapter Output
Normalize provider fields into the IMS FHS Card Definition model:
- external source ID
- card number
- card name
- set
- rarity
- color
- type
- counter
- language/market when supplied
- image/reference metadata
- fetchedAt
- source version/reference when available

## Refresh Flow
Scheduler → Card Database Refresh Job → OPTCG Adapter → validate → stage delta → compare with current Card DB → publish valid changes → `CardDatabaseUpdated`.

## Failure Behavior
- Provider timeout/error does not delete current Card DB.
- Retry uses configured backoff and provider rate budget.
- Repeated failure becomes visible in integration health.
- No partially validated Card DB update is published.

## Rate Limits
Exact provider limits are configuration/operations data, not hard-coded Business Rules. The adapter must enforce the currently configured safe provider budget.
