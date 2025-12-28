import Link from "next/link";

export default function MBakuPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">M'Baku</h1>
      <p>Hero page for M'Baku.</p>
      <p className="mt-4"><Link href="/mcu/heroes">← Back to Heroes</Link></p>
    </main>
  );
}
