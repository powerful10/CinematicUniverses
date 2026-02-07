import { dcSuicideSquadModel } from "@/app/data/worldbuilding";

export default function SuicideSquadPage() {
  return (
    <main>
      <section className="section-surface page-intro">
        <p className="eyebrow">Task Force X</p>
        <h1>Suicide Squad</h1>
        <p>Coercive black-ops framework for deniable missions beyond traditional hero or military protocols.</p>
      </section>

      <section className="section-surface">
        <h2>Operational Model</h2>
        <ul className="profile-list">
          {dcSuicideSquadModel.map((entry) => (
            <li key={entry}>{entry}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
