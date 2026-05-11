"use client";

import { useCallback, useRef, useState } from "react";

type Role = "user" | "assistant";

export type ChatMessage = {
  id: string;
  role: Role;
  content: string;
};

/**
 * Chat UI: posts to same-origin `/api/chat` (Next Route Handler proxies to FastAPI).
 * Styling follows Miami Art Deco pastel palette (frontend rules).
 */
export function ChatPanel() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
    });
  }, []);

  const send = async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
    };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setError(null);
    setLoading(true);
    scrollToBottom();

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });

      const raw = await res.text();
      let replyText = "";
      if (!res.ok) {
        try {
          const errJson = JSON.parse(raw) as { detail?: string };
          replyText = errJson.detail ?? raw;
        } catch {
          replyText = raw || `Request failed (${res.status})`;
        }
        setError(replyText);
        setMessages((m) => [
          ...m,
          {
            id: crypto.randomUUID(),
            role: "assistant",
            content: `Something went wrong: ${replyText}`,
          },
        ]);
        return;
      }

      const data = JSON.parse(raw) as { reply?: string };
      replyText = data.reply ?? "No reply in response.";
      setMessages((m) => [
        ...m,
        { id: crypto.randomUUID(), role: "assistant", content: replyText },
      ]);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Network error";
      setError(msg);
      setMessages((m) => [
        ...m,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: `Could not reach the server: ${msg}`,
        },
      ]);
    } finally {
      setLoading(false);
      scrollToBottom();
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-4">
      <div
        ref={listRef}
        className="flex max-h-[min(70vh,560px)] min-h-[280px] flex-col gap-3 overflow-y-auto rounded-2xl border border-brass/30 bg-sand/80 p-4 shadow-deco"
        aria-live="polite"
      >
        {messages.length === 0 && (
          <p className="text-center text-graphite">
            Say hello — your coach is here to listen. Messages go to{" "}
            <code className="rounded bg-cream px-1 py-0.5 text-sm text-deco">POST /api/chat</code>.
          </p>
        )}
        {messages.map((m) => (
          <article
            key={m.id}
            className={
              m.role === "user"
                ? "ml-8 rounded-2xl rounded-tr-sm bg-flamingo/90 px-4 py-3 text-cream shadow-deco"
                : "mr-8 rounded-2xl rounded-tl-sm border-l-4 border-seafoam bg-cream px-4 py-3 text-deco shadow-sm"
            }
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-graphite/90">
              {m.role === "user" ? "You" : "Coach"}
            </p>
            <p className="mt-1 whitespace-pre-wrap leading-relaxed">{m.content}</p>
          </article>
        ))}
        {loading && (
          <p className="text-center text-sm text-graphite" aria-busy="true">
            Coach is thinking…
          </p>
        )}
      </div>

      {error && (
        <div
          className="rounded-xl border border-flamingo/40 bg-sunwash/40 px-4 py-3 text-sm text-deco"
          role="alert"
        >
          {error}
        </div>
      )}

      <div className="flex flex-col gap-2 sm:flex-row sm:items-end">
        <label className="sr-only" htmlFor="chat-input">
          Your message
        </label>
        <textarea
          id="chat-input"
          rows={3}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              void send();
            }
          }}
          placeholder="What would you like to talk about?"
          className="min-h-[3.5rem] flex-1 resize-y rounded-2xl border border-brass/25 bg-sand px-4 py-3 text-deco placeholder:text-graphite/70"
          disabled={loading}
        />
        <button
          type="button"
          onClick={() => void send()}
          disabled={loading || !input.trim()}
          className="rounded-2xl bg-flamingo px-6 py-3 font-display font-semibold uppercase tracking-wide text-cream shadow-deco transition hover:bg-coral disabled:cursor-not-allowed disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
}
