"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <header className="main-nav-wrap">
      <div className="main-nav-inner">
        <Link href="/" className="brand-mark">
          Cinematic Universes
        </Link>

        <nav className="main-nav-links" aria-label="Primary">
          {links.map((link) => {
            const active = isRouteActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
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
