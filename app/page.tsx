import type { Metadata } from "next";
import Link from "next/link";

import CharacterCard from "@/app/components/characters/CharacterCard";
import { getFeaturedCharacters, getUniverseCharacterCount } from "@/app/data/characters";
import { buildPageMetadata } from "@/app/lib/pageMetadata";
import { absoluteUrl } from "@/app/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "MCU and DC Encyclopedia",
  description: "Explore MCU and DC heroes, villains, and antiheroes with searchable profiles and timeline context.",
  path: "/",
  keywords: [
    "MCU encyclopedia",
    "DC encyclopedia",
    "Marvel character profiles",
    "DC character database",
    "MCU heroes list",
    "DC villains list",
    "Marvel vs DC characters",
  ],
});

const popularSearchRoutes = [
  {
    href: "/mcu/heroes",
    query: "MCU heroes list",
    detail: "Avengers and allied heroes with full profile pages.",
  },
  {
    href: "/mcu/villains",
    query: "MCU villains list",
    detail: "Main antagonists, cosmic threats, and strategic adversaries.",
  },
  {
    href: "/mcu/antiheroes",
    query: "Marvel antiheroes list",
    detail: "Characters operating between heroism and self-interest.",
  },
  {
    href: "/dc/heroes",
    query: "DC heroes list",
    detail: "Justice League leaders and major city defenders.",
  },
  {
    href: "/dc/villains",
    query: "DC villains list",
    detail: "Rogue masterminds, warlords, and top-level threats.",
  },
  {
    href: "/dc/antiheroes",
    query: "DC antiheroes list",
    detail: "Morally gray operators including Suicide Squad figures.",
  },
  {
    href: "/mcu/timeline",
    query: "MCU timeline order",
    detail: "Chronological mapping across MCU phases and major events.",
  },
  {
    href: "/coverage",
    query: "MCU and DC character coverage",
    detail: "Current indexed counts and dataset freshness status.",
  },
];

const faqEntries = [
  {
    question: "Does this site include both MCU and DC characters?",
    answer:
      "Yes. The site indexes heroes, villains, and antiheroes for both universes and links each profile to category hubs.",
  },
  {
    question: "Can I browse by faction like heroes or villains?",
    answer:
      "Yes. Each universe hub provides direct links to heroes, villains, and antiheroes directories with search and sorting.",
  },
  {
    question: "How often is character data updated?",
    answer:
      "The dataset is maintained through generation and validation scripts. The Coverage page displays the latest build time.",
  },
];

export default function HomePage() {
  const mcuFeatured = getFeaturedCharacters("mcu", 6);
  const dcFeatured = getFeaturedCharacters("dc", 6);
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Cinematic Universes",
    url: absoluteUrl("/"),
    description: "A complete MCU and DC encyclopedia with searchable character directories and profile pages.",
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: "Cinematic Universes",
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqEntries.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: entry.answer,
      },
    })),
  };

  return (
    <main className="home-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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

      <section className="section-surface search-intent-surface">
        <h2>Popular Search Routes</h2>
        <p className="search-intent-lead">
          These are the highest-intent routes users usually search for first when looking for MCU and DC character data.
        </p>

        <div className="search-intent-grid">
          {popularSearchRoutes.map((item) => (
            <Link key={item.href} href={item.href} className="search-intent-card">
              <h3>{item.query}</h3>
              <p>{item.detail}</p>
            </Link>
          ))}
        </div>
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

      <section className="section-surface faq-surface">
        <h2>FAQ</h2>
        <div className="faq-grid">
          {faqEntries.map((entry) => (
            <article key={entry.question} className="faq-card">
              <h3>{entry.question}</h3>
              <p>{entry.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
