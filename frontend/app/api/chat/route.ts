import { NextResponse } from "next/server";

/**
 * Proxies POST /api/chat to the FastAPI backend so the browser can call same-origin /api/chat.
 * Set BACKEND_URL in production (Vercel env) to your Python API base URL (no trailing slash).
 *
 * @see https://nextjs.org/docs/app/building-your-application/routing/route-handlers
 * @see https://vercel.com/docs/environment-variables
 */
const DEFAULT_BACKEND = "http://127.0.0.1:8000";

export async function POST(request: Request) {
  const backend = process.env.BACKEND_URL ?? DEFAULT_BACKEND;
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ detail: "Invalid JSON body" }, { status: 400 });
  }

  const upstream = await fetch(`${backend}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const text = await upstream.text();
  const contentType = upstream.headers.get("content-type") ?? "application/json";

  return new NextResponse(text, {
    status: upstream.status,
    headers: { "content-type": contentType },
  });
}
