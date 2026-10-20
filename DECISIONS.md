# LandLens decisions

## 1. Units in field names
- **Decision:** Use `areaSqm` and `valuationAud` instead of `area` and `valuation`.
- **Why:** The unit is unambiguous to anyone reading the contract, and field names are hard to change once a frontend depends on them.
- **Date:** Day 1