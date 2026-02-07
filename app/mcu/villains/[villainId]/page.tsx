import { notFound } from "next/navigation";

import CharacterProfile from "@/app/components/characters/CharacterProfile";
import { getCharacterById, getCharacters } from "@/app/data/characters";

export function generateStaticParams() {
  return getCharacters("mcu", "villains").map((character) => ({ villainId: character.id }));
}

export default async function MCUVillainProfilePage({ params }: { params: Promise<{ villainId: string }> }) {
  const { villainId } = await params;
  const character = getCharacterById("mcu", "villains", villainId);

  if (!character) {
    notFound();
  }

  return <CharacterProfile character={character} />;
}
