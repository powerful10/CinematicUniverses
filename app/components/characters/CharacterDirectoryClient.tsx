"use client";

import { useMemo, useState } from "react";

import AdBanner from "@/app/components/ads/AdBanner";
import type { CharacterRecord } from "@/app/data/characters";
import CharacterCard from "@/app/components/characters/CharacterCard";

type DirectoryClientProps = {
  title: string;
  characters: CharacterRecord[];
};

type SortMode = "az" | "za" | "power";

function combinedPower(character: CharacterRecord): number {
  if (!character.stats) return 0;
  return (
    character.stats.intelligence +
    character.stats.strength +
    character.stats.speed +
    character.stats.durability +
    character.stats.power +
    character.stats.combat
  );
}

function includesQuery(character: CharacterRecord, query: string): boolean {
  const haystack = [
    character.name,
    character.alias || "",
    character.summary,
    character.fullName || "",
    ...(character.affiliations || []),
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query);
}

export default function CharacterDirectoryClient({ title, characters }: DirectoryClientProps) {
  const [query, setQuery] = useState("");
  const [sortMode, setSortMode] = useState<SortMode>("az");
  const [activeAffiliation, setActiveAffiliation] = useState<string | null>(null);

  const topAffiliations = useMemo(() => {
    const counts = new Map<string, number>();
    for (const c of characters) {
      for (const aff of c.affiliations || []) {
        const clean = aff.trim();
        if (clean) counts.set(clean, (counts.get(clean) || 0) + 1);
      }
    }
    return Array.from(counts.entries())
      .filter(([, count]) => count >= 2)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([name]) => name);
  }, [characters]);

  const hasCustomFilters =
    query.trim().length > 0 || sortMode !== "az" || activeAffiliation !== null;

  const visibleCharacters = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    let filtered = characters;

    if (activeAffiliation) {
      filtered = filtered.filter((character) =>
        (character.affiliations || []).some(
          (aff) => aff.trim().toLowerCase() === activeAffiliation.toLowerCase(),
        ),
      );
    }

    if (normalizedQuery) {
      filtered = filtered.filter((character) => includesQuery(character, normalizedQuery));
    }

    const sorted = [...filtered];

    if (sortMode === "az") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortMode === "za") {
      sorted.sort((a, b) => b.name.localeCompare(a.name));
    } else {
      sorted.sort((a, b) => combinedPower(b) - combinedPower(a));
    }

    return sorted;
  }, [characters, query, sortMode, activeAffiliation]);

  return (
    <>
      <section className="directory-toolbar-wrap section-surface" aria-label={`${title} filters`}>
        <div className="directory-toolbar">
          <div className="directory-toolbar-field">
            <label htmlFor="character-search">Search</label>
            <input
              id="character-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search name, alias, affiliation..."
            />
          </div>

          <div className="directory-toolbar-field">
            <label htmlFor="character-sort">Sort</label>
            <select
              id="character-sort"
              value={sortMode}
              onChange={(event) => setSortMode(event.target.value as SortMode)}
            >
              <option value="az">A to Z</option>
              <option value="za">Z to A</option>
              <option value="power">Power Snapshot</option>
            </select>
          </div>

          <p className="directory-toolbar-count" aria-live="polite">
            Showing {visibleCharacters.length} of {characters.length}
          </p>

          <div className="directory-toolbar-actions">
            <button
              type="button"
              className="directory-reset"
              onClick={() => {
                setQuery("");
                setSortMode("az");
                setActiveAffiliation(null);
              }}
              disabled={!hasCustomFilters}
            >
              Reset Filters
            </button>
          </div>
        </div>

        {topAffiliations.length > 0 && (
          <div className="directory-affiliation-chips" aria-label="Quick team filters">
            <span className="directory-chip-label">Teams:</span>
            <button
              type="button"
              className={activeAffiliation === null ? "filter-chip active" : "filter-chip"}
              onClick={() => setActiveAffiliation(null)}
            >
              All
            </button>
            {topAffiliations.map((team) => (
              <button
                key={team}
                type="button"
                className={activeAffiliation === team ? "filter-chip active" : "filter-chip"}
                onClick={() => setActiveAffiliation(activeAffiliation === team ? null : team)}
              >
                {team}
              </button>
            ))}
          </div>
        )}
      </section>

      {visibleCharacters.length ? (
        <section className="character-grid" aria-label={title}>
          {visibleCharacters.map((character) => (
            <CharacterCard key={`${character.universe}-${character.faction}-${character.id}`} character={character} />
          ))}
        </section>
      ) : (
        <section className="section-surface directory-empty">
          <h2>No matches found</h2>
          <p>Try a different name, alias, or clear the search query.</p>
        </section>
      )}

      <AdBanner label="Sponsored Directory Partner" />
    </>
  );
}
