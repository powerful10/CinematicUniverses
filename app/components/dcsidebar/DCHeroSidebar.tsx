import CharacterSidebar from "@/app/components/navigation/CharacterSidebar";
import { getCharacters, getCharacterRoute } from "@/app/data/characters";

export default function DCHeroSidebar() {
  const items = getCharacters("dc", "heroes").map((character) => ({
    name: character.name,
    alias: character.alias,
    href: getCharacterRoute(character),
  }));

  return (
    <CharacterSidebar
      title="DC Heroes"
      subtitle="Justice League leaders, legacy protectors, and city-level guardians."
      items={items}
    />
  );
}
