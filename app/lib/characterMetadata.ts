import type { Metadata } from "next";

import type { Faction, Universe } from "@/app/data/characters";
import { factionLabel, getCharacterById, getCharacterRoute } from "@/app/data/characters";
import { absoluteAssetUrl, absoluteUrl } from "@/app/lib/seo";

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
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const section = `${universe.toUpperCase()} ${factionLabel(faction)}`;
  const title = `${character.name} | ${section}`;
  const description = clipped(character.summary);
  const canonical = absoluteUrl(getCharacterRoute(character));
  const imageUrl = absoluteAssetUrl(character.image);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    keywords: [
      character.name,
      character.alias || "",
      `${character.universe.toUpperCase()} ${factionLabel(character.faction)}`,
      "character profile",
    ].filter(Boolean),
    openGraph: {
      title,
      description,
      type: "profile",
      url: canonical,
      images: [{ url: imageUrl, alt: character.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

