import Link from "next/link";
import Image from "next/image";

import HulkSrc from "../../heroesImage/Hulk/Hulk.jpg";
import BannerSrc from "../../heroesImage/Hulk/BruceBanner.jpg";
import Hulkbuster from "../../heroesImage/Hulk/HulkBuster.jpg";
import Sakaar from "../../heroesImage/Hulk/Sakaar.jpg";
import Avengers from "../../heroesImage/Hulk/Avengers.jpg";

export default function HulkPage() {
  return (
    <main className="max-w-6xl mx-auto p-6 lg:p-12 text-gray-800">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col lg:flex-row gap-8">
        <header className="flex-1">
          <div className="bg-white shadow-md rounded-md p-6">
            <div className="flex items-start gap-6">
              <div className="w-40 h-40 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={HulkSrc}
                  alt="Hulk (Bruce Banner)"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              <div>
                <h1 className="text-3xl lg:text-4xl font-extrabold">
                  Hulk
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Dr. Robert Bruce Banner
                </p>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  The Hulk is the monstrous alter ego of physicist Bruce Banner,
                  a founding Avenger whose unmatched strength and internal
                  conflict have made him both one of Earth’s greatest weapons
                  and its most dangerous liability. Created by gamma radiation,
                  Hulk embodies Banner’s suppressed rage, fear, and trauma.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/mcu/avengers"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Avengers
                  </Link>
                  <a
                    href="https://www.marvel.com/characters/hulk-bruce-banner/on-screen"
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
                Robert Bruce Banner
              </div>
              <div>
                <strong className="block text-gray-900">Affiliation</strong>
                Avengers
              </div>
              <div>
                <strong className="block text-gray-900">Status</strong>
                Alive
              </div>
              <div>
                <strong className="block text-gray-900">Condition</strong>
                Gamma mutation (Hulk transformation)
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
                  <strong>First MCU appearance:</strong> The Incredible Hulk
                  (2008)
                </li>
                <li>
                  <strong>Portrayed by:</strong> Edward Norton, Mark Ruffalo
                </li>
                <li>
                  <strong>Occupation:</strong> Physicist, Avenger
                </li>
                <li>
                  <strong>Primary weakness:</strong> Emotional instability
                </li>
              </ul>
            </div>

            {/* ================= GALLERY ================= */}
            <div className="bg-white shadow rounded-md p-4">
              <h3 className="text-lg font-semibold mb-3">Gallery</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: BannerSrc, label: "Bruce Banner" },
                  { src: Hulkbuster, label: "Hulkbuster Armor" },
                  { src: Sakaar, label: "Planet Sakaar" },
                  { src: Avengers, label: "Avengers Team" }
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
          Bruce Banner was a brilliant scientist attempting to recreate the
          Super Soldier Serum when he exposed himself to lethal gamma radiation.
          Instead of dying, Banner developed the ability to transform into the
          Hulk whenever his heart rate increased or he experienced extreme
          emotional stress.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Life on the Run</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Branded a threat by the U.S. military, Banner spent years in hiding,
          attempting to cure himself while pursued by General Thaddeus Ross.
          His condition worsened after battles with Emil Blonsky, who became
          the Abomination.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Avengers and New York</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Recruited by S.H.I.E.L.D., Banner joined the Avengers and played a
          decisive role during the Battle of New York, revealing that he had
          learned to partially control his transformations. Hulk became the
          team’s primary heavy-hitter against alien forces.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Ultron and Internal Conflict</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Manipulated by Wanda Maximoff, Hulk rampaged through Johannesburg,
          forcing Tony Stark to deploy the Hulkbuster armor. Traumatized by the
          destruction he caused, Banner exiled himself off-world, eventually
          arriving on Sakaar.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Sakaar and Ragnarok</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          On Sakaar, Hulk became a celebrated gladiator under the rule of the
          Grandmaster. When reunited with Thor, Banner struggled to regain
          control of his body, fearing permanent loss to the Hulk persona.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Infinity War and Endgame</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          After being defeated by Thanos, Hulk refused to re-emerge, forcing
          Banner to fight without his alter ego. Years later, Banner merged
          his intelligence with Hulk’s body, becoming “Smart Hulk” and using
          the Infinity Gauntlet to restore half of all life lost in the Snap.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Legacy</h3>
        <p className="mt-3 text-gray-700">
          Bruce Banner’s journey represents the struggle between intellect and
          emotion. His evolution from hunted monster to controlled savior makes
          Hulk one of the MCU’s most complex and tragic heroes.
        </p>

        <h3 className="mt-8 text-xl font-semibold">See Also</h3>
        <div className="mt-3 flex flex-wrap gap-3">
          <Link
            href="/mcu/heroes/herolist/IronMan"
            className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline"
          >
            Iron Man
          </Link>
          <Link
            href="/mcu/heroes/herolist/Thor"
            className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline"
          >
            Thor
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
