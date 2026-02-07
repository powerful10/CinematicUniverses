import Link from "next/link";

import CharacterCard from "@/app/components/characters/CharacterCard";
import { getFeaturedCharacters } from "@/app/data/characters";

const dcRouteCards = [
  { href: "/dc/heroes", title: "Heroes", detail: "League leaders, city defenders, and metahuman icons." },
  { href: "/dc/villains", title: "Villains", detail: "Chaos agents, empire-builders, and rogue masterminds." },
  { href: "/dc/antiheroes", title: "Antiheroes", detail: "Unstable allies and coercive strike assets." },
  { href: "/dc/justiceleague", title: "Justice League", detail: "Global defense structure and crisis doctrine." },
  { href: "/dc/suicide-squad", title: "Suicide Squad", detail: "Black-ops model using expendable operators." },
];

export default function DCIndexPage() {
  const featured = getFeaturedCharacters("dc", 8);

  return (
    <main>
      <section className="section-surface page-intro">
        <p className="eyebrow">Universe Hub</p>
        <h1>DC Universe</h1>
        <p>
          Browse a complete DC command map with character dossiers, leadership structures, and crisis-response teams.
        </p>
      </section>

      <section className="route-card-grid">
        {dcRouteCards.map((card) => (
          <Link key={card.href} href={card.href} className="route-card">
            <h2>{card.title}</h2>
            <p>{card.detail}</p>
          </Link>
        ))}
      </section>

      <section>
        <div className="section-headline">
          <h2>DC Spotlight</h2>
          <Link href="/dc/heroes">Open all heroes</Link>
        </div>
        <div className="character-grid">
          {featured.map((character) => (
            <CharacterCard key={`dc-featured-${character.id}`} character={character} />
          ))}
        </div>
      </section>
    </main>
  );
}
