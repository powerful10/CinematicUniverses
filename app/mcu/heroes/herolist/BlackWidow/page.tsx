import Link from "next/link";
import Image from "next/image";

import WidowSrc from "../../heroesImage/BlackWidow/BlackWidow.jpg";
import RedRoom from "../../heroesImage/BlackWidow/RedRoom.jpg";
import Avengers from "../../heroesImage/Hulk/Avengers.jpg";
import Budapest from "../../heroesImage/BlackWidow/Budapest.jpg";
import Endgame from "../../heroesImage/BlackWidow/Endgame.jpg";

export default function BlackWidowPage() {
  return (
    <main className="max-w-6xl mx-auto p-6 lg:p-12 text-gray-800">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col lg:flex-row gap-8">
        <header className="flex-1">
          <div className="bg-white shadow-md rounded-md p-6">
            <div className="flex items-start gap-6">
              <div className="w-40 h-40 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                <Image
  src={WidowSrc}
  alt="Black Widow"
  width={160}
  height={160}
  className="object-cover w-full h-full object-[center_20%]"
  priority
/>

              </div>

              <div>
                <h1 className="text-3xl lg:text-4xl font-extrabold">
                  Black Widow
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Natasha Romanoff
                </p>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  Master spy, elite assassin, and founding Avenger, Natasha
                  Romanoff operates at the intersection of intelligence,
                  combat, and moral redemption. Though lacking superhuman
                  abilities, her skill, experience, and resolve make her one
                  of the MCU’s most formidable heroes.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/mcu/avengers"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Avengers
                  </Link>
                  <a
                    href="https://www.marvel.com/characters/black-widow-natasha-romanoff/on-screen"
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
                Natasha Romanoff
              </div>
              <div>
                <strong className="block text-gray-900">Affiliation</strong>
                Avengers; S.H.I.E.L.D.
              </div>
              <div>
                <strong className="block text-gray-900">Status</strong>
                Deceased (Sacrifice on Vormir)
              </div>
              <div>
                <strong className="block text-gray-900">Specialization</strong>
                Espionage, infiltration, close-quarters combat
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
                  <strong>First MCU appearance:</strong> Iron Man 2 (2010)
                </li>
                <li>
                  <strong>Portrayed by:</strong> Scarlett Johansson
                </li>
                <li>
                  <strong>Occupation:</strong> Spy, Assassin, Avenger
                </li>
                <li>
                  <strong>Base of operations:</strong> Mobile / Avengers facilities
                </li>
              </ul>
            </div>

            {/* ================= GALLERY ================= */}
            <div className="bg-white shadow rounded-md p-4">
              <h3 className="text-lg font-semibold mb-3">Gallery</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: RedRoom, label: "Red Room Training" },
                  { src: Budapest, label: "Budapest Mission" },
                  { src: Avengers, label: "Avengers Initiative" },
                  { src: Endgame, label: "Endgame Sacrifice" },
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
          Natasha Romanoff was trained from childhood in the Red Room, a secret
          Soviet program designed to create elite assassins. After defecting,
          she became a top operative for S.H.I.E.L.D., eventually earning a
          place among Earth’s Mightiest Heroes as Black Widow.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Red Room and Early Life</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Natasha’s early years were defined by psychological conditioning,
          combat training, and moral compromise. The Red Room erased her
          autonomy, forcing her to perform covert assassinations until she
          seized an opportunity to defect and seek redemption.
        </p>

        <h3 className="mt-8 text-xl font-semibold">S.H.I.E.L.D. and the Avengers</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          As a S.H.I.E.L.D. agent, Natasha monitored threats such as Tony Stark
          before being recruited into the Avengers Initiative. She fought in
          the Battle of New York, helping repel Loki and the Chitauri invasion.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Civil War and Exile</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          During the Sokovia Accords conflict, Natasha navigated divided
          loyalties between Steve Rogers and the global community. After aiding
          Captain America’s escape, she went into hiding, operating independently
          while dismantling remnants of her past.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Infinity War and Vormir</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Following Thanos’ Snap, Natasha became a central coordinator for the
          remaining Avengers. During the time heist, she and Clint Barton
          traveled to Vormir, where she made the ultimate sacrifice to obtain
          the Soul Stone.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Legacy</h3>
        <p className="mt-3 text-gray-700">
          Natasha Romanoff’s legacy is defined by redemption and selflessness.
          She transformed from a weapon shaped by control into a hero who chose
          humanity above herself. Her sacrifice ensured the Avengers’ final
          victory and permanently shaped the MCU.
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
            href="/mcu/heroes/herolist/CaptainAmerica"
            className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline"
          >
            Captain America
          </Link>
          <Link
            href="/mcu/heroes/herolist/Hawkeye"
            className="px-3 py-1 bg-gray-100 rounded text-sm text-blue-600 hover:underline"
          >
            Hawkeye
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
