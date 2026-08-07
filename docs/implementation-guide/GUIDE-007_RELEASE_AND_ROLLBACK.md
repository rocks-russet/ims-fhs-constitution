# GUIDE-007 — Release & Rollback Guide

## Before Production Release
- migration tested
- backup completed and verified
- integrity audits clean
- critical automated tests pass
- secrets/config reviewed
- health endpoints ready
- rollback/forward-fix plan known

## Deployment
Prefer backward-compatible steps when possible:
1. additive schema
2. deploy compatible code
3. backfill
4. switch behaviour
5. remove deprecated schema later

## Rollback
Rollback application version only when database compatibility allows it.
Never rollback by deleting production transaction history.

## Go-Live
Before initial IMS FHS production:
- safely clear/reset remaining test data as approved
- restore affected test inventory to correct state
- run cross-domain integrity audit
- make final verified backup
