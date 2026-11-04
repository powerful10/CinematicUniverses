import React from "react";

type AdBannerProps = {
  label?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  className?: string;
};

const MONETAG_DIRECT_LINK = "https://uplcm.com/4/12193075";

export default function AdBanner({
  label = "Sponsored Spotlight",
  title = "Unlock Exclusive Superhero Gaming, Streaming & Collector Deals",
  description = "Discover trending partner offers, entertainment perks, and featured multiverse promotions curated for fans.",
  ctaText = "Explore Partner Offer →",
  className = "",
}: AdBannerProps) {
  return (
    <aside className={`ad-slot-surface ${className}`.trim()} aria-label={label}>
      <a
        href={MONETAG_DIRECT_LINK}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="direct-link-promo"
      >
        <div className="direct-link-content">
          <div className="direct-link-BadgeRow">
            <span className="ad-slot-badge">{label}</span>
            <span className="direct-link-pill">Featured Partner</span>
          </div>
          <h3 className="direct-link-title">{title}</h3>
          <p className="direct-link-desc">{description}</p>
        </div>
        <div className="direct-link-action">
          <span className="direct-link-cta">{ctaText}</span>
        </div>
      </a>
    </aside>
  );
}
