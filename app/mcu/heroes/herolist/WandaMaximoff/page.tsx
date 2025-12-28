import Link from "next/link";
import Image from "next/image";

import WandaSrc from "../../heroesImage/WandaMaximoff/wandamaximoff.jpg";
import Sokovia from "../../heroesImage/WandaMaximoff/Sokovia.jpg";
import Avengers from "../../heroesImage/Hulk/Avengers.jpg";
import Westview from "../../heroesImage/WandaMaximoff/Westview.jpg";
import Darkhold from "../../heroesImage/WandaMaximoff/Darkhold.jpg";

export default function WandaMaximoffPage() {
  return (
    <main className="max-w-6xl mx-auto p-6 lg:p-12 text-gray-800">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col lg:flex-row gap-8">
        <header className="flex-1">
          <div className="bg-white shadow-md rounded-md p-6">
            <div className="flex items-start gap-6">
              <div className="w-40 h-40 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={WandaSrc}
                  alt="Wanda Maximoff"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full object-[center_20%]"
                  priority
                />
              </div>

              <div>
                <h1 className="text-3xl lg:text-4xl font-extrabold">
                  Wanda Maximoff
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Enhanced Human • Chaos Magic Wielder
                </p>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  One of the most powerful beings in the Marvel Cinematic
                  Universe, Wanda Maximoff is a Sokovian native whose abilities
                  evolved from experimental enhancement into full reality
                  manipulation. Her journey is defined by loss, grief, love,
                  and catastrophic power.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/mcu/avengers"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Avengers
                  </Link>
                  <a
                    href="https://www.marvel.com/characters/wanda-maximoff-scarlet-witch/on-screen"
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
                Wanda Maximoff
              </div>
              <div>
                <strong className="block text-gray-900">Affiliation</strong>
                Avengers (former)
              </div>
              <div>
                <strong className="block text-gray-900">Status</strong>
                Presumed deceased
              </div>
              <div>
                <strong className="block text-gray-900">Abilities</strong>
                Chaos magic, reality warping, telekinesis
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
                  <strong>First MCU appearance:</strong> Avengers: Age of Ultron (2015)
                </li>
                <li>
                  <strong>Portrayed by:</strong> Elizabeth Olsen
                </li>
                <li>
                  <strong>Origin:</strong> Sokovia
                </li>
                <li>
                  <strong>Base of operations:</strong> Various / Westview (formerly)
                </li>
              </ul>
            </div>

            {/* ================= GALLERY ================= */}
            <div className="bg-white shadow rounded-md p-4">
              <h3 className="text-lg font-semibold mb-3">Gallery</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: Sokovia, label: "Sokovian Origins" },
                  { src: Avengers, label: "Avengers Member" },
                  { src: Westview, label: "Westview Anomaly" },
                  { src: Darkhold, label: "Darkhold Influence" },
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
          Wanda Maximoff began as a Sokovian civilian whose life was shattered by
          war and loss. Exposure to the Mind Stone awakened her latent magical
          abilities, setting her on a path that would reshape the Avengers and
          threaten reality itself.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Sokovia and HYDRA Experiments</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          After losing her parents to a bombing involving Stark Industries
          weapons, Wanda and her twin brother Pietro volunteered for HYDRA
          experiments. Wanda survived exposure to the Mind Stone, gaining
          telekinesis, mental manipulation, and energy projection.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Avengers and Loss</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Wanda joined the Avengers after the Battle of Sokovia, where Pietro
          was killed. She later formed a deep bond with Vision, whose death at
          the hands of Thanos devastated her and marked a turning point in her
          emotional stability.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Westview Incident</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Consumed by grief, Wanda unconsciously created a reality-altering Hex
          around the town of Westview. Within it, she controlled thousands of
          civilians while constructing an idealized family life. The incident
          revealed her as the Scarlet Witch — a being capable of spontaneous
          reality creation.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Darkhold and the Multiverse</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Wanda’s study of the Darkhold corrupted her judgment, leading her to
          pursue America Chavez across the multiverse. Her actions caused mass
          destruction before she destroyed Mount Wundagore and all copies of
          the Darkhold, disappearing beneath the ruins.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Legacy</h3>
        <p className="mt-3 text-gray-700">
          Wanda Maximoff’s legacy is one of immense power shaped by grief. She
          remains one of the most dangerous and tragic figures in the MCU,
          capable of both profound love and catastrophic destruction.
        </p>

        <h3 className="mt-8 text-xl font-semibold">See Also</h3>
        <div className="mt-3 flex flex-wrap gap-3">
          <Link
            href="/mcu/heroes/herolist/Thor"
            className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline"
          >
            Thor
          </Link>
          <Link
            href="/mcu/heroes/herolist/IronMan"
            className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline"
          >
            Iron Man
          </Link>
          <Link
            href="/mcu/heroes/herolist/BlackWidow"
            className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline"
          >
            Black Widow
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
