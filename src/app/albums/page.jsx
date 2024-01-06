import Link from "next/link";
async function getData() {
  const req = await fetch(`https://jsonplaceholder.typicode.com/albums`, {
    next: { revalidate: 3600 },
  });
  const data = await req.json();

  return data;
}
async function Albums() {
  const data = await getData();
  console.log();
  return (
    <div className="w-full h-full bg-orange-400">
      <div className="max-container flex flex-col items-center  p-4 rounded-md bg-slate-600 ">
        <h1 className="bg-orange-600 px-4 rounded-md py-2">Albums</h1>
        <Link className="bg-green-600 px-3 py-1 rounded-md mt-3" href={"/"}>
          cancel
        </Link>
        <ul className="pt-7 ">
          {data.map((todo) => {
            return (
              <li className="flex justify-between " key={todo.id}>
                <h3 className="pb-3 ">{todo.title}</h3>

                <Link
                  className="mb-3 px-4 py-1 rounded-lg bg-amber-500 "
                  href={`albums/${todo.id}`}
                >
                  More
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Albums;
