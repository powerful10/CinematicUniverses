import type { Metadata } from "next";
import Link from "next/link";

import AdBanner from "@/app/components/ads/AdBanner";
import WatchOrderTracker from "@/app/components/timeline/WatchOrderTracker";
import { mcuTimelineMilestones } from "@/app/data/worldbuilding";
import { buildPageMetadata } from "@/app/lib/pageMetadata";
import { absoluteUrl } from "@/app/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "MCU Watch Order & Chronological Timeline Checklist",
  description:
    "Interactive Marvel Cinematic Universe watch order checklist. Switch between chronological and release order, filter by Phase 1–5, and track your MCU marathon progress.",
  path: "/mcu/timeline",
  keywords: [
    "MCU watch order",
    "Marvel movies in chronological order",
    "MCU timeline checklist",
    "Marvel marathon tracker",
    "MCU Phase 1 to Phase 5 order",
  ],
});

const faqs = [
  {
    q: "Should first-time viewers watch the MCU in release order or chronological order?",
    a: "First-time viewers should follow Release Order because post-credits scenes in films like Captain Marvel and Black Widow spoil major Infinity Saga reveals. Re-watchers who already know the story often enjoy Chronological Order to follow the Infinity Stones and SHIELD timeline linearly.",
  },
  {
    q: "Where does Captain Marvel fit in the MCU chronological timeline?",
    a: "Captain Marvel takes place in 1995, making it the second film chronologically right after Captain America: The First Avenger (1942–1945) and before Iron Man (2008).",
  },
  {
    q: "Do you need to watch Disney+ series to understand the Multiverse Saga?",
    a: "Loki (Season 1) and WandaVision are the two most essential series because Loki introduces the TVA and Kang variants while WandaVision sets up Doctor Strange in the Multiverse of Madness.",
  },
  {
    q: "Does this MCU watch-order tracker save my progress?",
    a: "Yes. Every movie or series you check off is stored locally in your browser so you can return anytime and continue your marathon without creating an account.",
  },
];

export default function MCUTimelinePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "MCU Interactive Watch-Order Checklist",
        applicationCategory: "EntertainmentApplication",
        operatingSystem: "Web",
        url: absoluteUrl("/mcu/timeline"),
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <main className="space-y-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="section-surface page-intro">
        <p className="eyebrow">Chronology & Marathon Builder</p>
        <h1>MCU Timeline & Interactive Watch Order</h1>
        <p>
          Switch between chronological story order and theatrical release order, filter by Phase 1–5,
          and check off every film or key series as you go. Your progress saves automatically in your browser.
        </p>
      </section>

      <WatchOrderTracker />

      <AdBanner
        label="Marathon Spotlight"
        title="Streaming, Collectibles & Multiverse Partner Deals"
        description="Explore curated entertainment offers while planning your next Phase-by-Phase Marvel marathon."
      />

      <section className="section-surface p-5 md:p-6 space-y-4">
        <p className="eyebrow">Historical Anchors</p>
        <h2 className="text-xl font-bold text-white">Key MCU Era Milestones</h2>
        <div className="timeline-stack">
          {mcuTimelineMilestones.map((milestone) => (
            <article key={milestone.title} className="section-surface timeline-row">
              <span>{milestone.year}</span>
              <div>
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-surface p-5 md:p-6 space-y-4">
        <p className="eyebrow">Watch Guide</p>
        <h2 className="text-xl font-bold text-white">Chronological vs. Release Order Explained</h2>
        <p className="text-slate-300 leading-relaxed">
          The Marvel Cinematic Universe spans more than 30 feature films and interconnected series across two
          major arcs: the Infinity Saga (Phases 1–3) and the Multiverse Saga (Phases 4–5). Because several
          prequels—most notably <em>Captain America: The First Avenger</em>, <em>Captain Marvel</em>, and{" "}
          <em>Black Widow</em>—were released years after the events they depict, chronological order reshapes
          how character arcs unfold.
        </p>
        <p className="text-slate-300 leading-relaxed">
          If this is your first marathon, toggle <strong>Release Order</strong> above so post-credits scenes
          land as intended without spoiling <em>Avengers: Endgame</em>. If you are rewatching, switch to{" "}
          <strong>Chronological Order</strong> to trace the Tesseract from World War II through the Battle of
          New York and watch the Multiverse fracture after the Time Heist. Want to compare heroes before you
          start? Try the <Link href="/versus" className="text-sky-400 underline">Character Versus & Quiz Arena</Link>{" "}
          or browse the full <Link href="/mcu/heroes" className="text-sky-400 underline">MCU Heroes Directory</Link>.
        </p>
      </section>

      <section className="section-surface p-5 md:p-6 space-y-4">
        <p className="eyebrow">FAQ</p>
        <h2 className="text-xl font-bold text-white">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((item) => (
            <article key={item.q} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="font-semibold text-white">{item.q}</h3>
              <p className="text-sm text-slate-300 mt-1.5 leading-relaxed">{item.a}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
