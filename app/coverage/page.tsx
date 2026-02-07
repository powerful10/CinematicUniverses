import type { Metadata } from "next";
import Link from "next/link";

import { charactersUpdatedAt, getUniverseBreakdown, getUniverseCharacterCount } from "@/app/data/characters";
import { buildPageMetadata } from "@/app/lib/pageMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Coverage Dashboard",
  description: "See MCU and DC roster counts, dataset build timestamp, and scope notes for indexed character coverage.",
  path: "/coverage",
  keywords: ["MCU roster count", "DC roster count", "character coverage dashboard"],
});

const scopeNotes = [
  "Primary focus is MCU and DC cinematic continuity with high-impact adjacent characters users commonly expect.",
  "Character pages are data-driven and include source attribution for profile and image provenance.",
  "Rosters are actively maintainable through the generator pipeline and validation scripts.",
];

function dateLabel(value: string): string {
  return new Date(value).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function CoveragePage() {
  const mcu = getUniverseBreakdown("mcu");
  const dc = getUniverseBreakdown("dc");

  return (
    <main>
      <section className="section-surface page-intro">
        <p className="eyebrow">Phase 3 Coverage</p>
        <h1>Roster Scope and Completeness</h1>
        <p>
          This dashboard shows current indexing coverage and the exact update stamp of the generated profile dataset.
        </p>
      </section>

      <section className="info-grid">
        <article className="section-surface">
          <h2>MCU Coverage</h2>
          <ul className="profile-list">
            <li>Heroes: {mcu.heroes}</li>
            <li>Villains: {mcu.villains}</li>
            <li>Antiheroes: {mcu.antiheroes}</li>
            <li>Total: {getUniverseCharacterCount("mcu")}</li>
          </ul>
          <p className="source-desc">
            <Link href="/mcu">Open MCU hub</Link>
          </p>
        </article>

        <article className="section-surface">
          <h2>DC Coverage</h2>
          <ul className="profile-list">
            <li>Heroes: {dc.heroes}</li>
            <li>Villains: {dc.villains}</li>
            <li>Antiheroes: {dc.antiheroes}</li>
            <li>Total: {getUniverseCharacterCount("dc")}</li>
          </ul>
          <p className="source-desc">
            <Link href="/dc">Open DC hub</Link>
          </p>
        </article>

        <article className="section-surface">
          <h2>Dataset Build</h2>
          <p>Last generated: {dateLabel(charactersUpdatedAt)}</p>
          <p className="source-desc">
            Data lives in <code>app/data/characters.generated.json</code> and is refreshed by the generator script.
          </p>
        </article>
      </section>

      <section className="section-surface">
        <h2>Scope Notes</h2>
        <ul className="profile-list">
          {scopeNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

