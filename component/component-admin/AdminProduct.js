import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";


export default function AdminProduct({ dataadmin }) {
  const [message, setMessage] = useState(false);
  const router = useRouter();

  function formatRupiah(number) {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });

    return formatter.format(number);
  }

  async function hapusProduct(id, nmSepatu) {
    try {
      const apiKey = "e164ffd0fcd73917c1a969feae2c51d2fbd45d06f49da3872be06758cc8f6cc5";
      await axios.delete(`http://localhost:4000/api/sepatu/${id}`, {
        headers: {
          'x-api-key': apiKey,
        },
      });
      setMessage(`Product ${nmSepatu} telah terhapus`);
      Swal.fire(
        'Product Telah Terhapus ',
        '',
        'success'
      )

    } catch (error) {
      console.log({ message: error.message });
    }
    router.push('/admin/daftarProduct');
  }
  return (
    <>
      {dataadmin.data.map((item) => (

        <div className="card mb-3" style={{ maxWidth: '1100px' }} key={item.id}>
          <div className="row g-0">
            <div className="col-md-4">
              <div
                src=""
                className="img-fluid rounded-start"
                style={{ maxWidth: '100%' }}
                alt="..."
              >
                {item.gambar.split(",").length > 0 && <img src={item.gambar.split(",")[0]} alt="Image" style={{ maxWidth: '100%' }} />}
              </div>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Nama: {item.nmSepatu}</h5>
                <h5 className="card-title">Merk: {item.merek}</h5>
                <h5 className="card-title">Diskon: {item.diskon}%</h5>
                <h5 className="card-title">Harga: {formatRupiah(item.harga)}</h5>
                <p className="card-text">Keterangan: {item.deskripsi}</p>
                <Link
                  href={{
                    pathname: '/admin/adminEdit',
                    query: {
                      id: item.id,
                      gambar: item.gambar,
                      nmSepatu: item.nmSepatu,
                      merek: item.merek,
                      diskon: item.diskon,
                      harga: item.harga,
                      deskripsi: item.deskripsi,
                    },
                  }}
                >
                  <button type="button" class="btn btn-outline-success" style={{ marginRight: '5px' }}>Edit</button>
                </Link>
                <button type="button" class="btn btn-outline-danger" value={item.nmSepatu} onClick={(e) => hapusProduct(item.id, item.nmSepatu)} >Hapus</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
