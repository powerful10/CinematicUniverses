import CharacterDirectory from "@/app/components/characters/CharacterDirectory";
import { getCharacters } from "@/app/data/characters";

export default function DCHeroesPage() {
  return (
    <CharacterDirectory
      title="DC Heroes Directory"
      description="From Gotham to Metropolis, browse defenders leading Earth through cosmic and urban crises."
      characters={getCharacters("dc", "heroes")}
    />
  );
}
