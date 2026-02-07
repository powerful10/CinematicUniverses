import CharacterDirectory from "@/app/components/characters/CharacterDirectory";
import { getCharacters } from "@/app/data/characters";

export default function MCUHeroesPage() {
  return (
    <CharacterDirectory
      title="MCU Heroes Directory"
      description="Explore every active and legacy hero connected to the Marvel Cinematic Universe timeline."
      characters={getCharacters("mcu", "heroes")}
    />
  );
}
