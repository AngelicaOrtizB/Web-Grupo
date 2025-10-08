import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold mb-8">Selecciona un Reto</h1>
      <div className="grid grid-cols-2 gap-6">
        <Link href="/Reto1">
          <button className="btn btn-primary w-32 h-12 text-lg">Reto 1</button>
        </Link>
        <Link href="/contador">
          <button className="btn btn-primary w-32 h-12 text-lg">Reto 2</button>
        </Link>
        <Link href="/theme">
          <button className="btn btn-primary w-32 h-12 text-lg">Reto 4</button>
        </Link>
        <Link href="/Reto6">
          <button className="btn btn-primary w-32 h-12 text-lg">Reto 6</button>
        </Link>
      </div>
    </main>
  );
}
