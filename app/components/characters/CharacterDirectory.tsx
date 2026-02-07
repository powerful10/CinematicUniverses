import type { CharacterRecord } from "@/app/data/characters";
import CharacterDirectoryClient from "@/app/components/characters/CharacterDirectoryClient";

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
      <CharacterDirectoryClient title={title} characters={characters} />
    </main>
  );
}
