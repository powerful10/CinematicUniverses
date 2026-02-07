import { shieldDirectives } from "@/app/data/worldbuilding";

export default function SHIELDPage() {
  return (
    <main>
      <section className="section-surface page-intro">
        <p className="eyebrow">Agency Structure</p>
        <h1>S.H.I.E.L.D.</h1>
        <p>Intelligence and intervention body designed to detect, contain, and neutralize emerging superhuman threats.</p>
      </section>

      <section className="section-surface">
        <h2>Primary Directives</h2>
        <ul className="profile-list">
          {shieldDirectives.map((directive) => (
            <li key={directive}>{directive}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
