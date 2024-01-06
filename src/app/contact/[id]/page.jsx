import Link from "next/link";
async function getData(id) {
  const req = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 3600 },
  });
  const data = await req.json();
  return data;
}
export default async function Page({ params }) {
  const data = await getData(params.id);

  return (
    <div className="max-container flex flex-col items-center p-4 px-12 bg-slate-600  rounded-md">
      <h1 className=" flex items-center text-slate-50 pb-3">
        Title: {data.title}
      </h1>
      <h2 className=" flex items-center"> {data.body} </h2>
      <Link className="bg-green-600 px-3 py-1 rounded-md mt-3" href={"/contact"}>cancel</Link>
    </div>
  );
}
