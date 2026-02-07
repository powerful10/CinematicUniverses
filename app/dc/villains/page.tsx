import CharacterDirectory from "@/app/components/characters/CharacterDirectory";
import { getCharacters } from "@/app/data/characters";

export default function DCVillainsPage() {
  return (
    <CharacterDirectory
      title="DC Villains Directory"
      description="Review DC's most dangerous masterminds, warlords, and city-breaking antagonists."
      characters={getCharacters("dc", "villains")}
    />
  );
}
