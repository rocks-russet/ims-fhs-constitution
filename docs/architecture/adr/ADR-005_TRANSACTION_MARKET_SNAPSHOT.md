# ADR-005 — Transaction Market Snapshot vs Current Market

## Decision
Store market snapshot at Purchase/Sale separately from current market observation.

## Rationale
Seller/Buyer price-behaviour analytics must compare against market at transaction time, while portfolio valuation uses current market.

## Consequence
Historical analytics are reproducible and not distorted by future market moves.
