import CharacterSidebar from "@/app/components/navigation/CharacterSidebar";
import { getCharacters, getCharacterRoute } from "@/app/data/characters";

export default function AntiHeroSidebar() {
  const items = getCharacters("mcu", "antiheroes").map((character) => ({
    name: character.name,
    alias: character.alias,
    href: getCharacterRoute(character),
  }));

  return (
    <CharacterSidebar
      title="MCU Antiheroes"
      subtitle="Unpredictable operators balancing redemption, revenge, and survival."
      items={items}
    />
  );
}
