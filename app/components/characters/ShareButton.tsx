"use client";

import Link from "next/link";
import { useState } from "react";

type ShareButtonProps = {
  title: string;
  text?: string;
  label?: string;
  className?: string;
};

export default function ShareButton({
  title,
  text,
  label = "Share",
  className = "pill-link muted",
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
        await navigator.share({ title, text: text || title, url });
        return;
      }
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      }
    } catch {
      // User cancelled share dialog
    }
  };

  return (
    <button type="button" onClick={handleShare} className={className}>
      {copied ? "✓ Link Copied!" : `↗ ${label}`}
    </button>
  );
}
