import type { Metadata } from "next";

import CharacterDirectory from "@/app/components/characters/CharacterDirectory";
import { getCharacters } from "@/app/data/characters";
import { buildPageMetadata } from "@/app/lib/pageMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "MCU Antiheroes Directory",
  description: "Discover characters that move between heroism and self-interest across multiversal conflict.",
  path: "/mcu/antiheroes",
  keywords: ["MCU antiheroes", "Marvel antihero list", "gray morality characters"],
});

export default function MCUAntiheroesPage() {
  return (
    <CharacterDirectory
      title="MCU Antiheroes Directory"
      description="Discover characters that move between heroism and self-interest across multiversal conflict."
      characters={getCharacters("mcu", "antiheroes")}
    />
  );
}

