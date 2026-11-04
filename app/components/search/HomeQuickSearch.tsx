"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export type QuickSearchItem = {
  id: string;
  name: string;
  alias: string | null;
  universe: "mcu" | "dc";
  faction: string;
  alignment: string;
  route: string;
  affiliations: string[];
};

type HomeQuickSearchProps = {
  items: QuickSearchItem[];
};

export default function HomeQuickSearch({ items }: HomeQuickSearchProps) {
  const [query, setQuery] = useState("");
  const [universeFilter, setUniverseFilter] = useState<"all" | "mcu" | "dc">("all");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const pool =
      universeFilter === "all"
        ? items
        : items.filter((item) => item.universe === universeFilter);

    if (!q) return [];

    return pool
      .filter((item) => {
        const hay = `${item.name} ${item.alias || ""} ${item.affiliations.join(" ")} ${item.faction}`.toLowerCase();
        return hay.includes(q);
      })
      .slice(0, 8);
  }, [items, query, universeFilter]);

  return (
    <div className="quick-search-box" role="search" aria-label="Instant character search">
      <div className="quick-search-controls">
        <input
          type="search"
          className="quick-search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Instant search: Iron Man, Batman, Thanos, Avengers, Justice League..."
          aria-label="Search any MCU or DC character"
        />
        <div className="quick-search-tabs" role="group" aria-label="Filter universe">
          <button
            type="button"
            className={universeFilter === "all" ? "quick-search-tab active" : "quick-search-tab"}
            onClick={() => setUniverseFilter("all")}
          >
            All ({items.length})
          </button>
          <button
            type="button"
            className={universeFilter === "mcu" ? "quick-search-tab active" : "quick-search-tab"}
            onClick={() => setUniverseFilter("mcu")}
          >
            MCU
          </button>
          <button
            type="button"
            className={universeFilter === "dc" ? "quick-search-tab active" : "quick-search-tab"}
            onClick={() => setUniverseFilter("dc")}
          >
            DC
          </button>
        </div>
      </div>

      {query.trim().length > 0 && (
        <div className="quick-search-results" aria-live="polite">
          {results.length > 0 ? (
            results.map((item) => (
              <Link key={`${item.universe}-${item.id}`} href={item.route} className="quick-search-result-item">
                <div>
                  <strong>{item.name}</strong>
                  {item.alias ? <span className="quick-search-alias"> ({item.alias})</span> : null}
                </div>
                <span className="quick-search-badge">
                  {item.universe.toUpperCase()} • {item.faction}
                </span>
              </Link>
            ))
          ) : (
            <p className="quick-search-empty">No characters matched &ldquo;{query}&rdquo;.</p>
          )}
        </div>
      )}
    </div>
  );
}
