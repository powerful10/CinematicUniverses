import { mcuTimelineMilestones } from "@/app/data/worldbuilding";

export default function MCUTimelinePage() {
  return (
    <main>
      <section className="section-surface page-intro">
        <p className="eyebrow">Chronology</p>
        <h1>MCU Timeline</h1>
        <p>Major historical anchors from the super-soldier era through multiversal instability.</p>
      </section>

      <section className="timeline-stack">
        {mcuTimelineMilestones.map((milestone) => (
          <article key={milestone.title} className="section-surface timeline-row">
            <span>{milestone.year}</span>
            <div>
              <h2>{milestone.title}</h2>
              <p>{milestone.description}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
