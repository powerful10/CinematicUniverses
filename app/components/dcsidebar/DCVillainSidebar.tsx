import CharacterSidebar from "@/app/components/navigation/CharacterSidebar";
import { getCharacters, getCharacterRoute } from "@/app/data/characters";

export default function DCVillainSidebar() {
  const items = getCharacters("dc", "villains").map((character) => ({
    name: character.name,
    alias: character.alias,
    href: getCharacterRoute(character),
  }));

  return (
    <CharacterSidebar
      title="DC Villains"
      subtitle="Rogue masterminds, tyrants, and crisis-level antagonists."
      items={items}
    />
  );
}
