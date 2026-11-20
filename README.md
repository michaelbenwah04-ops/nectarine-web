# Nectarine Web

Companion marketing site and mobile pharmacy discount card viewer for the **Nectarine — Pet Prescription Savings** Chrome extension.

## Pages

- `/` — Pet-first landing page with savings calculator demo
- `/card` — Stateless mobile discount card (extension QR destination)
- `/privacy` — Privacy policy for Chrome Web Store / affiliate review

## Stack

- Next.js App Router + TypeScript + Tailwind CSS
- Lucide React
- Zero-config Vercel deployment

## Sync with extension

Drug data is copied from `../pillpal/src/data/drugs.json` (pet-first schema with `species` + `commonUse`). Re-copy after extension dataset updates:

```bash
cp ../pillpal/src/data/drugs.json src/data/drugs.json
```

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy on Vercel

1. Import this repo in the Vercel dashboard (or run `vercel`)
2. Framework preset: **Next.js** (auto-detected)
3. Point production domain to **getnectarine.com**
4. No environment variables required for the marketing site / card viewer

Production card URLs match the extension format:

`https://getnectarine.com/card?drug=Gabapentin&pharmacy=Walmart+Pharmacy&price=12.48&bin=610020&pcn=PDMI&grp=NT01234&id=482910375&dosage=100+mg&qty=30`
