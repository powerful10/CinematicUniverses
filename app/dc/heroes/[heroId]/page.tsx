import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CharacterProfile from "@/app/components/characters/CharacterProfile";
import { getCharacterById, getCharacters } from "@/app/data/characters";
import { buildCharacterMetadata } from "@/app/lib/characterMetadata";

export function generateStaticParams() {
  return getCharacters("dc", "heroes").map((character) => ({ heroId: character.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ heroId: string }> }): Promise<Metadata> {
  const { heroId } = await params;
  return buildCharacterMetadata("dc", "heroes", heroId);
}

export default async function DCHeroProfilePage({ params }: { params: Promise<{ heroId: string }> }) {
  const { heroId } = await params;
  const character = getCharacterById("dc", "heroes", heroId);

  if (!character) {
    notFound();
  }

  return <CharacterProfile character={character} />;
}
