export default function UniverseLandingPage() {
  return (
    <div className="p-10">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">
          Welcome to the Cinematic Universe
        </h1>

        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Choose a character from the sidebar to explore detailed profiles,
          powers, origins, and story arcs. This universe contains heroes,
          villains, and anti-heroes across multiple timelines and realities.
        </p>

        <div className="mt-8 p-6 bg-gray-800/30 rounded-2xl shadow-md backdrop-blur">
          <h2 className="text-2xl font-semibold mb-3">
            How to navigate
          </h2>

          <ul className="space-y-2 text-gray-300">
            <li>• Select a character from the sidebar menu.</li>
            <li>• Learn about their abilities, teams, and storylines.</li>
            <li>• Switch between universes using the main navbar.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
