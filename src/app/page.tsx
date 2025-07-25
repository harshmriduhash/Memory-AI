"use client";
import { useState } from "react";

type TimelineEvent = { text: string; [key: string]: unknown };

export default function Home() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [timeline, setTimeline] = useState<TimelineEvent[]>([]);
  const [exported, setExported] = useState<string | null>(null);

  // TODO: Wire up tRPC calls
  const askAnything = async () => {
    setAnswer(`Stub: You asked '${query}'`);
  };
  const fetchTimeline = async () => {
    setTimeline([]);
  };
  const exportInsights = async () => {
    setExported("Stub: Exported data");
  };

  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Ask Anything</h2>
        <div className="flex gap-2">
          <input
            className="flex-1 px-3 py-2 rounded bg-neutral-900 border border-neutral-800 focus:outline-none"
            placeholder="What did I read yesterday about vector DBs?"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button
            className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-medium"
            onClick={askAnything}
          >
            Ask
          </button>
        </div>
        {answer && (
          <div className="mt-2 p-3 bg-neutral-900 rounded border border-neutral-800">
            {answer}
          </div>
        )}
      </section>
      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Timeline</h2>
        <button
          className="px-3 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-sm"
          onClick={fetchTimeline}
        >
          Refresh
        </button>
        <ul className="mt-2 space-y-1">
          {timeline.length === 0 && <li className="text-neutral-500">No events yet.</li>}
          {timeline.map((event: TimelineEvent, i) => (
            <li key={i} className="p-2 bg-neutral-900 rounded border border-neutral-800">
              {event.text}
            </li>
          ))}
        </ul>
      </section>
      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Export Insights</h2>
        <button
          className="px-4 py-2 rounded bg-green-600 hover:bg-green-700 text-white font-medium"
          onClick={exportInsights}
        >
          Export
        </button>
        {exported && (
          <div className="mt-2 p-3 bg-neutral-900 rounded border border-neutral-800">
            {exported}
          </div>
        )}
      </section>
      <section>
        <button
          className="fixed bottom-6 right-6 px-4 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700 shadow-lg text-white font-bold"
        >
          ⌘ Command Palette
        </button>
      </section>
    </div>
  );
}
