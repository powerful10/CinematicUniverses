import CharacterDirectory from "@/app/components/characters/CharacterDirectory";
import { getCharacters } from "@/app/data/characters";

export default function MCUAntiheroesPage() {
  return (
    <CharacterDirectory
      title="MCU Antiheroes Directory"
      description="Discover characters that move between heroism and self-interest across multiversal conflict."
      characters={getCharacters("mcu", "antiheroes")}
    />
  );
}
