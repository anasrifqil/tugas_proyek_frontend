import { useRouter } from "next/router";
import { useState } from "react";

export default function DetailProduct() {
  const router = useRouter();
  const { gambar, merek, nmSepatu, deskripsi, harga } = router.query;
  const gambarArray = Array.isArray(gambar) ? gambar : [gambar];
  const [activeImage, setActiveImage] = useState(gambarArray[0]);

  const changeJumboImage = (gambarUrl) => {
    setActiveImage(gambarUrl);
  };

  function formatRupiah(number) {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });
    return formatter.format(number);
  }

  return (
    <div>
      <div className="container produk-detail">
        <div className="row p-2">
          <div className="col-md-12 col-12 col-lg-6">
            <div className="images">
              <img className="img-fluid jumbo" src={activeImage} alt="Image" />
            </div>
            <div className="thumbnail mt-3">
              <div className="row">
                {gambarArray.slice(0, -1).map((gambarUrl, index) => (
                  <div
                    className="col-3" key={index} onClick={() => changeJumboImage(gambarUrl)}>
                    <img className="img-fluid thumbnail-image" src={gambarUrl} alt={`Thumbnail ${index}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-12 col-12 col-lg-6">
            <p className="price">{merek}</p>
            <h1>{nmSepatu}</h1>
            <p>{deskripsi}</p>
            <p className="price" style={{ color: "black" }}>{formatRupiah(harga)}</p>
            <button className="btn btn-outline-primary">BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}
