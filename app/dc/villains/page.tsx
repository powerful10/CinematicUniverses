import type { Metadata } from "next";

import CharacterDirectory from "@/app/components/characters/CharacterDirectory";
import { getCharacters } from "@/app/data/characters";
import { buildPageMetadata } from "@/app/lib/pageMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "DC Villains Directory",
  description: "Review DC's most dangerous masterminds, warlords, and city-breaking antagonists.",
  path: "/dc/villains",
  keywords: ["DC villains", "Batman villains", "DC antagonist list"],
});

export default function DCVillainsPage() {
  return (
    <CharacterDirectory
      title="DC Villains Directory"
      description="Review DC's most dangerous masterminds, warlords, and city-breaking antagonists."
      characters={getCharacters("dc", "villains")}
    />
  );
}

