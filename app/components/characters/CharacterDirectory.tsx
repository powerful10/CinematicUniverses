import type { CharacterRecord } from "@/app/data/characters";
import CharacterCard from "@/app/components/characters/CharacterCard";

type CharacterDirectoryProps = {
  title: string;
  description: string;
  characters: CharacterRecord[];
};

export default function CharacterDirectory({ title, description, characters }: CharacterDirectoryProps) {
  return (
    <main>
      <section className="section-surface page-intro">
        <p className="eyebrow">Character Index</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </section>

      <section className="character-grid" aria-label={title}>
        {characters.map((character) => (
          <CharacterCard key={`${character.universe}-${character.faction}-${character.id}`} character={character} />
        ))}
      </section>
    </main>
  );
}
