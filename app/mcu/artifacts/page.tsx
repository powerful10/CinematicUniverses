import { mcuArtifacts } from "@/app/data/worldbuilding";

export default function MCUArtifactsPage() {
  return (
    <main>
      <section className="section-surface page-intro">
        <p className="eyebrow">Relics and Assets</p>
        <h1>MCU Artifacts</h1>
        <p>High-impact objects that repeatedly shift strategic advantage across global and cosmic conflicts.</p>
      </section>

      <section className="info-grid">
        {mcuArtifacts.map((artifact) => (
          <article key={artifact.name} className="section-surface">
            <h2>{artifact.name}</h2>
            <p>{artifact.note}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
