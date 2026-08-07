# INF-013 — Performance & Scaling

## User-Facing Targets
- common navigation/read: ~<1–2 seconds where practical
- search/filter: <2 seconds target
- normal mutation: <3 seconds where practical
- complex commit: <5 seconds target

## Techniques
- optimized SQL/indexes
- server pagination/filter/sort
- derived Portfolio/Analytics read models
- background workers
- cache hot data
- avoid synchronous external-provider calls in normal UI path
- connection pooling
- payload size control

## Scaling Order
1. fix query/index issues
2. remove unnecessary synchronous work
3. add/read-model caching
4. scale Web/Worker instances
5. add Redis/queue where justified
6. revisit architecture only after measurement

Do not introduce distributed complexity without evidence.
