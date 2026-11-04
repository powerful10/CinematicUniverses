import rawData from "./characters.generated.json";

export type Universe = "mcu" | "dc";
export type Faction = "heroes" | "villains" | "antiheroes";

export type CharacterRecord = {
  id: string;
  name: string;
  alias: string | null;
  universe: Universe;
  faction: Faction;
  summary: string;
  alignment: string;
  status: string;
  debut: string | null;
  fullName: string | null;
  occupation: string | null;
  placeOfBirth: string | null;
  publisher: string | null;
  firstAppearance: string | null;
  affiliations: string[];
  abilities: string[];
  keyMoments: string[];
  stats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  } | null;
  image: string;
  imageSource: string;
  sourceUrl: string | null;
  sourceTitle?: string | null;
  sourceDescription?: string | null;
};

type UniverseData = {
  [key in Universe]: {
    [faction in Faction]: CharacterRecord[];
  };
};

const dataset = rawData as {
  updatedAt: string;
  universes: UniverseData;
};

export const charactersUpdatedAt = dataset.updatedAt;

export function getCharacters(universe: Universe, faction: Faction): CharacterRecord[] {
  return dataset.universes[universe][faction];
}

export function getCharacterById(
  universe: Universe,
  faction: Faction,
  id: string,
): CharacterRecord | undefined {
  return getCharacters(universe, faction).find((character) => character.id === id);
}

export function getCharacterRoute(character: Pick<CharacterRecord, "universe" | "faction" | "id">): string {
  if (character.universe === "mcu" && character.faction === "heroes") {
    return `/mcu/heroes/herolist/${character.id}`;
  }
  return `/${character.universe}/${character.faction}/${character.id}`;
}

export function getUniverseCharacterCount(universe: Universe): number {
  return (
    dataset.universes[universe].heroes.length +
    dataset.universes[universe].villains.length +
    dataset.universes[universe].antiheroes.length
  );
}

export function getUniverseBreakdown(universe: Universe): Record<Faction, number> {
  return {
    heroes: dataset.universes[universe].heroes.length,
    villains: dataset.universes[universe].villains.length,
    antiheroes: dataset.universes[universe].antiheroes.length,
  };
}

export function getFeaturedCharacters(universe: Universe, limit = 6): CharacterRecord[] {
  return [
    ...dataset.universes[universe].heroes.slice(0, Math.ceil(limit / 2)),
    ...dataset.universes[universe].villains.slice(0, Math.floor(limit / 2)),
  ].slice(0, limit);
}

export function factionLabel(faction: Faction): string {
  if (faction === "heroes") return "Heroes";
  if (faction === "villains") return "Villains";
  return "Antiheroes";
}

export function getAllCharacters(): CharacterRecord[] {
  return [
    ...dataset.universes.mcu.heroes,
    ...dataset.universes.mcu.villains,
    ...dataset.universes.mcu.antiheroes,
    ...dataset.universes.dc.heroes,
    ...dataset.universes.dc.villains,
    ...dataset.universes.dc.antiheroes,
  ];
}

export function getRelatedCharacters(character: CharacterRecord, limit = 6): CharacterRecord[] {
  const sameUniversePool = [
    ...dataset.universes[character.universe].heroes,
    ...dataset.universes[character.universe].villains,
    ...dataset.universes[character.universe].antiheroes,
  ].filter((candidate) => candidate.id !== character.id);

  const affiliationSet = new Set((character.affiliations || []).map((a) => a.toLowerCase()));

  const scored = sameUniversePool.map((candidate) => {
    let score = 0;
    if (candidate.faction === character.faction) score += 2;
    for (const aff of candidate.affiliations || []) {
      if (affiliationSet.has(aff.toLowerCase())) {
        score += 4;
      }
    }
    return { candidate, score };
  });

  scored.sort((a, b) => b.score - a.score || a.candidate.name.localeCompare(b.candidate.name));
  return scored.slice(0, limit).map((item) => item.candidate);
}

export const roster = dataset.universes;

