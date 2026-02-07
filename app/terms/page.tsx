import type { Metadata } from "next";

import { buildPageMetadata } from "@/app/lib/pageMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Use",
  description: "Read the terms governing use of the Cinematic Universes website and its informational content.",
  path: "/terms",
  keywords: ["terms of use", "cinematic universes terms", "website usage terms"],
});

export default function TermsPage() {
  return (
    <main className="policy-stack">
      <section className="section-surface page-intro">
        <p className="eyebrow">Policy</p>
        <h1>Terms of Use</h1>
        <p>Effective date: February 7, 2026.</p>
      </section>

      <section className="section-surface">
        <h2>Use of Content</h2>
        <p className="policy-copy">
          Cinematic Universes is provided for informational purposes. Users may browse and reference content for
          personal, non-commercial use unless otherwise permitted by law.
        </p>
      </section>

      <section className="section-surface">
        <h2>Accuracy and Updates</h2>
        <p className="policy-copy">
          Content is maintained with care but may contain errors or omissions. The site may be updated, corrected, or
          restructured at any time.
        </p>
      </section>

      <section className="section-surface">
        <h2>Intellectual Property Notice</h2>
        <p className="policy-copy">
          Character names, marks, and universe properties belong to their respective rights holders. This site is an
          independent fan information project and is not affiliated with Marvel, DC, Disney, Warner Bros., or related
          entities.
        </p>
      </section>

      <section className="section-surface">
        <h2>Limitation of Liability</h2>
        <p className="policy-copy">
          The site is provided &quot;as is&quot; without warranties. The operator is not liable for damages arising from use of
          the site or reliance on its content.
        </p>
      </section>
    </main>
  );
}
