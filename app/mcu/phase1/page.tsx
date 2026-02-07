import { mcuPhaseBreakdown } from "@/app/data/worldbuilding";

export default function MCUPhase1Page() {
  const phase = mcuPhaseBreakdown.phase1;

  return (
    <main>
      <section className="section-surface page-intro">
        <p className="eyebrow">Phase Archive</p>
        <h1>{phase.title}</h1>
        <p>{phase.years} - Foundation era that introduced core heroes and the first Avengers deployment.</p>
      </section>

      <section className="section-surface">
        <h2>Core Entries</h2>
        <ul className="profile-list">
          {phase.entries.map((entry) => (
            <li key={entry}>{entry}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
