import Link from "next/link";
import Image from "next/image";

import GamoraSrc from "../../heroesImage/Gamora/Gamora.webp";
import Thanos from "../../heroesImage/Gamora/Thanos.webp";
import Guardians from "../../heroesImage/StarLord/Guardians.webp";
import Vormir from "../../heroesImage/Gamora/Vormir.webp";
import Endgame from "../../heroesImage/Gamora/Endgame.webp";

export default function GamoraPage() {
  return (
    <main className="max-w-6xl mx-auto p-6 lg:p-12 text-gray-800">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col lg:flex-row gap-8">
        <header className="flex-1">
          <div className="bg-white shadow-md rounded-md p-6">
            <div className="flex items-start gap-6">
              <div className="w-40 h-40 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={GamoraSrc}
                  alt="Gamora"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full object-[center_20%]"
                  priority
                />
              </div>

              <div>
                <h1 className="text-3xl lg:text-4xl font-extrabold">
                  Gamora
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Daughter of Thanos
                </p>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  The deadliest woman in the galaxy, Gamora is a fierce warrior
                  shaped by loss, survival, and redemption. Raised by Thanos
                  but rejecting his ideology, she became a core member of the
                  Guardians of the Galaxy.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/mcu/guardians"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Guardians of the Galaxy
                  </Link>
                  <a
                    href="https://www.marvel.com/characters/gamora/on-screen"
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
                Gamora
              </div>
              <div>
                <strong className="block text-gray-900">Affiliation</strong>
                Guardians of the Galaxy
              </div>
              <div>
                <strong className="block text-gray-900">Status</strong>
                Alternate Timeline (2014 Variant)
              </div>
              <div>
                <strong className="block text-gray-900">Species</strong>
                Zehoberei
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
                  <strong>First MCU appearance:</strong> Guardians of the Galaxy (2014)
                </li>
                <li>
                  <strong>Portrayed by:</strong> Zoe Saldaña
                </li>
                <li>
                  <strong>Title:</strong> Deadliest Woman in the Galaxy
                </li>
                <li>
                  <strong>Primary weapons:</strong> Godslayer sword, combat blades
                </li>
              </ul>
            </div>

            {/* ================= GALLERY ================= */}
            <div className="bg-white shadow rounded-md p-4">
              <h3 className="text-lg font-semibold mb-3">Gallery</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: Thanos, label: "Raised by Thanos" },
                  { src: Guardians, label: "Guardians of the Galaxy" },
                  { src: Vormir, label: "Vormir Sacrifice" },
                  { src: Endgame, label: "Endgame Variant" },
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
          Gamora was taken from her homeworld by Thanos after its destruction
          and raised as his adopted daughter. Trained as a weapon, she grew to
          despise his genocidal crusade and sought to stop him.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Defection from Thanos</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Gamora betrayed Thanos by aiding Ronan’s enemies and later aligned
          herself with the Guardians of the Galaxy, choosing freedom over fear.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Sisterhood with Nebula</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Her rivalry with Nebula stemmed from Thanos’ cruelty, but over time,
          the two reconciled, forming a genuine bond forged through shared trauma.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Vormir and Sacrifice</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Thanos sacrificed Gamora on Vormir to obtain the Soul Stone, marking
          one of the MCU’s most devastating losses and solidifying her role as
          a symbol of resistance against tyranny.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Endgame Variant</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          A 2014 variant of Gamora traveled to the future during the Battle of
          Earth. Free from Thanos’ control, she chose her own path, though her
          relationship with the Guardians remained unresolved.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Legacy</h3>
        <p className="mt-3 text-gray-700">
          Gamora’s legacy is one of defiance and self-determination. Though
          shaped by violence, she ultimately chose compassion, loyalty, and
          freedom.
        </p>

        <h3 className="mt-8 text-xl font-semibold">See Also</h3>
        <div className="mt-3 flex flex-wrap gap-3">
          <Link
            href="/mcu/heroes/herolist/StarLord"
            className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline"
          >
            Star-Lord
          </Link>
          <Link
            href="/mcu/heroes/herolist/Nebula"
            className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline"
          >
            Nebula
          </Link>
          <Link
            href="/mcu/heroes/herolist/Drax"
            className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline"
          >
            Drax
          </Link>
          <Link
            href="/mcu/guardians"
            className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline"
          >
            Guardians of the Galaxy
          </Link>
        </div>
      </article>
    </main>
  );
}
