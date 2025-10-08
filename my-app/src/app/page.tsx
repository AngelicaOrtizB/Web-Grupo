import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/Reto1">
        <button className="btn btn-primary">Reto 1</button>
      </Link>
      <Link href="/contador">
        <button className="btn btn-primary">Reto 2</button>
      </Link>
      <Link href="/theme">
        <button className="btn btn-primary">Reto 4</button>
      </Link>
      <Link href="/Reto6">
        <button className="btn btn-primary">Reto 6</button>
      </Link>

    </main>  
  );
}
