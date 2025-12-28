import Link from "next/link";
import Image from "next/image";

import HawkeyeSrc from "../../heroesImage/Hawkeye/Hawkeye.jpg";
import Bow from "../../heroesImage/Hawkeye/Bow.jpg";
import Avengers from "../../heroesImage/Hulk/Avengers.jpg";
import Ronin from "../../heroesImage/Hawkeye/Ronin.jpg";
import Endgame from "../../heroesImage/Hawkeye/Endgame.jpg";

export default function HawkeyePage() {
  return (
    <main className="max-w-6xl mx-auto p-6 lg:p-12 text-gray-800">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col lg:flex-row gap-8">
        <header className="flex-1">
          <div className="bg-white shadow-md rounded-md p-6">
            <div className="flex items-start gap-6">
              <div className="w-40 h-40 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={HawkeyeSrc}
                  alt="Hawkeye"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full object-[center_20%]"
                  priority
                />
              </div>

              <div>
                <h1 className="text-3xl lg:text-4xl font-extrabold">
                  Hawkeye
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Clint Barton
                </p>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  Master archer, elite tactician, and founding Avenger, Clint
                  Barton proves that precision, discipline, and loyalty can
                  stand alongside gods and super-soldiers. Known as Hawkeye,
                  he is one of the MCU’s most reliable and grounded heroes.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/mcu/avengers"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Avengers
                  </Link>
                  <a
                    href="https://www.marvel.com/characters/hawkeye-clint-barton/on-screen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Marvel (On-Screen Profile)
                  </a>
                </div>
              </div>
            </div>

            {/* ================= BASIC DATA ================= */}
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <strong className="block text-gray-900">Full name</strong>
                Clint Barton
              </div>
              <div>
                <strong className="block text-gray-900">Affiliation</strong>
                Avengers; S.H.I.E.L.D.
              </div>
              <div>
                <strong className="block text-gray-900">Status</strong>
                Active
              </div>
              <div>
                <strong className="block text-gray-900">Specialization</strong>
                Archery, reconnaissance, tactical combat
              </div>
            </div>
          </div>
        </header>

        {/* ================= SIDEBAR ================= */}
        <aside className="w-full lg:w-96">
          <div className="sticky top-6 space-y-4">
            <div className="bg-white shadow rounded-md p-4">
              <h3 className="text-lg font-semibold mb-2">Quick Facts</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>
                  <strong>First MCU appearance:</strong> Thor (2011)
                </li>
                <li>
                  <strong>Portrayed by:</strong> Jeremy Renner
                </li>
                <li>
                  <strong>Occupation:</strong> S.H.I.E.L.D. Agent, Avenger
                </li>
                <li>
                  <strong>Base of operations:</strong> Avengers facilities / safe houses
                </li>
              </ul>
            </div>

            {/* ================= GALLERY ================= */}
            <div className="bg-white shadow rounded-md p-4">
              <h3 className="text-lg font-semibold mb-3">Gallery</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: Bow, label: "Precision Archery" },
                  { src: Avengers, label: "Avengers Initiative" },
                  { src: Ronin, label: "Ronin Identity" },
                  { src: Endgame, label: "Endgame Battle" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div
                      className="relative w-full rounded overflow-hidden bg-gray-50"
                      style={{ aspectRatio: "4 / 3" }}
                    >
                      <Image
                        src={item.src}
                        alt={item.label}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="mt-2 text-xs text-gray-500">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* ================= MAIN ARTICLE ================= */}
      <article className="mt-10 bg-white shadow-sm rounded-md p-6">
        <h2 className="text-2xl font-semibold mb-4">MCU Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          Clint Barton is a highly trained S.H.I.E.L.D. operative whose unmatched
          marksmanship and battlefield awareness earned him a place among the
          Avengers. Though lacking superhuman abilities, his consistency,
          bravery, and tactical mind make him indispensable.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Early Career and S.H.I.E.L.D.</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Prior to the Avengers Initiative, Barton served as a covert S.H.I.E.L.D.
          agent, specializing in long-range elimination and intelligence
          operations. He was briefly compromised by Loki before being freed and
          joining the Battle of New York.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Avengers and Team Dynamics</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          As an Avenger, Clint often acts as a stabilizing presence, forming
          close bonds with teammates such as Natasha Romanoff and Wanda Maximoff.
          His leadership and situational awareness repeatedly turn the tide in
          large-scale conflicts.
        </p>

        <h3 className="mt-8 text-xl font-semibold">The Ronin Period</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          After losing his family during the Snap, Barton abandoned the Hawkeye
          identity and became Ronin, targeting criminal organizations worldwide.
          This dark chapter reflected his grief and loss of faith, culminating
          in his eventual return during the Avengers’ time heist.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Endgame and Redemption</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Clint played a crucial role in reversing Thanos’ actions and fought
          alongside the Avengers in the final battle. Natasha Romanoff’s
          sacrifice deeply impacted him, reinforcing his commitment to family
          and legacy.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Legacy</h3>
        <p className="mt-3 text-gray-700">
          Hawkeye represents the human cost of heroism in the MCU. His journey
          emphasizes resilience, accountability, and the importance of choosing
          compassion even after profound loss.
        </p>

        <h3 className="mt-8 text-xl font-semibold">See Also</h3>
        <div className="mt-3 flex flex-wrap gap-3">
          <Link
            href="/mcu/heroes/herolist/BlackWidow"
            className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline"
          >
            Black Widow
          </Link>
          <Link
            href="/mcu/heroes/herolist/IronMan"
            className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline"
          >
            Iron Man
          </Link>
          <Link
            href="/mcu/heroes/herolist/CaptainAmerica"
            className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline"
          >
            Captain America
          </Link>
          <Link
            href="/mcu/avengers"
            className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline"
          >
            Avengers
          </Link>
        </div>
      </article>
    </main>
  );
}
