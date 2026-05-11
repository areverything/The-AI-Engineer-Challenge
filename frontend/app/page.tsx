import { ChatPanel } from "@/components/ChatPanel";

/**
 * Home: mental coach chat wired to FastAPI via Next Route Handler proxy.
 */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 pb-16 pt-10 sm:pt-16">
      <header className="mb-10 max-w-2xl text-center">
        <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-flamingo">
          Beyond ChatGPT
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold uppercase text-deco sm:text-4xl">
          Mental Coach
        </h1>
        <p className="mt-3 text-graphite">
          A warm, supportive space. Responses come from your FastAPI service at{" "}
          <code className="rounded bg-sand px-1.5 py-0.5 text-sm text-deco">/api/chat</code>.
        </p>
      </header>

      <ChatPanel />

      <footer className="mt-12 max-w-xl text-center text-xs text-graphite">
        Run the API with{" "}
        <code className="rounded bg-sand px-1 text-deco">uv run uvicorn api.index:app --reload</code>{" "}
        from the repo root, then{" "}
        <code className="rounded bg-sand px-1 text-deco">npm run dev</code> here. See{" "}
        <span className="font-medium text-deco">frontend/README.md</span> for Vercel notes.
      </footer>
    </main>
  );
}
