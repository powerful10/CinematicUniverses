import type { Metadata } from "next";

import AdBanner from "@/app/components/ads/AdBanner";
import VersusArena, { type VersusCandidate } from "@/app/components/versus/VersusArena";
import { getAllCharacters, getCharacterRoute } from "@/app/data/characters";
import { buildPageMetadata } from "@/app/lib/pageMetadata";
import { absoluteUrl } from "@/app/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "MCU vs DC Character Versus & Multiverse Quiz",
  description:
    "Compare Marvel and DC heroes, villains, and antiheroes head-to-head across six combat & power stats, plus test your knowledge with the Multiverse Trivia Quiz.",
  path: "/versus",
  keywords: [
    "Marvel vs DC comparison",
    "MCU vs DC power ranking",
    "superhero stat comparison",
    "Marvel DC trivia quiz",
  ],
});

export default function VersusPage() {
  const candidates: VersusCandidate[] = getAllCharacters()
    .filter((c) => c.stats !== null)
    .map((c) => ({
      id: `${c.universe}-${c.faction}-${c.id}`,
      name: c.name,
      universe: c.universe,
      faction: c.faction,
      alignment: c.alignment,
      debut: c.debut,
      route: getCharacterRoute(c),
      abilities: c.abilities,
      stats: c.stats!,
    }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "MCU vs DC Character Comparison Engine",
    applicationCategory: "EntertainmentApplication",
    operatingSystem: "Web",
    url: absoluteUrl("/versus"),
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <main className="space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="section-surface page-intro">
        <p className="eyebrow">Interactive Battle Lab</p>
        <h1>MCU vs. DC Versus Arena & Quiz</h1>
        <p>
          Pick any two heroes, villains, or antiheroes from our {candidates.length}-character database
          to compare intelligence, strength, speed, durability, power, and combat side by side.
        </p>
      </section>

      <VersusArena candidates={candidates} />

      <AdBanner
        label="Arena Spotlight"
        title="Superhero Gaming, Comics & Collector Offers"
        description="Check out trending multiverse partner deals after testing your favorite matchups."
      />
    </main>
  );
}
