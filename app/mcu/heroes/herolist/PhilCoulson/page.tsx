import Link from "next/link";

export default function PhilCoulsonPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Phil Coulson</h1>
      <p>Hero page for Phil Coulson.</p>
      <p className="mt-4"><Link href="/mcu/heroes">← Back to Heroes</Link></p>
    </main>
  );
}
