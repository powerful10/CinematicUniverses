"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/mcu", label: "MCU" },
  { href: "/dc", label: "DC" },
  { href: "/mcu/heroes", label: "MCU Heroes" },
  { href: "/mcu/villains", label: "MCU Villains" },
  { href: "/dc/heroes", label: "DC Heroes" },
  { href: "/dc/villains", label: "DC Villains" },
  { href: "/coverage", label: "Coverage" },
];

function isRouteActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function MainNav() {
  const pathname = usePathname();
  const [menuState, setMenuState] = useState({ path: pathname, open: false });
  const menuOpen = menuState.path === pathname ? menuState.open : false;

  return (
    <header className="main-nav-wrap">
      <div className="main-nav-inner">
        <div className="main-nav-topline">
          <Link href="/" className="brand-mark">
            Cinematic Universes
          </Link>

          <button
            type="button"
            className="main-nav-toggle"
            onClick={() => setMenuState({ path: pathname, open: !menuOpen })}
            aria-expanded={menuOpen}
            aria-controls="main-primary-nav"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        <nav
          id="main-primary-nav"
          className="main-nav-links"
          data-open={menuOpen ? "true" : "false"}
          aria-label="Primary"
        >
          {links.map((link) => {
            const active = isRouteActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuState({ path: pathname, open: false })}
                className={active ? "main-nav-link active" : "main-nav-link"}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
