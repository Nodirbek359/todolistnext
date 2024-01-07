import Link from "next/link";

function Navbar() {
  return (
    <div className="flex  bg-slate-400  py-4">
      <div className="max-container flex prose justify-between">
        <h3 className="flex">Hedaer Logo</h3>
        <nav className="flex gap-4  ">
          <Link className="no-underline" href="/">
            Home
          </Link>
          <Link className="no-underline" href="/about">
            About
          </Link>
          <Link className="no-underline" href="/articles">
            Articles
          </Link>
          <Link className="no-underline" href="/contact">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
