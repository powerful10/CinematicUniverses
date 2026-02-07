import Link from "next/link";
import Image from "next/image";

import type { CharacterRecord } from "@/app/data/characters";
import { getCharacterRoute } from "@/app/data/characters";
import { withBasePath } from "@/app/lib/basePath";

type CharacterCardProps = {
  character: CharacterRecord;
};

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <Link href={getCharacterRoute(character)} className="character-card">
      <div className="character-card-media">
        <Image
          src={withBasePath(character.image)}
          alt={character.name}
          fill
          sizes="(max-width: 820px) 50vw, (max-width: 1320px) 20vw, 240px"
        />
      </div>

      <div className="character-card-body">
        <p className="character-card-alignment">{character.alignment}</p>
        <h3>{character.name}</h3>
        {character.alias ? <p className="character-card-alias">{character.alias}</p> : null}
        <p className="character-card-summary">{character.summary}</p>
      </div>
    </Link>
  );
}
