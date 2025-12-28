import Link from "next/link";

export default function MsMarvelPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Ms. Marvel</h1>
      <p>Hero page for Ms. Marvel (Kamala Khan).</p>
      <p className="mt-4"><Link href="/mcu/heroes">← Back to Heroes</Link></p>
    </main>
  );
}
