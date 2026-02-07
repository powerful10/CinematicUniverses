import type { Metadata } from "next";

import CharacterDirectory from "@/app/components/characters/CharacterDirectory";
import { getCharacters } from "@/app/data/characters";
import { buildPageMetadata } from "@/app/lib/pageMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "MCU Villains Directory",
  description: "Track the major threats, conquerors, manipulators, and destabilizing forces of the MCU.",
  path: "/mcu/villains",
  keywords: ["MCU villains", "Marvel villains list", "MCU antagonists"],
});

export default function MCUVillainsPage() {
  return (
    <CharacterDirectory
      title="MCU Villains Directory"
      description="Track the major threats, conquerors, manipulators, and destabilizing forces of the MCU."
      characters={getCharacters("mcu", "villains")}
    />
  );
}

