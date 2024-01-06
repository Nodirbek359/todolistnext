import Link from "next/link";

export default function Home() {
  return (
    <main className="flex bg-slate-300 min-h-screen flex-col items-center  p-4">
      <div className="bg-slate-400 rounded-md px-[100px]  py-5">
        <h1 className="h-auto ">Todo</h1>
      </div>
      <div className="flex content-center gap-6 pt-9 backdrop-blur-sm bg">
        <Link
          className="bg-stone-500 px-5 py-3 rounded-full border-dotted"
          href="/about"
        >
          Todos
        </Link>
        <Link
          className="bg-stone-500 px-5 py-3 rounded-full border-dotted"
          href="/albums"
        >
          Albums
        </Link>
        <Link
          className="bg-stone-500 px-5 py-3 rounded-full border-dotted"
          href="/contact"
        >
          Posts
        </Link>
      </div>
      {/* <Link href="/about/dbuivb8" >About id</Link> */}
    </main>
  );
}
