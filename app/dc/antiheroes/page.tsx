import type { Metadata } from "next";

import CharacterDirectory from "@/app/components/characters/CharacterDirectory";
import { getCharacters } from "@/app/data/characters";
import { buildPageMetadata } from "@/app/lib/pageMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "DC Antiheroes Directory",
  description: "Analyze unstable alliances and morally gray operators shaping the DC conflict map.",
  path: "/dc/antiheroes",
  keywords: ["DC antiheroes", "Suicide Squad characters", "DC morally gray characters"],
});

export default function DCAntiheroesPage() {
  return (
    <CharacterDirectory
      title="DC Antiheroes Directory"
      description="Analyze unstable alliances and morally gray operators shaping the DC conflict map."
      characters={getCharacters("dc", "antiheroes")}
    />
  );
}

