# Koji Insight — Pitch Web App

Static site for Koji Bakery Discovery Phase pitch presentation.

## Pages
- `index.html` — Data context + setup
- `analytics.html` — 5 Discoveries (macro, UV/conversion, 2 production systems, kj091 case, data flow)
- `forecasting.html` — Methodology, counterfactual, sensitivity, 3 products, data issues, critical questions

## Stack
Vanilla HTML / CSS / JavaScript + Chart.js (CDN). No build step.

## Local dev
```bash
python -m http.server 5400
# → http://localhost:5400
```

## Deploy (Vercel)
Drop the repo root into Vercel — auto-detected as static site.
