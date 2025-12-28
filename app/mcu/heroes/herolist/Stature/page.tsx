import Link from "next/link";

export default function StaturePage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Stature</h1>
      <p>Hero page for Stature (Cassie Lang).</p>
      <p className="mt-4"><Link href="/mcu/heroes">← Back to Heroes</Link></p>
    </main>
  );
}
