import type { Metadata } from "next";
import Link from "next/link";

import { buildPageMetadata } from "@/app/lib/pageMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description: "Contact Cinematic Universes for corrections, source updates, collaborations, or business inquiries.",
  path: "/contact",
  keywords: ["cinematic universes contact", "report data corrections", "business inquiry"],
});

export default function ContactPage() {
  return (
    <main className="policy-stack">
      <section className="section-surface page-intro">
        <p className="eyebrow">Contact</p>
        <h1>Contact and Corrections</h1>
        <p>
          Use this page for profile corrections, source feedback, collaboration requests, and monetization-related
          communication.
        </p>
      </section>

      <section className="section-surface contact-card">
        <h2>Main Contact</h2>
        <p className="policy-copy">
          Update this with your real contact email before applying for monetization:
          <br />
          <strong>your-email@example.com</strong>
        </p>
      </section>

      <section className="section-surface">
        <h2>What to include in your message</h2>
        <ul className="profile-list">
          <li>Page URL</li>
          <li>Issue description or request</li>
          <li>Reference source link (if reporting data/image issue)</li>
        </ul>
        <p className="policy-meta">
          For legal or policy details, see <Link href="/privacy">Privacy Policy</Link> and{" "}
          <Link href="/terms">Terms</Link>.
        </p>
      </section>
    </main>
  );
}

