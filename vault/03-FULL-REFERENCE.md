# UnclaimedProperty AI — PRD & Architecture

## PRD — Feature Matrix
### ✅ Built
- Landing Page & Multi-State Scanner UI
- $29 Stripe Checkout
- Unlock Packet RAG Generator

### ⬜ Planned
- Real-time API integration with 50 State Treasury databases
- Automated ID verification (Stripe Identity)
- Notarize.com API integration for remote notarization
- Background "Monitoring" service (alert if new property appears)

## Architecture
- **Stack:** React, Next.js, Stripe, Claude 3.5 (Form Mapping)
- **Flow:** User Name/State Search → Parallel Scrape → Match Found ($) → $29 Payment → AI maps user data to State PDF → Instruction Guide generated.

## Legal Framework
- **Uniform Unclaimed Property Act (UUPA)**: The legal basis for all 50 state programs.
- **Finder Fee Caps**: Most states limit finder fees to 10-15%; our flat $29 fee is well below all legal caps, ensuring 100% compliance.

## Implementation Log
- Core files built 2026-04-26. UI simulates the parallel search across all 50 states.

## Roadmap
- **Phase 1 ✅:** MVP
- **Phase 2:** Real State Treasury API integrations (UCP Data / NAUPA)
- **Phase 3:** Automated monitoring & alerts
- **Phase 4:** International expansion (Canada/UK/Australia)

## Changelog
- 2026-04-26: Project initialized; Phase 5 "Found Money" implementation.
