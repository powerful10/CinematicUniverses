import CharacterSidebar from "@/app/components/navigation/CharacterSidebar";
import { getCharacters, getCharacterRoute } from "@/app/data/characters";

export default function DCAntiheroSidebar() {
  const items = getCharacters("dc", "antiheroes").map((character) => ({
    name: character.name,
    alias: character.alias,
    href: getCharacterRoute(character),
  }));

  return (
    <CharacterSidebar
      title="DC Antiheroes"
      subtitle="Unstable allies and morally gray operatives from Gotham and beyond."
      items={items}
    />
  );
}
