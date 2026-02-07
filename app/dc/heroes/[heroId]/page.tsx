import { notFound } from "next/navigation";

import CharacterProfile from "@/app/components/characters/CharacterProfile";
import { getCharacterById, getCharacters } from "@/app/data/characters";

export function generateStaticParams() {
  return getCharacters("dc", "heroes").map((character) => ({ heroId: character.id }));
}

export default async function DCHeroProfilePage({ params }: { params: Promise<{ heroId: string }> }) {
  const { heroId } = await params;
  const character = getCharacterById("dc", "heroes", heroId);

  if (!character) {
    notFound();
  }

  return <CharacterProfile character={character} />;
}
