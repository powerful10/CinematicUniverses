import Link from "next/link";

import CharacterCard from "@/app/components/characters/CharacterCard";
import { getFeaturedCharacters, getUniverseCharacterCount } from "@/app/data/characters";

export default function HomePage() {
  const mcuFeatured = getFeaturedCharacters("mcu", 6);
  const dcFeatured = getFeaturedCharacters("dc", 6);

  return (
    <main className="home-page">
      <section className="hero-spotlight section-surface">
        <p className="eyebrow">Multiverse Archive</p>
        <h1>Step Into the Cinematic Universes</h1>
        <p>
          Explore a fully structured MCU and DC encyclopedia with character dossiers, faction directories, timeline context,
          and strategic team breakdowns.
        </p>

        <div className="hero-actions">
          <Link href="/mcu" className="pill-link">
            Enter MCU
          </Link>
          <Link href="/dc" className="pill-link muted">
            Enter DC
          </Link>
        </div>
      </section>

      <section className="home-two-col">
        <article className="section-surface">
          <h2>Marvel Cinematic Universe</h2>
          <p>
            {getUniverseCharacterCount("mcu")} indexed profiles across heroes, villains, and antiheroes, plus phase,
            timeline, and artifact hubs.
          </p>
          <div className="mini-link-row">
            <Link href="/mcu/heroes">Heroes</Link>
            <Link href="/mcu/villains">Villains</Link>
            <Link href="/mcu/antiheroes">Antiheroes</Link>
            <Link href="/mcu/timeline">Timeline</Link>
          </div>
        </article>

        <article className="section-surface">
          <h2>DC Universe</h2>
          <p>
            {getUniverseCharacterCount("dc")} indexed profiles with Justice League and Suicide Squad command layers,
            including antihero and rogue galleries.
          </p>
          <div className="mini-link-row">
            <Link href="/dc/heroes">Heroes</Link>
            <Link href="/dc/villains">Villains</Link>
            <Link href="/dc/antiheroes">Antiheroes</Link>
            <Link href="/dc/justiceleague">Justice League</Link>
          </div>
        </article>
      </section>

      <section>
        <div className="section-headline">
          <h2>Featured MCU Profiles</h2>
          <Link href="/mcu/heroes">View full roster</Link>
        </div>
        <div className="character-grid">
          {mcuFeatured.map((character) => (
            <CharacterCard key={`home-mcu-${character.id}`} character={character} />
          ))}
        </div>
      </section>

      <section>
        <div className="section-headline">
          <h2>Featured DC Profiles</h2>
          <Link href="/dc/heroes">View full roster</Link>
        </div>
        <div className="character-grid">
          {dcFeatured.map((character) => (
            <CharacterCard key={`home-dc-${character.id}`} character={character} />
          ))}
        </div>
      </section>
    </main>
  );
}
