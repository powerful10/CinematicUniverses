import Link from "next/link";

export default function RedGuardianPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Red Guardian</h1>
      <p>Hero page for Red Guardian (Alexei Shostakov).</p>
      <p className="mt-4"><Link href="/mcu/heroes">← Back to Heroes</Link></p>
    </main>
  );
}
