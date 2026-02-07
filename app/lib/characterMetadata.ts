import type { Metadata } from "next";

import type { Faction, Universe } from "@/app/data/characters";
import { factionLabel, getCharacterById } from "@/app/data/characters";

function clipped(text: string, max = 170): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).trimEnd()}...`;
}

export function buildCharacterMetadata(universe: Universe, faction: Faction, id: string): Metadata {
  const character = getCharacterById(universe, faction, id);
  if (!character) {
    return {
      title: "Character Not Found",
      description: "Character profile is unavailable.",
    };
  }

  const section = `${universe.toUpperCase()} ${factionLabel(faction)}`;
  return {
    title: `${character.name} | ${section}`,
    description: clipped(character.summary),
  };
}
