"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import AdBanner from "@/app/components/ads/AdBanner";
import ShareButton from "@/app/components/characters/ShareButton";
import { withBasePath } from "@/app/lib/basePath";

export type CompareCharacter = {
  id: string;
  name: string;
  alias: string | null;
  universe: "mcu" | "dc";
  faction: string;
  alignment: string;
  image: string;
  route: string;
  abilities: string[];
  stats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
};

const statLabels: Array<{ key: keyof CompareCharacter["stats"]; label: string }> = [
  { key: "intelligence", label: "Intelligence" },
  { key: "strength", label: "Strength" },
  { key: "speed", label: "Speed" },
  { key: "durability", label: "Durability" },
  { key: "power", label: "Power" },
  { key: "combat", label: "Combat" },
];

function totalScore(c: CompareCharacter): number {
  return (
    c.stats.intelligence +
    c.stats.strength +
    c.stats.speed +
    c.stats.durability +
    c.stats.power +
    c.stats.combat
  );
}

function computeWinProbability(a: CompareCharacter, b: CompareCharacter): { pctA: number; pctB: number } {
  const sA = totalScore(a);
  const sB = totalScore(b);
  const diff = sA - sB;
  const raw = 1 / (1 + Math.exp(-diff / 42));
  const pctA = Math.min(92, Math.max(8, Math.round(raw * 100)));
  return { pctA, pctB: 100 - pctA };
}

function buildFightAnalysis(a: CompareCharacter, b: CompareCharacter) {
  const meleeA = a.stats.strength * 0.45 + a.stats.combat * 0.4 + a.stats.durability * 0.15;
  const meleeB = b.stats.strength * 0.45 + b.stats.combat * 0.4 + b.stats.durability * 0.15;
  const meleeWinner = meleeA >= meleeB ? a : b;

  const prepA = a.stats.intelligence * 0.65 + a.stats.power * 0.35;
  const prepB = b.stats.intelligence * 0.65 + b.stats.power * 0.35;
  const prepWinner = prepA >= prepB ? a : b;

  const survA = a.stats.durability * 0.6 + a.stats.speed * 0.4;
  const survB = b.stats.durability * 0.6 + b.stats.speed * 0.4;
  const survWinner = survA >= survB ? a : b;

  const abilityA = a.abilities[0] || "signature combat style";
  const abilityB = b.abilities[0] || "signature combat style";

  return [
    {
      title: "Close-Quarters & Physical Clash",
      winner: meleeWinner.name,
      detail: `${meleeWinner.name} holds the edge in hand-to-hand exchanges (Strength ${meleeWinner.stats.strength}, Combat ${meleeWinner.stats.combat}).`,
    },
    {
      title: "Tactical & Power Advantage",
      winner: prepWinner.name,
      detail: `${prepWinner.name} leads in battle IQ and energy/ability output (Intelligence ${prepWinner.stats.intelligence}, Power ${prepWinner.stats.power}).`,
    },
    {
      title: "Survival & Endurance Odds",
      winner: survWinner.name,
      detail: `${survWinner.name} has higher survivability under sustained pressure (Durability ${survWinner.stats.durability}, Speed ${survWinner.stats.speed}).`,
    },
    {
      title: "Key Deciding Factor",
      winner: `${a.name} vs ${b.name}`,
      detail: `If ${a.name} leverages ${abilityA}, it forces ${b.name} to rely on ${abilityB} to turn the tide.`,
    },
  ];
}

function FighterPicker({
  label,
  selected,
  characters,
  onSelect,
}: {
  label: string;
  selected: CompareCharacter;
  characters: CompareCharacter[];
  onSelect: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filterUniverse, setFilterUniverse] = useState<"all" | "mcu" | "dc">("all");
  const [filterFaction, setFilterFaction] = useState<"all" | "heroes" | "villains" | "antiheroes">("all");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onDocClick = (e: MouseEvent | TouchEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (containerRef.current && containerRef.current.contains(target)) {
        return;
      }
      setOpen(false);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    // Use click and touchstart rather than mousedown so scrollbar dragging doesn't prematurely trigger close
    const timer = setTimeout(() => {
      document.addEventListener("click", onDocClick);
      document.addEventListener("keydown", onKeyDown);
    }, 10);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return characters.filter((c) => {
      if (filterUniverse !== "all" && c.universe !== filterUniverse) return false;
      if (filterFaction !== "all" && c.faction !== filterFaction) return false;
      if (!q) return true;
      return (
        c.name.toLowerCase().includes(q) ||
        (c.alias || "").toLowerCase().includes(q) ||
        c.universe.toLowerCase().includes(q) ||
        c.faction.toLowerCase().includes(q)
      );
    });
  }, [characters, search, filterUniverse, filterFaction]);

  return (
    <div className={`fighter-picker ${open ? "is-open" : ""}`} ref={containerRef}>
      <span className="fighter-picker-label">{label}</span>
      <button
        type="button"
        className="fighter-picker-trigger"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span>
          <strong>{selected.name}</strong>{" "}
          <small className="fighter-picker-meta">
            ({selected.universe.toUpperCase()} • {selected.faction})
          </small>
        </span>
        <span className="fighter-picker-chevron" aria-hidden="true">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div
          className="fighter-picker-dropdown"
          onClick={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <div className="fighter-picker-header">
            <span className="fighter-picker-title">
              Choose Character ({filtered.length} found)
            </span>
            <button
              type="button"
              className="fighter-picker-close"
              onClick={() => setOpen(false)}
              aria-label="Close picker"
            >
              ✕
            </button>
          </div>

          <div className="fighter-picker-filters">
            <div className="fighter-picker-chips">
              <button
                type="button"
                className={`picker-chip ${filterUniverse === "all" ? "active" : ""}`}
                onClick={() => setFilterUniverse("all")}
              >
                All Universes
              </button>
              <button
                type="button"
                className={`picker-chip ${filterUniverse === "mcu" ? "active" : ""}`}
                onClick={() => setFilterUniverse("mcu")}
              >
                Marvel (MCU)
              </button>
              <button
                type="button"
                className={`picker-chip ${filterUniverse === "dc" ? "active" : ""}`}
                onClick={() => setFilterUniverse("dc")}
              >
                DC Comics
              </button>
            </div>
            <div className="fighter-picker-chips">
              <button
                type="button"
                className={`picker-chip ${filterFaction === "all" ? "active" : ""}`}
                onClick={() => setFilterFaction("all")}
              >
                All Types
              </button>
              <button
                type="button"
                className={`picker-chip ${filterFaction === "heroes" ? "active" : ""}`}
                onClick={() => setFilterFaction("heroes")}
              >
                Heroes
              </button>
              <button
                type="button"
                className={`picker-chip ${filterFaction === "villains" ? "active" : ""}`}
                onClick={() => setFilterFaction("villains")}
              >
                Villains
              </button>
              <button
                type="button"
                className={`picker-chip ${filterFaction === "antiheroes" ? "active" : ""}`}
                onClick={() => setFilterFaction("antiheroes")}
              >
                Antiheroes
              </button>
            </div>
          </div>

          <input
            type="search"
            className="fighter-picker-search"
            placeholder="Search by name (e.g. Hulk, Batman, Red Hulk, Joker)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="fighter-picker-list" role="listbox">
            {filtered.length > 0 ? (
              filtered.map((c) => {
                const isSelected = c.id === selected.id;
                return (
                  <button
                    key={`${label}-${c.universe}-${c.id}`}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    className={`fighter-picker-option ${isSelected ? "active" : ""}`}
                    onClick={() => {
                      onSelect(c.id);
                      setOpen(false);
                      setSearch("");
                    }}
                  >
                    <span className="fighter-picker-option-name">{c.name}</span>
                    <span className="fighter-picker-option-meta">
                      {c.universe.toUpperCase()} • {c.faction}
                    </span>
                  </button>
                );
              })
            ) : (
              <p className="fighter-picker-empty">
                No fighters match &ldquo;{search}&rdquo; with current filters.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

const presets: Array<{ label: string; a: string; b: string }> = [
  { label: "Hulk vs Red Hulk", a: "Hulk", b: "RedHulk" },
  { label: "Iron Man vs Batman", a: "IronMan", b: "Batman" },
  { label: "Thanos vs Darkseid", a: "Thanos", b: "Darkseid" },
  { label: "Thor vs Superman", a: "Thor", b: "Superman" },
  { label: "Spider-Man vs Flash", a: "SpiderMan", b: "Flash" },
  { label: "Wolverine vs Deathstroke", a: "Wolverine", b: "Deathstroke" },
  { label: "Doctor Strange vs Doctor Fate", a: "DoctorStrange", b: "DoctorFate" },
];

export default function CompareArenaClient({ characters }: { characters: CompareCharacter[] }) {
  const defaultA = characters.find((c) => c.id.toLowerCase().includes("ironman")) || characters[0];
  const defaultB =
    characters.find((c) => c.id.toLowerCase().includes("batman")) ||
    characters.find((c) => c.universe === "dc") ||
    characters[1];

  const [idA, setIdA] = useState(defaultA?.id || "");
  const [idB, setIdB] = useState(defaultB?.id || "");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const qa = params.get("a");
    const qb = params.get("b");
    if (qa && characters.some((c) => c.id === qa)) setIdA(qa);
    if (qb && characters.some((c) => c.id === qb)) setIdB(qb);
  }, [characters]);

  useEffect(() => {
    if (typeof window === "undefined" || !idA || !idB) return;
    const url = new URL(window.location.href);
    url.searchParams.set("a", idA);
    url.searchParams.set("b", idB);
    window.history.replaceState({}, "", url.toString());
  }, [idA, idB]);

  const charA = useMemo(
    () => characters.find((c) => c.id === idA) || defaultA,
    [characters, idA, defaultA]
  );
  const charB = useMemo(
    () => characters.find((c) => c.id === idB) || defaultB,
    [characters, idB, defaultB]
  );

  if (!charA || !charB) return null;

  const scoreA = totalScore(charA);
  const scoreB = totalScore(charB);
  const { pctA, pctB } = computeWinProbability(charA, charB);
  const winner = scoreA === scoreB ? null : scoreA > scoreB ? charA : charB;
  const fightAnalysis = buildFightAnalysis(charA, charB);

  const applyPreset = (aKey: string, bKey: string) => {
    const clean = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");
    const targetA = clean(aKey);
    const targetB = clean(bKey);
    const foundA =
      characters.find((c) => clean(c.id) === targetA || clean(c.name) === targetA) ||
      characters.find((c) => clean(c.id).includes(targetA) || clean(c.name).includes(targetA));
    const foundB =
      characters.find((c) => clean(c.id) === targetB || clean(c.name) === targetB) ||
      characters.find((c) => clean(c.id).includes(targetB) || clean(c.name).includes(targetB));
    if (foundA) setIdA(foundA.id);
    if (foundB) setIdB(foundB.id);
  };

  return (
    <div className="compare-arena">
      <section className="section-surface compare-presets">
        <div className="compare-preset-row">
          <span className="directory-chip-label">Popular Matchups:</span>
          {presets.map((p) => (
            <button
              key={p.label}
              type="button"
              className="filter-chip"
              onClick={() => applyPreset(p.a, p.b)}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="compare-selectors">
          <FighterPicker
            label="Fighter 1"
            selected={charA}
            characters={characters}
            onSelect={setIdA}
          />

          <div className="compare-vs-badge" aria-hidden="true">
            VS
          </div>

          <FighterPicker
            label="Fighter 2"
            selected={charB}
            characters={characters}
            onSelect={setIdB}
          />
        </div>
      </section>

      <section className="section-surface compare-odds-banner">
        <div className="compare-odds-labels">
          <span>
            <strong>{charA.name}</strong> Win Chance: <strong>{pctA}%</strong>
          </span>
          <span>
            <strong>{charB.name}</strong> Win Chance: <strong>{pctB}%</strong>
          </span>
        </div>
        <div className="compare-odds-track" role="img" aria-label={`Win probability ${pctA}% vs ${pctB}%`}>
          <div className="compare-odds-fill-a" style={{ width: `${pctA}%` }} />
          <div className="compare-odds-fill-b" style={{ width: `${pctB}%` }} />
        </div>
      </section>

      <section className="compare-fighters-grid">
        {[
          { char: charA, score: scoreA, pct: pctA },
          { char: charB, score: scoreB, pct: pctB },
        ].map(({ char, score, pct }, idx) => (
          <article key={`fighter-card-${idx}-${char.id}`} className="section-surface compare-fighter-card">
            <div className="compare-fighter-media">
              <Image
                src={withBasePath(char.image)}
                alt={char.name}
                width={320}
                height={420}
              />
            </div>
            <div className="compare-fighter-info">
              <p className="profile-kicker">
                {char.universe.toUpperCase()} • {char.alignment} • {pct}% Odds
              </p>
              <h2>{char.name}</h2>
              {char.alias ? <p className="character-card-alias">{char.alias}</p> : null}
              <p className="compare-total-score">Total Power: <strong>{score} / 600</strong></p>
              <div className="chip-row" style={{ marginTop: "0.4rem" }}>
                {char.abilities.slice(0, 3).map((ab) => (
                  <span key={ab} className="chip">{ab}</span>
                ))}
              </div>
              <Link href={char.route} className="pill-link muted" style={{ marginTop: "0.6rem", display: "inline-block" }}>
                View Full Dossier →
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="section-surface compare-breakdown">
        <div className="compare-verdict-header">
          <div>
            <p className="eyebrow">Stat-by-Stat Verdict</p>
            <h2>
              {winner
                ? `${winner.name} Wins (${Math.max(pctA, pctB)}% Survival & Win Chance)`
                : `50% / 50% Dead-Even Matchup (${scoreA} vs ${scoreB})`}
            </h2>
          </div>
          <ShareButton
            title={`${charA.name} vs ${charB.name} (${pctA}% vs ${pctB}%) — Cinematic Universes`}
            text={`Who wins in a fight: ${charA.name} (${pctA}%) or ${charB.name} (${pctB}%)? Check the full breakdown!`}
            label="Share Battle Link"
            className="pill-link"
          />
        </div>

        <div className="compare-stat-rows">
          {statLabels.map(({ key, label }) => {
            const valA = charA.stats[key];
            const valB = charB.stats[key];
            return (
              <div key={key} className="compare-stat-row">
                <div className="compare-stat-head">
                  <strong className={valA >= valB ? "stat-win" : ""}>{valA}</strong>
                  <span>{label}</span>
                  <strong className={valB >= valA ? "stat-win" : ""}>{valB}</strong>
                </div>
                <div className="compare-dual-bar">
                  <div className="compare-bar-left">
                    <span style={{ width: `${Math.max(4, valA)}%` }} />
                  </div>
                  <div className="compare-bar-right">
                    <span style={{ width: `${Math.max(4, valB)}%` }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-surface">
        <p className="eyebrow">Tactical Simulation</p>
        <h2 style={{ marginBottom: "0.8rem" }}>How the Fight Plays Out</h2>
        <div className="faq-grid">
          {fightAnalysis.map((item) => (
            <article key={item.title} className="faq-card">
              <h3>{item.title}</h3>
              <p className="profile-kicker" style={{ marginBottom: "0.2rem" }}>Edge: {item.winner}</p>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <AdBanner
        label="Sponsored Matchup Offer"
        title="Level Up Your Fandom — Exclusive Superhero & Gaming Deals"
        description="Explore trending partner promotions while comparing your favorite MCU and DC legends."
        ctaText="Check Partner Deal →"
      />
    </div>
  );
}
