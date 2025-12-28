import Link from "next/link";

export default function NickFuryPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Nick Fury</h1>
      <p>Hero page for Nick Fury.</p>
      <p className="mt-4"><Link href="/mcu/heroes">← Back to Heroes</Link></p>
    </main>
  );
}
