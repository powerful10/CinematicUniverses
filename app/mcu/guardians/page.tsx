import { guardiansOperationalPillars } from "@/app/data/worldbuilding";

export default function GuardiansPage() {
  return (
    <main>
      <section className="section-surface page-intro">
        <p className="eyebrow">Team Doctrine</p>
        <h1>Guardians of the Galaxy</h1>
        <p>A mobile cosmic strike group operating through trust, improvisation, and high-threat adaptation.</p>
      </section>

      <section className="section-surface">
        <h2>Operational Pillars</h2>
        <ul className="profile-list">
          {guardiansOperationalPillars.map((pillar) => (
            <li key={pillar}>{pillar}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
