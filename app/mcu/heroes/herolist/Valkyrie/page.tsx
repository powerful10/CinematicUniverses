import Link from "next/link";

export default function ValkyriePage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Valkyrie</h1>
      <p>Hero page for Valkyrie (Brunnhilde).</p>
      <p className="mt-4"><Link href="/mcu/heroes">← Back to Heroes</Link></p>
    </main>
  );
}
