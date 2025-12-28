import Link from "next/link";

export default function CaptainMarvelPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Captain Marvel</h1>
      <p>Hero page for Captain Marvel (Carol Danvers).</p>
      <p className="mt-4"><Link href="/mcu/heroes">← Back to Heroes</Link></p>
    </main>
  );
}
