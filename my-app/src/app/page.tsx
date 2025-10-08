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
    </main>  
  );
}
