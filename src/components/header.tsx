import Link from "next/link";

function Header() {
  return (
    <div className="navbar bg-base-300 text-base-content">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" href="/">Pawtastic!</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;