import Link from "next/link";
import React from "react";

type AdBannerProps = {
  label?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  className?: string;
};

export default function AdBanner({
  label = "Battle Arena Spotlight",
  title = "Compare 247 Marvel & DC Legends in Head-to-Head Tactical Simulation",
  description = "Calculate win probability %, survival endurance, and tactical matchups with real comic & cinematic power stats.",
  ctaText = "Enter Battle Arena →",
  className = "",
}: AdBannerProps) {
  return (
    <aside className={`ad-slot-surface ${className}`.trim()} aria-label={label}>
      <Link
        href="/compare"
        className="direct-link-promo"
      >
        <div className="direct-link-content">
          <div className="direct-link-BadgeRow">
            <span className="ad-slot-badge">{label}</span>
            <span className="direct-link-pill">Interactive Arena</span>
          </div>
          <h3 className="direct-link-title">{title}</h3>
          <p className="direct-link-desc">{description}</p>
        </div>
        <div className="direct-link-action">
          <span className="direct-link-cta">{ctaText}</span>
        </div>
      </Link>
    </aside>
  );
}
