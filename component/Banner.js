import Link from "next/link";
export default function Banner() {
  let arrow = ">>"
  return (
    <>
      <div className="col-lg-6 kotak kotak-about p-3">
        <h1 ><span style={{ color: "black" }}>MORO</span>
          <span>SENNENG</span></h1>
        <p className="m-2" style={{ color: "black" }} >
          Toko Online Resmi Moro senneng Indonesia menyediakan produk terbaik
        </p>
        <div class="button" style={{ color: "black" }} >Shop Now {arrow}</div>
      </div>
      <div className="col-lg-6 kotak kuning">
        <img className="header-image" src="images/image-header.png" alt="image header" />
      </div>
    </>
  );
}