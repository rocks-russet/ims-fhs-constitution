# GUIDE-008 — Observability & Operations Guide

Monitor:
- web latency/error rate
- database health
- background queue depth
- failed/dead-letter jobs
- scheduler last-success time
- PriceCharting/Yuyutei freshness
- Card DB refresh freshness
- backup status
- storage availability
- authentication abuse signals
- integrity audit findings

Every background job should expose:
- job ID
- status
- attempts
- last error
- timestamps
- source/reference

A failed optional notification must not make a successful Purchase/Sales/Finance transaction appear failed.
