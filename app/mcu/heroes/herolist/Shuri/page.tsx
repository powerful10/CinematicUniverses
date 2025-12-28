import Link from "next/link";

export default function ShuriPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Shuri</h1>
      <p>Hero page for Shuri (also associated with Black Panther).</p>
      <p className="mt-4"><Link href="/mcu/heroes">← Back to Heroes</Link></p>
    </main>
  );
}
