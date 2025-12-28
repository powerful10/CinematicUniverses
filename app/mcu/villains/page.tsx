export default function HeroesLandingPage() {
  return (
    <div className="p-10 text-gray-900">
      <div className="max-w-5xl">

        {/* Title Section */}
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight text-red-700">
          MCU Heroes Directory
        </h1>

        <p className="text-lg leading-relaxed mb-8 text-gray-700">
          Welcome to the official heroes index of the Marvel Cinematic Universe.
          Here you can explore detailed profiles about the MCU’s legendary heroes,
          their origins, abilities, team history, and major events across the timeline.
          Use the sidebar to select any character.
        </p>

        {/* Universe Summary */}
        <div className="rounded-2xl border border-gray-300 bg-gray-50 p-6 mb-10 shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">
            Overview of the Hero Roster
          </h2>

          <p className="leading-relaxed mb-4 text-gray-800">
            The MCU hero roster includes enhanced individuals, geniuses, mystics,
            soldiers, aliens, and literal gods. Together, they’ve defended Earth
            and the multiverse from countless threats.
          </p>

          <ul className="space-y-2 list-disc list-inside text-gray-800">
            <li>Founding Avengers such as Iron Man, Thor, Hulk, and Captain America</li>
            <li>Skilled agents like Black Widow and Hawkeye</li>
            <li>Modern heroes such as Spider-Man, Doctor Strange, and Shang-Chi</li>
            <li>Cosmic defenders like Captain Marvel and the Guardians</li>
          </ul>
        </div>

        {/* Featured Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 rounded-2xl bg-white border border-gray-300 shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-yellow-700">
              What You Can Explore
            </h3>
            <ul className="space-y-2 text-gray-800">
              <li>• Full biography of each hero</li>
              <li>• Power levels & abilities</li>
              <li>• Weapons and technology used</li>
              <li>• Team affiliations across movies</li>
              <li>• Timeline appearances</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-gray-300 shadow-sm">
  <h3 className="text-xl font-semibold mb-3 text-green-700">
    Hero Origins & Lore
  </h3>
  <p className="leading-relaxed text-gray-800">
    Each hero has a unique origin story — from extraordinary accidents and
    advanced technology to mystical realms and alien worlds. Explore how
    these characters became legendary defenders of the universe, and the
    trials that shaped their journey.
  </p>
</div>

        </div>

        {/* Call to Action */}
        <div className="p-8 bg-gradient-to-r from-red-200 to-blue-200 rounded-2xl shadow-xl border border-gray-300">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Start Exploring</h2>
          <p className="text-lg mb-2 text-gray-800">
            Use the sidebar to choose any hero. Each profile includes detailed 
            information, events, and universe connections.
          </p>
          <p className="text-gray-700">
            More profiles will be added over time as your cinematic universe expands.
          </p>
        </div>

      </div>
    </div>
  );
}
