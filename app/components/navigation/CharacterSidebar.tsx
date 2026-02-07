"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type SidebarItem = {
  name: string;
  href: string;
  alias?: string | null;
};

type CharacterSidebarProps = {
  title: string;
  subtitle: string;
  items: SidebarItem[];
};

export default function CharacterSidebar({ title, subtitle, items }: CharacterSidebarProps) {
  const [open, setOpen] = useState(false);
  const navId = useMemo(
    () => `sidebar-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`,
    [title],
  );

  return (
    <aside className="character-sidebar">
      <div className="character-sidebar-header">
        <div>
          <p className="character-sidebar-kicker">Directory</p>
          <h2 className="character-sidebar-title">{title}</h2>
          <p className="character-sidebar-subtitle">{subtitle}</p>
        </div>

        <button
          type="button"
          className="character-sidebar-toggle"
          aria-expanded={open}
          aria-controls={navId}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? "Hide Profiles" : `Browse Profiles (${items.length})`}
        </button>
      </div>

      <nav
        id={navId}
        className="character-sidebar-links"
        data-open={open ? "true" : "false"}
        aria-label={`${title} navigation`}
      >
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="character-sidebar-link">
            <span>{item.name}</span>
            {item.alias ? <small>{item.alias}</small> : null}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
