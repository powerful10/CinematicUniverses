import Link from "next/link";

export default function SpidermanPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Spider-Man</h1>
      <p>Hero page for Spider-Man (Peter Parker).</p>
      <p className="mt-4"><Link href="/mcu/heroes">← Back to Heroes</Link></p>
    </main>
  );
}
