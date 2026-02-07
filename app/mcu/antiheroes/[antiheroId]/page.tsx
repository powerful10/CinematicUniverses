import { notFound } from "next/navigation";

import CharacterProfile from "@/app/components/characters/CharacterProfile";
import { getCharacterById, getCharacters } from "@/app/data/characters";

export function generateStaticParams() {
  return getCharacters("mcu", "antiheroes").map((character) => ({ antiheroId: character.id }));
}

export default async function MCUAntiheroProfilePage({ params }: { params: Promise<{ antiheroId: string }> }) {
  const { antiheroId } = await params;
  const character = getCharacterById("mcu", "antiheroes", antiheroId);

  if (!character) {
    notFound();
  }

  return <CharacterProfile character={character} />;
}
