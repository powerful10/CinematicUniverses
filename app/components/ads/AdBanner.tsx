"use client";

import { useEffect, useRef } from "react";

type AdBannerProps = {
  slot?: string;
  format?: "auto" | "fluid" | "rectangle" | "horizontal";
  label?: string;
  className?: string;
};

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

export default function AdBanner({
  slot = "auto",
  format = "auto",
  label = "Sponsored",
  className = "",
}: AdBannerProps) {
  const pushedRef = useRef(false);

  useEffect(() => {
    if (pushedRef.current) return;
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushedRef.current = true;
      }
    } catch {
      // AdSense may be blocked by ad blockers or waiting for approval
    }
  }, []);

  return (
    <aside className={`ad-slot-surface ${className}`.trim()} aria-label={label}>
      <div className="ad-slot-header">
        <span className="ad-slot-badge">{label}</span>
      </div>
      <div className="ad-slot-inner">
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "100%" }}
          data-ad-client="ca-pub-5266296505652960"
          data-ad-slot={slot !== "auto" ? slot : undefined}
          data-ad-format={format}
          data-full-width-responsive="true"
        />
      </div>
    </aside>
  );
}
