# ADR-004 — Portfolio as Derived Engine

## Decision
Inventory owns assets; Portfolio owns derived positions, average cost, market valuation, and unrealized gain/loss.

## Rationale
Avoid mixing transactional inventory state with read-heavy valuation logic.

## Consequence
Portfolio can refresh asynchronously after Inventory/Market events.
