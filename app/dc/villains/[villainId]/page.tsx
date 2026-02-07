import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CharacterProfile from "@/app/components/characters/CharacterProfile";
import { getCharacterById, getCharacters } from "@/app/data/characters";
import { buildCharacterMetadata } from "@/app/lib/characterMetadata";

export function generateStaticParams() {
  return getCharacters("dc", "villains").map((character) => ({ villainId: character.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ villainId: string }> }): Promise<Metadata> {
  const { villainId } = await params;
  return buildCharacterMetadata("dc", "villains", villainId);
}

export default async function DCVillainProfilePage({ params }: { params: Promise<{ villainId: string }> }) {
  const { villainId } = await params;
  const character = getCharacterById("dc", "villains", villainId);

  if (!character) {
    notFound();
  }

  return <CharacterProfile character={character} />;
}
