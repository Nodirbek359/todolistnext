
import Link from "next/link";
async function getData() {
  const req = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    next: { revalidate: 3600 },
  
  });
  const data = await req.json();
  
  return data; 
}
async function Contact() {
  const data = await getData();
 
  return (
    <div className="w-full h-full bg-slate-400">
      <div className="max-container flex flex-col items-center  p-4 rounded-md bg-slate-600 ">
      <h1 className="bg-orange-600 px-4 rounded-md py-2">Posts</h1>
      <Link className="bg-green-600 px-3 py-1 rounded-md mt-3" href={"/"}>cancel</Link>
      <ul className="pt-7 ">
        {data.map((todo) => {
          return (
            <li className="flex justify-between " key={todo.id}>
                  <div className="flex flex-col">
                  <h3 className="pb-3 ">{todo.title}</h3>
                  
             </div>
              <Link className="mb-3 px-4 py-1 rounded-lg bg-amber-500 " href={`contact/${todo.id}`}>More</Link>
            </li>
          );
        })}
      </ul>
      </div>
    </div>
  );
}

export default Contact;
