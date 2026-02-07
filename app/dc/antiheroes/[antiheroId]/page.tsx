import { notFound } from "next/navigation";

import CharacterProfile from "@/app/components/characters/CharacterProfile";
import { getCharacterById, getCharacters } from "@/app/data/characters";

export function generateStaticParams() {
  return getCharacters("dc", "antiheroes").map((character) => ({ antiheroId: character.id }));
}

export default async function DCAntiheroProfilePage({ params }: { params: Promise<{ antiheroId: string }> }) {
  const { antiheroId } = await params;
  const character = getCharacterById("dc", "antiheroes", antiheroId);

  if (!character) {
    notFound();
  }

  return <CharacterProfile character={character} />;
}
