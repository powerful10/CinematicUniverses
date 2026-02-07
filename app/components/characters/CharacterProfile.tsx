import Link from "next/link";
import Image from "next/image";

import type { CharacterRecord, Faction, Universe } from "@/app/data/characters";
import { factionLabel, getCharacterRoute } from "@/app/data/characters";
import { withBasePath } from "@/app/lib/basePath";
import { absoluteAssetUrl, absoluteUrl } from "@/app/lib/seo";

type CharacterProfileProps = {
  character: CharacterRecord;
};

const statOrder = [
  { key: "intelligence", label: "Intelligence" },
  { key: "strength", label: "Strength" },
  { key: "speed", label: "Speed" },
  { key: "durability", label: "Durability" },
  { key: "power", label: "Power" },
  { key: "combat", label: "Combat" },
] as const;

function getCategoryRoute(universe: Universe, faction: Faction): string {
  if (universe === "mcu" && faction === "heroes") {
    return "/mcu/heroes";
  }
  return `/${universe}/${faction}`;
}

function getUniverseLinks(universe: Universe): Array<{ href: string; label: string }> {
  if (universe === "mcu") {
    return [
      { href: "/mcu/timeline", label: "Timeline" },
      { href: "/mcu/avengers", label: "Avengers" },
      { href: "/mcu/phase1", label: "Phases" },
      { href: "/mcu/artifacts", label: "Artifacts" },
    ];
  }

  return [
    { href: "/dc/justiceleague", label: "Justice League" },
    { href: "/dc/suicide-squad", label: "Suicide Squad" },
    { href: "/dc/heroes", label: "Heroes" },
    { href: "/dc/villains", label: "Villains" },
  ];
}

function trimList(values: string[]): string[] {
  return values.filter(Boolean).slice(0, 6);
}

function buildSummaryParagraphs(summary: string): string[] {
  const sentences = summary
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?])\s+/)
    .map((entry) => entry.trim())
    .filter(Boolean);

  if (sentences.length <= 2) {
    return [summary];
  }

  const first = sentences.slice(0, Math.ceil(sentences.length / 2)).join(" ");
  const second = sentences.slice(Math.ceil(sentences.length / 2)).join(" ");
  return [first, second];
}

export default function CharacterProfile({ character }: CharacterProfileProps) {
  const categoryRoute = getCategoryRoute(character.universe, character.faction);
  const summaryParagraphs = buildSummaryParagraphs(character.summary);
  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `${character.name} profile`,
    description: character.summary,
    url: absoluteUrl(getCharacterRoute(character)),
    mainEntity: {
      "@type": "Person",
      additionalType: "https://schema.org/FictionalCharacter",
      name: character.name,
      alternateName: character.alias || undefined,
      description: character.summary,
      image: absoluteAssetUrl(character.image),
      affiliation: trimList(character.affiliations).map((name) => ({ "@type": "Organization", name })),
      sameAs: character.sourceUrl ? [character.sourceUrl] : undefined,
    },
    isPartOf: {
      "@type": "WebSite",
      name: "Cinematic Universes",
      url: absoluteUrl("/"),
    },
  };

  return (
    <main className="character-profile">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }} />

      <div className="profile-banner section-surface">
        <div className="profile-media-frame">
          <Image
            src={withBasePath(character.image)}
            alt={character.name}
            width={720}
            height={1080}
            sizes="(max-width: 1100px) 100vw, 320px"
          />
        </div>

        <div className="profile-banner-content">
          <p className="profile-kicker">
            {character.universe.toUpperCase()} {factionLabel(character.faction)}
          </p>
          <h1>{character.name}</h1>
          {character.alias ? <p className="profile-alias">Also known as {character.alias}</p> : null}
          <div className="profile-summary-stack">
            {summaryParagraphs.map((paragraph, index) => (
              <p key={`${character.id}-summary-${index}`} className="profile-summary">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="profile-banner-links">
            <Link href={categoryRoute} className="pill-link">
              Back to {factionLabel(character.faction)}
            </Link>
            {getUniverseLinks(character.universe).map((link) => (
              <Link key={link.href} href={link.href} className="pill-link muted">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <section className="profile-grid">
        <article className="section-surface">
          <h2>Profile Data</h2>
          <dl className="profile-data-grid">
            <div>
              <dt>Alignment</dt>
              <dd>{character.alignment}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{character.status}</dd>
            </div>
            <div>
              <dt>Full Name</dt>
              <dd>{character.fullName || "Unknown"}</dd>
            </div>
            <div>
              <dt>Occupation</dt>
              <dd>{character.occupation || "Classified"}</dd>
            </div>
            <div>
              <dt>Birthplace</dt>
              <dd>{character.placeOfBirth || "Unknown"}</dd>
            </div>
            <div>
              <dt>First Appearance</dt>
              <dd>{character.firstAppearance || "Not logged"}</dd>
            </div>
          </dl>
        </article>

        <article className="section-surface">
          <h2>Abilities</h2>
          <div className="chip-row">
            {trimList(character.abilities).map((ability) => (
              <span key={ability} className="chip">
                {ability}
              </span>
            ))}
          </div>

          <h3>Affiliations</h3>
          <ul className="profile-list">
            {trimList(character.affiliations).map((group) => (
              <li key={group}>{group}</li>
            ))}
          </ul>
        </article>

        <article className="section-surface">
          <h2>Key Moments</h2>
          <ul className="profile-list profile-list-steps">
            {trimList(character.keyMoments).map((moment) => (
              <li key={moment}>{moment}</li>
            ))}
          </ul>
        </article>

        <article className="section-surface">
          <h2>Power Snapshot</h2>
          {character.stats ? (
            <div className="stat-stack">
              {statOrder.map((stat) => {
                const value = character.stats?.[stat.key] ?? 0;
                return (
                  <div key={stat.key}>
                    <div className="stat-head">
                      <span>{stat.label}</span>
                      <strong>{value}</strong>
                    </div>
                    <div className="stat-track">
                      <span style={{ width: `${Math.max(4, Math.min(value, 100))}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="muted-copy">No structured stat profile is currently available.</p>
          )}
        </article>

        <article className="section-surface">
          <h2>Sources</h2>
          <dl className="profile-data-grid">
            <div>
              <dt>Image Source</dt>
              <dd>{character.imageSource}</dd>
            </div>
            <div>
              <dt>Profile Source</dt>
              <dd>{character.sourceTitle || "Compiled reference data"}</dd>
            </div>
          </dl>

          {character.sourceDescription ? <p className="muted-copy source-desc">{character.sourceDescription}</p> : null}

          {character.sourceUrl ? (
            <p className="source-link-wrap">
              <a href={character.sourceUrl} target="_blank" rel="noopener noreferrer" className="source-link">
                Open source reference
              </a>
            </p>
          ) : null}
        </article>
      </section>
    </main>
  );
}
