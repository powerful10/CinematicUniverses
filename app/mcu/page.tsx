import type { Metadata } from "next";
import Link from "next/link";

import CharacterCard from "@/app/components/characters/CharacterCard";
import { getFeaturedCharacters } from "@/app/data/characters";
import { buildPageMetadata } from "@/app/lib/pageMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "MCU Universe Hub",
  description: "Browse MCU heroes, villains, antiheroes, phases, artifacts, and timeline pages in one structured hub.",
  path: "/mcu",
  keywords: [
    "MCU hub",
    "Marvel Cinematic Universe characters",
    "MCU timeline",
    "MCU phases",
    "MCU heroes list",
    "MCU villains list",
  ],
});

const mcuRouteCards = [
  { href: "/mcu/heroes", title: "Heroes", detail: "Full roster and detailed profiles." },
  { href: "/mcu/villains", title: "Villains", detail: "Strategic threat index across phases." },
  { href: "/mcu/antiheroes", title: "Antiheroes", detail: "Gray-zone operators and volatile alliances." },
  { href: "/mcu/timeline", title: "Timeline", detail: "Chronological overview from WWII to multiverse era." },
  { href: "/mcu/phase1", title: "Phases", detail: "Phase-by-phase story evolution and milestones." },
  { href: "/mcu/artifacts", title: "Artifacts", detail: "Infinity Stones, relics, and high-value objects." },
  { href: "/mcu/avengers", title: "Avengers", detail: "Operational doctrine and team structure." },
  { href: "/mcu/guardians", title: "Guardians", detail: "Cosmic operations and strategic scope." },
  { href: "/mcu/locations", title: "Locations", detail: "Core geopolitical and cosmic environments." },
  { href: "/mcu/series", title: "Series", detail: "Disney+ arcs and post-Endgame developments." },
  { href: "/mcu/shield", title: "S.H.I.E.L.D.", detail: "Intelligence directives and intervention model." },
];

const mcuPopularQueries = [
  { href: "/mcu/heroes", phrase: "MCU heroes ranked and listed" },
  { href: "/mcu/villains", phrase: "MCU villains and major threats" },
  { href: "/mcu/antiheroes", phrase: "Marvel antiheroes from movies and series" },
  { href: "/mcu/timeline", phrase: "MCU timeline in chronological order" },
  { href: "/mcu/phase1", phrase: "MCU phases explained" },
  { href: "/mcu/artifacts", phrase: "Infinity Stones and MCU artifacts" },
];

export default function MCUIndexPage() {
  const featured = getFeaturedCharacters("mcu", 8);

  return (
    <main>
      <section className="section-surface page-intro">
        <p className="eyebrow">Universe Hub</p>
        <h1>Marvel Cinematic Universe</h1>
        <p>
          This hub centralizes MCU character profiles, phase structure, artifacts, and strategic team pages into one
          searchable map.
        </p>
      </section>

      <section className="route-card-grid">
        {mcuRouteCards.map((card) => (
          <Link key={card.href} href={card.href} className="route-card">
            <h2>{card.title}</h2>
            <p>{card.detail}</p>
          </Link>
        ))}
      </section>

      <section className="section-surface intent-inline-surface">
        <h2>Popular MCU Search Intents</h2>
        <p className="search-intent-lead">
          Use these quick paths if you are searching for specific Marvel Cinematic Universe character lists and timeline
          references.
        </p>
        <div className="mini-link-row">
          {mcuPopularQueries.map((entry) => (
            <Link key={entry.href} href={entry.href}>
              {entry.phrase}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="section-headline">
          <h2>MCU Spotlight</h2>
          <Link href="/mcu/heroes">Open all heroes</Link>
        </div>
        <div className="character-grid">
          {featured.map((character) => (
            <CharacterCard key={`mcu-featured-${character.id}`} character={character} />
          ))}
        </div>
      </section>
    </main>
  );
}
