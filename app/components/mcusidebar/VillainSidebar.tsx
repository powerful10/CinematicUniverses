import CharacterSidebar from "@/app/components/navigation/CharacterSidebar";
import { getCharacters, getCharacterRoute } from "@/app/data/characters";

export default function VillainSidebar() {
  const items = getCharacters("mcu", "villains").map((character) => ({
    name: character.name,
    alias: character.alias,
    href: getCharacterRoute(character),
  }));

  return (
    <CharacterSidebar
      title="MCU Villains"
      subtitle="Planetary threats, masterminds, and conquerors across every phase."
      items={items}
    />
  );
}
