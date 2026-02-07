import CharacterSidebar from "@/app/components/navigation/CharacterSidebar";
import { getCharacters, getCharacterRoute } from "@/app/data/characters";

export default function HeroSidebar() {
  const items = getCharacters("mcu", "heroes").map((character) => ({
    name: character.name,
    alias: character.alias,
    href: getCharacterRoute(character),
  }));

  return (
    <CharacterSidebar
      title="MCU Heroes"
      subtitle="Founders, cosmic defenders, street-level legends, and emerging allies."
      items={items}
    />
  );
}
