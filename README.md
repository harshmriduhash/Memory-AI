# Memory AI MVP

A minimal browser-based memory AI that captures browsing, chats, and tasks, and lets users ask recall questions like “What did I read yesterday about vector DBs?”

## Features
- Passive memory (browser extension + cloud)
- Semantic search (OpenAI + LangChain)
- Timeline view
- Ask-anything UI
- Export insights

## Getting Started

### Web App (Next.js)
- `cd web`
- `npm install`
- `npm run dev` (or deploy to Vercel)

### Browser Extension
- `cd extension`
- Load as unpacked extension in Chrome/Firefox
- Captures pages you visit and stores locally

### API/DB
- Uses SQLite (local-first) and OpenAI embeddings
- tRPC endpoints for capture, query, timeline, export

## Deploy
- Deploy the `web` app to Vercel for instant cloud sync

---

Minimal, aesthetic, and privacy-first. Replace icons as needed.
