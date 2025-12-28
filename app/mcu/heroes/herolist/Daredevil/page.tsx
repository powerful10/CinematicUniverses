import Link from "next/link";

export default function DaredevilPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Daredevil</h1>
      <p>Hero page for Daredevil (Matt Murdock).</p>
      <p className="mt-4"><Link href="/mcu/heroes">← Back to Heroes</Link></p>
    </main>
  );
}
