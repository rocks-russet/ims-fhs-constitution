# GUIDE-003 — Performance & Responsiveness Guide

## Objectives
- Common reads/navigation: target roughly <1–2 seconds under expected load.
- Search/filter: target <2 seconds.
- Normal mutation: target <3 seconds where practical.
- Complex critical commit: target <5 seconds where practical.

## Practices
- PostgreSQL indexes for actual query patterns.
- Server-side pagination/filter/sort.
- Avoid loading entire Inventory into browser.
- Precompute/cache expensive portfolio and analytics summaries.
- Move notification, analytics refresh, portfolio refresh, thumbnails, routine scraping, and similar non-critical work to background jobs.
- Redis may be introduced for cache/session/rate-limit/queue acceleration but is never business truth.
- Measure production latency rather than relying on assumptions.
