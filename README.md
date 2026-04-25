# Mukesh's Health & Diet Project

A complete fitness, nutrition, and ancestral-diet research project. Built iteratively over multiple conversations.

## Project structure

```
/
├── index.html                  Multilingual diet research (en/hi/te) — landing page
├── english.html                English-only original (source-of-truth for translations)
├── chapters/                   Per-chapter JS files loaded by index.html
│   ├── timeline.js
│   ├── foods.js
│   ├── protein.js
│   ├── navadhanya.js
│   ├── principles.js
│   ├── herbs.js
│   ├── meals.js
│   ├── modern.js
│   └── sources.js
├── 404.html                    Themed not-found page
└── README.md
```

**URLs (when deployed):** `/` (multilang diet), `/english.html` (English-only reference).

**Deployment:** Self-contained static site. Drop the folder into GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any static host — no build step. All HTML files also work directly via `file://` (open `index.html` in a browser).

---

## ✅ Multilang Status (COMPLETE)

**Status:** All 11 chapters in English/Hindi/Telugu. Working language switcher.

**Languages:**
- **English** — original, complete
- **Hindi (हिन्दी)** — all 11 chapters complete
- **Telugu (తెలుగు)** — all 11 chapters complete

**How the multilang file works:**
- Top-of-page language switcher (en/hi/te buttons)
- Each section has 3 `<div class="lang-content" data-lang="...">` blocks
- Active language shows via `.active` class
- Choice persists via `localStorage` (key: `al-lang`)
- Nav buttons translate via `data-en`, `data-hi`, `data-te` attributes
- Special CSS rules for Hindi/Telugu fonts (Noto Serif Devanagari/Telugu) and removing `font-style:italic`

**Multi-file architecture:**
- `index.html` is a shell with: CSS, language switcher, nav, **intro + grains inline**, and empty placeholder `<div class="sec" id="...">` for the other 9 chapters.
- Each remaining chapter lives in `chapters/<id>.js` and contains:
  ```js
  document.getElementById('<id>').innerHTML = `
    <div class="lang-content active" data-lang="en">...</div>
    <div class="lang-content" data-lang="hi">...</div>
    <div class="lang-content" data-lang="te">...</div>
  `;
  ```
- The shell loads chapters via `<script src="chapters/...js">` tags **before** the language-switcher script, so the language switcher (and any restored `localStorage` preference) sees the populated DOM.
- Works on `file://` URLs — no HTTP server required.

**Editing tips:**
- To edit a chapter, open just `chapters/<id>.js` — no need to load the giant index.html into context.
- To add a new chapter: (1) add an empty `<div class="sec" id="newid">` placeholder + a nav button in `index.html`, (2) create `chapters/newid.js`, (3) add a `<script src>` tag to `index.html`.
- If a chapter file has a JS syntax error (e.g. unescaped backticks in content), the whole chapter silently fails to render. Run `node --check chapters/file.js` to validate.

**Translation guidelines (apply to future edits):**
- **Sanskrit terms remain in original** across all languages (Mastu, Nava Dhanya, Charaka Samhita, etc.)
- **Brand names stay in English** (Akshayakalpa, Pintola, ON Whey)
- **Modern scientific terms** — use English where appropriate, transliterate where common (DIAAS → DIAAS, but "amino acid" → अमीनो एसिड in Hindi)
- **Tone in Hindi:** formal but approachable, like a quality magazine article
- **Tone in Telugu:** standard literary Telugu (avoid heavy regional dialects)
- **Citations stay in English** in `sources.js` — academic paper titles don't translate. Only the section headings and intro/closing line are translated.
- **Maintain all `<sup>[1]</sup>` citation markers** unchanged across languages
- **Keep all numerical data and stats** unchanged (e.g., "5×", "1960s")

**Quality caveats:**
- Hindi quality: solid, native-feeling
- Telugu quality: technically correct but a native Telugu speaker should review for natural phrasing in long technical passages — especially in `modern.js` and `navadhanya.js` where the source is dense and technical
- Sanskrit content stays in original Devanagari throughout

---

## User Context

**Mukesh** — 26M, 5'3" (160cm), based in Gachibowli, Hyderabad.
Vegetarian. IT/founder.

**Body composition (latest, mid-Apr 2026):**
- Weight: 79.9-80.6 kg (oscillating)
- Body fat: 28.9-29.0%
- Lean mass: 56.8-57.3 kg
- Visceral fat index: 12 (high)
- BMR: 1824
- FFMI: 22.4 (above average muscle)

**Targets:**
- Standard weight: 67.4 kg
- Goal body fat: 15-17%
- Timeline: ~8-10 months to standard weight

---

## Diet Plan Summary

**Daily targets:** 1715 kcal · 125g protein · 190g carbs · 44g fat · 29g fiber
**Daily deficit:** ~635 kcal/day → ~2.3 kg fat loss/month

### Fixed daily meals
1. **Breakfast (8 AM):** SID Farms HP Milk 250ml + Pintola HP muesli 50g + chia 10g + mango yogurt 100g
2. **Mid-morning (11 AM):** 20g walnuts + 1 guava
3. **ON Whey shake:** Post-workout (gym days) or after walk (rest days). 1 scoop + 200ml water
4. **Bedtime (10:30 PM):** Isabgol 1 tsp in warm water

### Key chef rules
- **Paneer brand:** Always Akshayakalpa Organic HP (28g P, 11g F per 100g)
- **Rice:** 150g cooked white rice per lunch
- **Oil:** Max 5g (1 tsp) unless recipe says 10g
- **Soya prep:** Boil 5-7 min → squeeze firmly → marinate → air fry
- **Air fryer:** Paneer 200°C/10min, Soya 180°C/12min

---

## Exercise Plan

### Current routine
- **Walk:** 8 km daily (90 min, ~400 kcal burn)
- **Workout days (Mon/Wed/Fri):** 10 kg dumbbells 3×5-6 → progressing to 3×10
- **Squats:** Bodyweight 3×15 → progressing to goblet squat with 5kg DB
- **Planks:** 60/55/50 sec — daily 6 days, rest Sunday

### Progression path
- Week 1-3: Build to 10kg × 3×10
- Week 4: Increase to 12kg
- At 75 kg bodyweight: switch to push/pull/legs hard mode + add HIIT
- At 75 kg: add creatine 3-5g/day

### Sleep notes
- Has racing-mind/founder-brain insomnia in Gachibowli (sleeps fine at parents' home)
- Fix: laptop out of bedroom by 10 PM, brain dump notebook before bed
- Has Fast&Up melatonin tablets (use sparingly — 3-5 days max to reset rhythm)

---

## Supplements

| Supplement | Dose | Timing |
|---|---|---|
| ON Gold Standard Whey | 1 scoop + 200ml water | Post-workout / after walk |
| Methylcobalamin B12 | 1000 µg | With breakfast |
| Vitamin D3 | 1000-2000 IU | With breakfast (with milk) |
| Algal Omega-3 (DHA+EPA) | 250 mg | With dinner |
| Magnesium Glycinate | 200 mg | Before bed |
| Zinc Picolinate (optional) | 10 mg | With lunch |

**Considering but holding off:** KSM-66 Ashwagandha (only if sleep doesn't fix environmentally), Creatine (start at 75 kg)
**Avoiding:** Kapiva proprietary blends, bhasmas, Mucuna-containing products

---

## Monthly Budget

| Category | Cost |
|---|---|
| Groceries (vegetarian + dairy) | ₹13,000 - ₹15,000 |
| Supplements (incl. whey ₹3,535) | ₹4,500 - ₹5,500 |
| Chef payment | ₹6,000 - ₹7,000 |
| **Total** | **~₹23,500 - ₹27,500** |

---

## Critical Insights From Conversation

### Math/data corrections made
- **Original meal plan had 0g fat on all paneer dinners** — corrected. 100g paneer = 21-22g fat regardless of cooking method
- **Akshayakalpa HP paneer is 28g P, 11g F per 100g** — vs regular paneer's 20g P, 21g F. Major upgrade.
- **Bioimpedance "lean mass" includes water** — drops during cuts are mostly water, not muscle. Verify with subcutaneous fat trend.
- **Percentage tracking is misleading** during weight changes — always multiply % × total weight to get absolute amounts

### Strategy decisions
- **Don't cut calories below 1500** during deficit — increase exercise instead at 75 kg
- **Whey at home only** — never pre-mix and store, makes fresh each time
- **Skip evening snack on rest days** if not hungry
- **Weight on travel days** — eat lighter, ignore scale fluctuations

---

## File Modification Notes for Claude Code

### `index.html` (multilingual shell — landing page)
- Same structure as the English-only file PLUS language switcher
- Intro + Grains are inline; chapters 3-11 are placeholder divs filled by `chapters/*.js` at load
- Each populated section contains 3 `<div class="lang-content" data-lang="en|hi|te">` blocks
- Active language controlled by `.active` class on lang-content divs
- `body[data-lang="hi|te"]` selectors handle font-family swaps and italic→normal style overrides
- localStorage persistence (`al-lang` key)

### `english.html` (English-only reference)
- Self-contained (CSS + JS inline)
- 11 sections, each `<div class="sec" id="...">`
- Use this as the source content when polishing the multilang version

### `chapters/*.js` (chapter content)
- One file per chapter: `timeline`, `foods`, `protein`, `navadhanya`, `principles`, `herbs`, `meals`, `modern`, `sources`
- Each file is a single `document.getElementById(id).innerHTML = \`...\`;` assignment
- Validate with `node --check chapters/<file>.js` after edits — a syntax error silently breaks the chapter
- `sources.js` uses helper template literals (`SOURCES_PRIMARY`, etc.) since the citation lists are reused across all 3 language blocks

### `404.html`
- Themed not-found page used by static hosts (GitHub Pages, Netlify) when a route is missing
- Links back to `/`

---

## Deployment

### GitHub Pages

The repo ships ready-to-deploy:

- `.nojekyll` (empty file) tells GitHub Pages to skip Jekyll processing and serve files as-is. Important — without this, Jekyll would ignore folders/files starting with `_` and could mangle the site.
- `404.html` includes a small JS shim that resolves the correct site root for both project pages (`username.github.io/repo-name/`) and user/org pages or custom domains.
- All asset paths are relative (`chapters/timeline.js`, not `/chapters/timeline.js`), so the site works regardless of subpath depth.

**Steps:**

1. Push the repo to GitHub.
2. Repository → Settings → Pages.
3. Source: **Deploy from a branch**. Branch: `main` (or `master`), folder: `/ (root)`. Save.
4. Wait ~1 minute. The site is live at `https://<username>.github.io/<repo-name>/`.

**Custom domain:** add a `CNAME` file at root containing your domain (e.g. `diet.mukesh.com`) and configure DNS per GitHub's docs.

### Other static hosts

- **Netlify / Vercel / Cloudflare Pages:** point at the repo, no build command, no publish directory override (deploy from root). Done.
- **Local preview:** any static server works. Quickest options: `python -m http.server 8000` from the project root, or just double-click `index.html` (works on `file://` too — chapter scripts use relative paths).

---

## Recommended Next Steps in Claude Code

1. **Open `index.html` in a browser** to verify the landing page and that all four cards link to working pages.
2. **Open `ancient-diet/index.html`** to verify the language switcher and that all 11 chapters render in all 3 languages.
3. **For polish passes on translations:** edit individual `ancient-diet/chapters/<id>.js` files. Don't try to load the giant multilang file into context.
4. **Native Telugu review:** the Telugu in `modern.js`, `navadhanya.js`, and `protein.js` is the most technical — best candidates for a native-speaker pass for natural phrasing.
5. **If adding a new content page:** create `new-section/index.html` and add a card to the root `index.html`.

---

*All HTML files are self-contained and can be opened directly in any browser. No build step required.*
