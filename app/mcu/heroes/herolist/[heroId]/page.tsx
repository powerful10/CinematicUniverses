import { notFound } from "next/navigation";

import CharacterProfile from "@/app/components/characters/CharacterProfile";
import { getCharacterById, getCharacters } from "@/app/data/characters";

export function generateStaticParams() {
  return getCharacters("mcu", "heroes").map((character) => ({ heroId: character.id }));
}

export default async function MCUHeroProfilePage({ params }: { params: Promise<{ heroId: string }> }) {
  const { heroId } = await params;
  const character = getCharacterById("mcu", "heroes", heroId);

  if (!character) {
    notFound();
  }

  return <CharacterProfile character={character} />;
}
