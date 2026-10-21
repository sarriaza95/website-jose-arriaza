# José Arriaza — Portfolio

An English-language, responsive portfolio with seven project case studies, category filters, accessible native dialogs, contact links and a downloadable résumé.

## Preview

Serve `dist` with any static HTTP server. No build or dependency installation is required.

## Verify

Run `node --check dist/app.js` and `node verify.cjs`.

## Deploy to Vercel

Import `sarriaza95/website-jose-arriaza` in Vercel, keep the repository root as the Root Directory, and use the Other framework preset. The committed `vercel.json` runs verification and serves `dist`. No environment variables or dependency installation are needed.

Production branch: `main`.

## Content

Edit project case studies in `dist/app.js`, page content in `dist/index.html`, and styling in `dist/styles.css`. The Glasswing screenshots were supplied by the portfolio owner. Opticare uses an illustrative interface with fictional customer records; no original customer screenshot is included. Other project artwork is illustrative, not a screenshot of the live site. The Lonely Planet case describes an engineering team contribution, and Ingemann describes an internal system rather than authorship of its corporate website.

Contact links lead directly to email, telephone, LinkedIn and GitHub. There is no form backend or analytics integration.
