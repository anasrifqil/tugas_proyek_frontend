import Link from 'next/link';
import React from 'react';

const CardProduct = ({ data }) => {
  const url = "http://localhost:4000/uploads/";
  function formatRupiah(number) {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });
    
    return formatter.format(number);
  }

  return (
    <>
      {data.data.map((item) => (
        <div className="card" key={item.id}>
          <div className="container-produk">
            <div className="title mb-2 p-1 d-flex justify-content-between">
              <span className="persen">{item.diskon}%</span>
            </div>
            <div className="image d-flex justify-content-center align-items-center">
              {item.gambar.length > 0 && (   // Memeriksa apakah item.gambar memiliki nilai yang valid (panjangnya lebih dari 0)
                <>                          
                  {item.gambar.split(",")[0] && (   // Memeriksa apakah item.gambar.split(",")[0] memiliki nilai yang valid
                    <img
                      src={item.gambar.split(",")[0]}   // Menampilkan gambar dengan sumber URL yang dihasilkan dari item.gambar.split(",")[0]
                      alt="Image"                             // Attribut alt untuk deskripsi gambar
                      style={{ width: "80%", height: "80%", objectFit: "contain" }}   // Inline style untuk menentukan ukuran dan tata letak gambar
                    />
                  )}
                </>
              )}
            </div>
          </div>
          <div className="detail mt-1 p-1">
            <small className="tipe">{item.nmSepatu}</small>
            <p className="title-produk">{item.merek}</p>
            <p className="price">{formatRupiah(item.harga)}</p>
            <Link
              href={{
                pathname: '/detailproduct',
                query: {
                  gambar: item.gambar.split(","),
                  nmSepatu: item.nmSepatu,
                  merek: item.merek,
                  harga: item.harga,
                  deskripsi: item.deskripsi,
                },
              }}
            >
              <button className="btn btn-outline-primary">Show Detail</button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardProduct;
