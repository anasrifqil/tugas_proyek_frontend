import Link from "next/link";
export default function Navigasi() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid d-flex justify-content-center">
        <ul className="nav d-flex justify-content-evenly">
          <li className>
            <Link className="text-black" href="/">Home</Link>
          </li>
          <li className>
            <Link className="text-black" href="product">Produk</Link>
          </li>
          <li className>
            <Link className="text-black" href="contact">Kontak</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}