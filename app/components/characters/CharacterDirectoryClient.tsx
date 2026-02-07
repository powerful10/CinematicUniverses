"use client";

import { useMemo, useState } from "react";

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

  const visibleCharacters = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    let filtered = characters;

    if (normalizedQuery) {
      filtered = characters.filter((character) => includesQuery(character, normalizedQuery));
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
  }, [characters, query, sortMode]);

  return (
    <>
      <section className="directory-toolbar section-surface" aria-label={`${title} filters`}>
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

        <p className="directory-toolbar-count">Showing {visibleCharacters.length} of {characters.length}</p>
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
    </>
  );
}
