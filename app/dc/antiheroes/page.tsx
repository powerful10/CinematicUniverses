import CharacterDirectory from "@/app/components/characters/CharacterDirectory";
import { getCharacters } from "@/app/data/characters";

export default function DCAntiheroesPage() {
  return (
    <CharacterDirectory
      title="DC Antiheroes Directory"
      description="Analyze unstable alliances and morally gray operators shaping the DC conflict map."
      characters={getCharacters("dc", "antiheroes")}
    />
  );
}
