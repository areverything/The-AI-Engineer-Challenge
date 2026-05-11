# Mental Coach — Next.js frontend

This is the **Next.js 15** (App Router) UI for the challenge app. It talks to your **FastAPI** service through a **same-origin** proxy:

- The browser calls **`POST /api/chat`** on the Next server.
- A **Route Handler** at `app/api/chat/route.ts` forwards the request to the Python backend (`POST {BACKEND_URL}/api/chat`).

That pattern matches how teams often deploy on **Vercel**: the Next app is public, and the server-side route handler calls a separate API URL using an environment variable (see [Environment Variables](https://vercel.com/docs/environment-variables) and [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)).

## Prerequisites

- **Node.js 20+** (LTS recommended)
- **npm** (ships with Node)
- FastAPI running locally when you develop (from repo root):

```bash
uv sync
export OPENAI_API_KEY=sk-your-key-here
uv run uvicorn api.index:app --reload
```

## Run locally

From this `frontend/` directory:

```bash
npm install
cp .env.example .env.local   # optional; defaults to http://127.0.0.1:8000
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Ensure the API is on port **8000**, or set `BACKEND_URL` in `.env.local` to match.

## Production on Vercel

1. Create a Vercel project with **Root Directory** set to **`frontend`** (or deploy only this folder).
2. In the Vercel project **Settings → Environment Variables**, add **`BACKEND_URL`** with the **public base URL** of your deployed FastAPI app (no trailing slash), for example `https://your-api.vercel.app`.
3. Deploy. The UI will proxy chat requests to that backend.

If you instead deploy **only** the Python app from the repository root, this Next.js app is not served until you add a separate frontend project or a multi-app monorepo setup (see [Vercel Monorepos](https://vercel.com/docs/monorepos)).

## Scripts

| Command        | Description                |
| -------------- | -------------------------- |
| `npm run dev`  | Next dev server (Turbopack) |
| `npm run build`| Production build           |
| `npm run start`| Start production server    |
| `npm run lint` | ESLint                     |

## Stack notes

- **App Router** and **Route Handlers**: [Next.js App Router](https://nextjs.org/docs/app)
- **Fonts**: `next/font` with Poppins + Inter ([Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts))
- **Styling**: Tailwind CSS with the Miami Art Deco palette from workspace frontend rules
