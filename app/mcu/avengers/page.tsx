import { avengersOperationalPillars } from "@/app/data/worldbuilding";

export default function AvengersPage() {
  return (
    <main>
      <section className="section-surface page-intro">
        <p className="eyebrow">Team Doctrine</p>
        <h1>The Avengers</h1>
        <p>Earth&apos;s premier rapid-response coalition for global, cosmic, and existential crisis management.</p>
      </section>

      <section className="section-surface">
        <h2>Operational Pillars</h2>
        <ul className="profile-list">
          {avengersOperationalPillars.map((pillar) => (
            <li key={pillar}>{pillar}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
