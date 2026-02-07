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
          This page explains how revenue may be generated in the future while preserving editorial integrity for profile
          content.
        </p>
      </section>

      <section className="section-surface">
        <h2>Advertising</h2>
        <p className="policy-copy">
          The site may display ads through third-party networks. Ad placement does not change how profiles are structured
          or ranked.
        </p>
      </section>

      <section className="section-surface">
        <h2>Sponsorships and Partnerships</h2>
        <p className="policy-copy">
          Any paid placement, sponsored sections, or partner content will be clearly labeled.
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

