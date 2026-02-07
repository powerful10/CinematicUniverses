import CharacterDirectory from "@/app/components/characters/CharacterDirectory";
import { getCharacters } from "@/app/data/characters";

export default function MCUVillainsPage() {
  return (
    <CharacterDirectory
      title="MCU Villains Directory"
      description="Track the major threats, conquerors, manipulators, and destabilizing forces of the MCU."
      characters={getCharacters("mcu", "villains")}
    />
  );
}
