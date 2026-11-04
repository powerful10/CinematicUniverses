import type { Metadata } from "next";

import { buildPageMetadata } from "@/app/lib/pageMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Monetization and Disclosure",
  description: "Transparency page for future advertising, sponsorship, and monetization policies on Cinematic Universes.",
  path: "/monetization",
  keywords: ["ad disclosure", "monetization policy", "sponsorship transparency"],
});

export default function MonetizationPage() {
  return (
    <main className="policy-stack">
      <section className="section-surface page-intro">
        <p className="eyebrow">Disclosure</p>
        <h1>Monetization and Transparency</h1>
        <p>
          This page explains how Cinematic Universes generates revenue to support hosting and dataset curation while
          preserving editorial integrity and a clean reader experience.
        </p>
      </section>

      <section className="section-surface">
        <h2>Advertising Formats</h2>
        <p className="policy-copy">
          The site displays non-intrusive advertisements through third-party networks including Google AdSense and
          Monetag (such as responsive display banners, vignette transitions, and corner notifications). Ad placement
          never alters how character profiles are structured, scored, or ranked.
        </p>
      </section>

      <section className="section-surface">
        <h2>Sponsorships and Partnerships</h2>
        <p className="policy-copy">
          Any paid placement, sponsored sections, or partner content is clearly labeled as Sponsored.
        </p>
      </section>

      <section className="section-surface">
        <h2>Editorial Independence</h2>
        <p className="policy-copy">
          Data quality, source attribution, and coverage decisions are managed by editorial criteria, not by advertisers.
        </p>
      </section>
    </main>
  );
}

