import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link href={'/'} className="navbar-brand pt-0 pb-0 fw-bold fs-3">
            TechNext
          </Link>
          <div>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item ms-2 me-2">
                <Link href={'/'} className="navbar-brand">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};