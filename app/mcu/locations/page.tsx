import { mcuLocations } from "@/app/data/worldbuilding";

export default function MCULocationsPage() {
  return (
    <main>
      <section className="section-surface page-intro">
        <p className="eyebrow">Operational Zones</p>
        <h1>MCU Locations</h1>
        <p>Core environments where alliances form, power shifts, and universe-level incidents unfold.</p>
      </section>

      <section className="info-grid">
        {mcuLocations.map((location) => (
          <article key={location.name} className="section-surface">
            <h2>{location.name}</h2>
            <p>{location.summary}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
