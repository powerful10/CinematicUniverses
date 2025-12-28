"use client";
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white px-8 py-12">
      {/* Hero Section */}
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-4">Step Into the Multiverse</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Discover the epic worlds of the <span className="text-red-500 font-semibold">Marvel Cinematic Universe</span> and 
          the <span className="text-blue-500 font-semibold">DC Universe</span>. Meet legendary heroes, cunning villains, mysterious anti-heroes, iconic teams, and artifacts that shaped the fate of these universes!
        </p>
      </header>

      {/* Highlight Sections */}
      <section className="grid md:grid-cols-2 gap-10 mb-16">
        {/* MCU Highlights */}
        <div className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-red-500">Marvel Universe</h2>
          <p className="mb-4">
            Follow the journey from Iron Man's first flight to the epic battle against Thanos. Explore <strong>Heroes</strong> like Spider-Man and Doctor Strange, face off with <strong>Villains</strong> like Ultron, and uncover <strong>Anti-Heroes</strong> like Winter Soldier.
          </p>
          <p className="mb-4">
            Travel through all <strong>Phases</strong>, join legendary <strong>Teams</strong> like the Avengers and Guardians of the Galaxy, and unravel mysteries of <strong>Artifacts</strong> like the Infinity Stones.
          </p>
          <p className="italic text-gray-400 mb-4">Did you know? Thanos collected all Infinity Stones in less than a year in the MCU timeline!</p>
          <Link href="/mcu" className="text-red-400 font-semibold hover:underline">Explore MCU →</Link>
        </div>

        {/* DC Highlights */}
        <div className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-blue-500">DC Universe</h2>
          <p className="mb-4">
            From Gotham to Metropolis, meet iconic <strong>Heroes</strong> like Batman and Superman, cunning <strong>Villains</strong> like Joker and Lex Luthor, and complex <strong>Anti-Heroes</strong> like Catwoman and Deadshot.
          </p>
          <p className="mb-4">
            Discover mighty <strong>Teams</strong> such as Justice League or Suicide Squad, explore key <strong>Locations</strong> like Themyscira or Atlantis, and uncover legendary <strong>Artifacts</strong> like Mother Boxes.
          </p>
          <p className="italic text-gray-400 mb-4">Fun fact: Batman has never had superpowers, yet he fights alongside gods like Superman and Wonder Woman!</p>
          <Link href="/dc" className="text-blue-400 font-semibold hover:underline">Explore DC →</Link>
        </div>
      </section>

      {/* Interactive Fun Section */}
      <section className="text-center">
        <h2 className="text-4xl font-bold mb-6">Choose Your Adventure</h2>
        <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
          Jump into the stories of your favorite characters. Track their journeys, see how timelines intersect, and explore the artifacts that changed everything. Whether you're a fan of epic battles, thrilling mysteries, or character-driven stories, there’s something here for everyone!
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/mcu/heroes" className="bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-lg font-semibold transition">
            MCU Heroes
          </Link>
          <Link href="/mcu/villains" className="bg-red-800 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition">
            MCU Villains
          </Link>
          <Link href="/dc/villains" className="bg-purple-800 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition">
            Antiheroes
          </Link>
          <Link href="/dc/heroes" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition">
            DC Heroes
          </Link>
          <Link href="/dc/villains" className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
            DC Villains
          </Link>
        </div>
      </section>
    </div>
  );
}
