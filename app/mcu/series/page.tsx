import { mcuSeriesHighlights } from "@/app/data/worldbuilding";

export default function MCUSeriesPage() {
  return (
    <main>
      <section className="section-surface page-intro">
        <p className="eyebrow">Streaming Expansion</p>
        <h1>MCU Series</h1>
        <p>Key television arcs that extend character development and introduce major multiverse pressure points.</p>
      </section>

      <section className="info-grid">
        {mcuSeriesHighlights.map((series) => (
          <article key={series.title} className="section-surface">
            <h2>{series.title}</h2>
            <p>{series.focus}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
