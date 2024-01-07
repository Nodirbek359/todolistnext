import Link from "next/link"

function NotFound() {
  return (
      <div className="prose flex flex-col items-center max-container content-center"><h3>Hatolik mavjud bosh sahifaga qayting</h3>
          <Link className=" rounded-md p-2 no-underline text-white  hover:bg-slate-500 hover:text-black  bg-slate-400" href="/">Orqaga</Link>
    </div>
  )
}

export default NotFound