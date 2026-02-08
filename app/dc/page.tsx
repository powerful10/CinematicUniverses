import type { Metadata } from "next";
import Link from "next/link";

import CharacterCard from "@/app/components/characters/CharacterCard";
import { getFeaturedCharacters } from "@/app/data/characters";
import { buildPageMetadata } from "@/app/lib/pageMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "DC Universe Hub",
  description: "Explore DC heroes, villains, antiheroes, Justice League, and Suicide Squad pages from one command hub.",
  path: "/dc",
  keywords: [
    "DC Universe hub",
    "DC character profiles",
    "Justice League roster",
    "DC villains directory",
    "DC heroes list",
    "DC antiheroes list",
  ],
});

const dcRouteCards = [
  { href: "/dc/heroes", title: "Heroes", detail: "League leaders, city defenders, and metahuman icons." },
  { href: "/dc/villains", title: "Villains", detail: "Chaos agents, empire-builders, and rogue masterminds." },
  { href: "/dc/antiheroes", title: "Antiheroes", detail: "Unstable allies and coercive strike assets." },
  { href: "/dc/justiceleague", title: "Justice League", detail: "Global defense structure and crisis doctrine." },
  { href: "/dc/suicide-squad", title: "Suicide Squad", detail: "Black-ops model using expendable operators." },
];

const dcPopularQueries = [
  { href: "/dc/heroes", phrase: "DC heroes list and profiles" },
  { href: "/dc/villains", phrase: "DC villains list and rogue gallery" },
  { href: "/dc/antiheroes", phrase: "DC antiheroes and gray-zone operatives" },
  { href: "/dc/justiceleague", phrase: "Justice League roster and structure" },
  { href: "/dc/suicide-squad", phrase: "Suicide Squad members and roles" },
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

      <section className="section-surface intent-inline-surface">
        <h2>Popular DC Search Intents</h2>
        <p className="search-intent-lead">
          These quick links match common search phrases for DC heroes, villains, antiheroes, and team structures.
        </p>
        <div className="mini-link-row">
          {dcPopularQueries.map((entry) => (
            <Link key={entry.href} href={entry.href}>
              {entry.phrase}
            </Link>
          ))}
        </div>
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
