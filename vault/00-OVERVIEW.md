# UnclaimedProperty AI — Project Overview

> **One-Line Pitch:** AI that parallel-scrapes all 50 state treasuries to find and unlock "forgotten" money for users, generating the required legal claim packets for a small flat fee.

## Quick Reference
| Field | Value |
|-------|-------|
| **Status** | ✅ MVP Built |
| **Repo** | `e:\hermes\github_fleet\unclaimedproperty-ai` |
| **Price** | $29 flat fee |
| **Target MRR** | $29,000 (1,000 users/mo) |
| **Last Updated** | 2026-04-26 |

## Key Files
- `frontend/PropertyScanner.tsx` — 50-state parallel treasury scraper UI
- `api/stripe_fee.ts` — $29 Stripe Checkout API
- `api/generate_packet.ts` — RAG-based PDF form mapping engine for escheatment recovery
- `.sovereign_memory.md` — Architectural log
