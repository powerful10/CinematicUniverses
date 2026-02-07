import { dcJusticeLeagueFocus, dcUniverseZones } from "@/app/data/worldbuilding";

export default function JusticeLeaguePage() {
  return (
    <main>
      <section className="section-surface page-intro">
        <p className="eyebrow">Team Doctrine</p>
        <h1>Justice League</h1>
        <p>Cross-domain defensive alliance coordinating Earth&apos;s highest-capability heroes.</p>
      </section>

      <section className="section-surface">
        <h2>Strategic Focus</h2>
        <ul className="profile-list">
          {dcJusticeLeagueFocus.map((focus) => (
            <li key={focus}>{focus}</li>
          ))}
        </ul>
      </section>

      <section className="info-grid">
        {dcUniverseZones.map((zone) => (
          <article key={zone.zone} className="section-surface">
            <h2>{zone.zone}</h2>
            <p>{zone.note}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
