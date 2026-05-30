# KEYS — Africa's Designated Driver Network

A Bolt partnership pitch deck. Built as a Vite + React SPA with 13 slides, keyboard navigation, overview mode, and print-to-PDF export.

> **STRICTLY CONFIDENTIAL — FOR BOLT REVIEW ONLY**

---

## What's in this repo

```
keys/
├── data.json          # Single source of truth for all pitch content
├── pitch-deck.html    # Self-contained HTML presentation (no server needed)
├── landing.html       # Consumer marketing one-pager
└── app/               # React SPA (Vite)
    └── src/
        ├── data/pitch.js          # Re-exports data.json
        ├── slides/                # One component per slide (13 total)
        ├── components/            # SlideWrapper, OverviewMode, HelpOverlay, etc.
        ├── hooks/usePresentation.js
        └── styles/
            ├── index.css          # Layout, animations, overlays
            └── slides.css         # Per-slide layouts + responsive breakpoints
```

---

## Running the app

```bash
cd keys/app
bun install
bun run dev      # http://localhost:5173
bun run build    # outputs to keys/app/dist/
```

Requires [Bun](https://bun.sh). Node 18+ also works with `npm install && npm run dev`.

---

## Keyboard shortcuts

| Key | Action |
|-----|--------|
| `→` / `↓` / `Space` | Next slide |
| `←` / `↑` | Previous slide |
| `Home` | First slide |
| `End` | Last slide |
| `G` / `Tab` | Overview grid |
| `?` | Keyboard help |
| `Esc` | Close overlay |

Click the left or right half of the screen to navigate. Touch swipe supported.

---

## Print / PDF export

Press `Cmd+P` (macOS) or `Ctrl+P` (Windows/Linux). All 13 slides render as full-page print pages. For best results: landscape orientation, no margins, background graphics on.

---

## Adding or editing a slide

1. Add a new entry to `keys/data.json` with `id`, `numeral` (Roman), and `section` fields
2. Create `keys/app/src/slides/YourSlide.jsx` — receives `data` prop (the JSON entry)
3. Add `YourSlide` to the `SLIDE_COMPONENTS` array in `keys/app/src/App.jsx`

Numerals and section labels are data-driven — no component edits needed when renumbering.

---

## Pitch structure (V1.1 — 13 slides)

| # | Slide | Key content |
|---|-------|-------------|
| I | Cover | Tagline + partner positioning |
| II | The Problem | Africa road stats + status quo cost (₦16k–30k workaround) |
| III | Validation | Day-1 customer (Tina) + 3 compound observations |
| IV | The Validated Model | Didi Daijia — 10 years in China |
| V | The Graveyard | Why Western attempts failed |
| VI | The Wedge | 4 structural reasons Africa works |
| VII | The Product | 5-step flow + 3 operational layers |
| VIII | The Moat | 3-layer flywheel: Identity Graph → Venue Distribution → Liability |
| IX | Why Bolt | Stats + strategic fit + "Why Bolt won't build this internally" |
| X | Unit Economics | Lagos baseline — 1.6× Bolt fare anchor |
| XI | Go-to-Market | Lagos → JoBurg → Nairobi → Gulf (24 months) |
| XII | Team | Founder + 3 key hires |
| XIII | The Ask | 90 days, one city, one signed pilot |

---

## Design tokens

| Token | Value | Used for |
|-------|-------|---------|
| `--bg` | `#080808` | Page background |
| `--surface` | `#111110` | Card backgrounds |
| `--gold` | `#c9a84c` | Primary accent, numerals, labels |
| `--text` | `#ede8dc` | Body copy |
| `--muted` | `#68665e` | Secondary labels |
| `--danger` | `#d14535` | Problem items, inversion callouts |
| `--green` | `#4a9b6a` | Solution items, positive notes |

Fonts: Playfair Display (headings), Space Grotesk (labels/UI), Inter (body).

---

## Branch

Active development: `claude/clone-gstack-repo-EqBMF`
