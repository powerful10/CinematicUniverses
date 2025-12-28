import Link from "next/link";

export default function BlackPantherPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Black Panther</h1>
      <p>Hero page for Black Panther (T'Challa/Shuri).</p>
      <p className="mt-4"><Link href="/mcu/heroes">← Back to Heroes</Link></p>
    </main>
  );
}
