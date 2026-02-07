import type { Metadata } from "next";

import CharacterDirectory from "@/app/components/characters/CharacterDirectory";
import { getCharacters } from "@/app/data/characters";
import { buildPageMetadata } from "@/app/lib/pageMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "DC Heroes Directory",
  description: "From Gotham to Metropolis, browse defenders leading Earth through cosmic and urban crises.",
  path: "/dc/heroes",
  keywords: ["DC heroes", "Justice League heroes", "DC hero list"],
});

export default function DCHeroesPage() {
  return (
    <CharacterDirectory
      title="DC Heroes Directory"
      description="From Gotham to Metropolis, browse defenders leading Earth through cosmic and urban crises."
      characters={getCharacters("dc", "heroes")}
    />
  );
}

