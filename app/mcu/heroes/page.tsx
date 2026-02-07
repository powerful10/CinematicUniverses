import type { Metadata } from "next";

import CharacterDirectory from "@/app/components/characters/CharacterDirectory";
import { getCharacters } from "@/app/data/characters";
import { buildPageMetadata } from "@/app/lib/pageMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "MCU Heroes Directory",
  description: "Explore every active and legacy hero connected to the Marvel Cinematic Universe timeline.",
  path: "/mcu/heroes",
  keywords: ["MCU heroes", "Marvel hero list", "Avengers roster"],
});

export default function MCUHeroesPage() {
  return (
    <CharacterDirectory
      title="MCU Heroes Directory"
      description="Explore every active and legacy hero connected to the Marvel Cinematic Universe timeline."
      characters={getCharacters("mcu", "heroes")}
    />
  );
}

