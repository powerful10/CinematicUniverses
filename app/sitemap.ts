import type { MetadataRoute } from "next";

import type { Faction, Universe } from "@/app/data/characters";
import { charactersUpdatedAt, getCharacterRoute, getCharacters } from "@/app/data/characters";
import { absoluteUrl } from "@/app/lib/seo";

export const dynamic = "force-static";

const universes: Universe[] = ["mcu", "dc"];
const factions: Faction[] = ["heroes", "villains", "antiheroes"];

const staticRoutes = [
  "/",
  "/about",
  "/contact",
  "/coverage",
  "/mcu",
  "/mcu/heroes",
  "/mcu/villains",
  "/mcu/antiheroes",
  "/mcu/timeline",
  "/mcu/phase1",
  "/mcu/phase2",
  "/mcu/phase3",
  "/mcu/phase4",
  "/mcu/artifacts",
  "/mcu/avengers",
  "/mcu/guardians",
  "/mcu/locations",
  "/mcu/series",
  "/mcu/shield",
  "/dc",
  "/dc/heroes",
  "/dc/villains",
  "/dc/antiheroes",
  "/dc/justiceleague",
  "/dc/suicide-squad",
  "/privacy",
  "/terms",
  "/monetization",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const generatedAt = new Date(charactersUpdatedAt);

  const highPriorityRoutes: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route === "/" ? "daily" : "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));

  const characterRoutes: MetadataRoute.Sitemap = [];

  for (const universe of universes) {
    for (const faction of factions) {
      for (const character of getCharacters(universe, faction)) {
        characterRoutes.push({
          url: absoluteUrl(getCharacterRoute(character)),
          lastModified: generatedAt,
          changeFrequency: "weekly",
          priority: 0.7,
        });
      }
    }
  }

  return [...highPriorityRoutes, ...characterRoutes];
}
