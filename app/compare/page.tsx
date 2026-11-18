import type { Metadata } from "next";

import CompareArenaClient from "@/app/compare/CompareArenaClient";
import { factionLabel, getAllCharacters, getCharacterRoute } from "@/app/data/characters";
import { buildPageMetadata } from "@/app/lib/pageMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "MCU vs DC Character Battle Compare",
  description:
    "Compare any two Marvel MCU or DC Universe characters side-by-side by Intelligence, Strength, Speed, Durability, Power, and Combat.",
  path: "/compare",
  keywords: [
    "Marvel vs DC compare",
    "MCU vs DC battle",
    "Iron Man vs Batman stats",
    "Thanos vs Darkseid",
    "superhero power comparison",
  ],
});

export default function ComparePage() {
  const characters = getAllCharacters()
    .filter((c) => c.stats !== null)
    .map((c) => ({
      id: c.id,
      name: c.name,
      alias: c.alias,
      universe: c.universe,
      faction: factionLabel(c.faction),
      alignment: c.alignment,
      image: c.image,
      route: getCharacterRoute(c),
      abilities: c.abilities || [],
      stats: c.stats!,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <main className="home-page">
      <section className="section-surface page-intro">
        <p className="eyebrow">Battle Arena</p>
        <h1>MCU &amp; DC Character Comparison</h1>
        <p>
          Pick any two heroes, villains, or antiheroes across Marvel and DC to compare their combat, intelligence, and
          power ratings side-by-side.
        </p>
      </section>

      <CompareArenaClient characters={characters} />
    </main>
  );
}
