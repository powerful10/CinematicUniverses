"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

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
  // Smooth logistic curve capped between 8% and 92% so every matchup feels realistic
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

const presets: Array<{ label: string; a: string; b: string }> = [
  { label: "Hulk vs Red Hulk", a: "hulk", b: "red-hulk" },
  { label: "Iron Man vs Batman", a: "iron-man", b: "batman" },
  { label: "Thanos vs Darkseid", a: "thanos", b: "darkseid" },
  { label: "Thor vs Superman", a: "thor", b: "superman" },
  { label: "Spider-Man vs Flash", a: "spider-man", b: "flash" },
];

export default function CompareArenaClient({ characters }: { characters: CompareCharacter[] }) {
  const defaultA = characters.find((c) => c.id.toLowerCase().includes("iron-man")) || characters[0];
  const defaultB =
    characters.find((c) => c.id.toLowerCase().includes("batman")) ||
    characters.find((c) => c.universe === "dc") ||
    characters[1];

  const [idA, setIdA] = useState(defaultA?.id || "");
  const [idB, setIdB] = useState(defaultB?.id || "");

  // Sync from URL query params (?a=...&b=...) on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const qa = params.get("a");
    const qb = params.get("b");
    if (qa && characters.some((c) => c.id === qa)) setIdA(qa);
    if (qb && characters.some((c) => c.id === qb)) setIdB(qb);
  }, [characters]);

  // Keep URL updated for instant sharing
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
    const foundA =
      characters.find((c) => c.id.toLowerCase() === aKey) ||
      characters.find((c) => c.id.toLowerCase().includes(aKey));
    const foundB =
      characters.find((c) => c.id.toLowerCase() === bKey) ||
      characters.find((c) => c.id.toLowerCase().includes(bKey));
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
          <div className="directory-toolbar-field">
            <label htmlFor="fighter-a">Fighter 1</label>
            <select id="fighter-a" value={charA.id} onChange={(e) => setIdA(e.target.value)}>
              {characters.map((c) => (
                <option key={`a-${c.universe}-${c.id}`} value={c.id}>
                  {c.name} ({c.universe.toUpperCase()})
                </option>
              ))}
            </select>
          </div>

          <div className="compare-vs-badge" aria-hidden="true">
            VS
          </div>

          <div className="directory-toolbar-field">
            <label htmlFor="fighter-b">Fighter 2</label>
            <select id="fighter-b" value={charB.id} onChange={(e) => setIdB(e.target.value)}>
              {characters.map((c) => (
                <option key={`b-${c.universe}-${c.id}`} value={c.id}>
                  {c.name} ({c.universe.toUpperCase()})
                </option>
              ))}
            </select>
          </div>
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
