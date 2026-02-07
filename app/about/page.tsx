import type { Metadata } from "next";

import { buildPageMetadata } from "@/app/lib/pageMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "About Cinematic Universes",
  description: "Learn the mission, editorial approach, and update process behind the Cinematic Universes knowledge base.",
  path: "/about",
  keywords: ["about cinematic universes", "editorial policy", "MCU DC knowledge base"],
});

export default function AboutPage() {
  return (
    <main className="policy-stack">
      <section className="section-surface page-intro">
        <p className="eyebrow">About</p>
        <h1>About Cinematic Universes</h1>
        <p>
          Cinematic Universes is a fan-built MCU and DC encyclopedia focused on structured profiles, clear navigation,
          and source-attributed character data.
        </p>
      </section>

      <section className="section-surface">
        <h2>Mission</h2>
        <p className="policy-copy">
          Make cinematic universe knowledge easier to browse by organizing heroes, villains, and antiheroes into one
          searchable experience that works on both mobile and desktop.
        </p>
      </section>

      <section className="section-surface">
        <h2>Editorial Approach</h2>
        <ul className="profile-list">
          <li>Profiles are generated from structured datasets and reviewed for completeness.</li>
          <li>Image and profile source attribution is displayed on character pages.</li>
          <li>Coverage is expanded iteratively to include expected high-interest characters.</li>
        </ul>
      </section>

      <section className="section-surface">
        <h2>Update Cycle</h2>
        <p className="policy-copy">
          The dataset is maintained through generation and validation scripts, then shipped through GitHub and Vercel.
          The Coverage dashboard shows the latest build timestamp.
        </p>
      </section>
    </main>
  );
}

