import type { Metadata } from "next";

import { buildPageMetadata } from "@/app/lib/pageMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description: "Read the privacy practices for Cinematic Universes, including analytics, logs, and third-party services.",
  path: "/privacy",
  keywords: ["privacy policy", "cinematic universes privacy", "website analytics privacy"],
});

export default function PrivacyPage() {
  return (
    <main className="policy-stack">
      <section className="section-surface page-intro">
        <p className="eyebrow">Policy</p>
        <h1>Privacy Policy</h1>
        <p>Effective date: February 7, 2026.</p>
      </section>

      <section className="section-surface">
        <h2>Information We Collect</h2>
        <ul className="profile-list">
          <li>Basic technical logs such as browser type, device type, and page visits.</li>
          <li>Performance and traffic insights from hosting analytics providers.</li>
          <li>No account system is currently used on this site.</li>
        </ul>
      </section>

      <section className="section-surface">
        <h2>How Data Is Used</h2>
        <ul className="profile-list">
          <li>Improve site reliability, usability, and content quality.</li>
          <li>Detect abuse and security issues.</li>
          <li>Measure page engagement and technical performance.</li>
        </ul>
      </section>

      <section className="section-surface">
        <h2>Third-Party Services &amp; Advertising</h2>
        <p className="policy-copy">
          The site uses hosting, analytics, search indexing, and advertising services including Vercel, Google Search
          Console, Bing Webmaster Tools, Google AdSense, and Monetag. Advertising networks may use cookies or web
          beacons to serve relevant, frequency-capped advertisements. Those services process data under their own
          respective privacy policies.
        </p>
      </section>

      <section className="section-surface">
        <h2>Contact</h2>
        <p className="policy-copy">
          For privacy requests, use the contact details listed on the Contact page.
        </p>
      </section>
    </main>
  );
}

