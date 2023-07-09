import { useState } from "react";
import Router from 'next/router';
import axios from "axios";
import Swal from "sweetalert2";
export default function FormTambah() {
    const url = "http://localhost:4000/static/";

    const [gambar, setGambar] = useState(null);
    const [preview, setPreview] = useState([]);
    const [nmSepatu, setNmSepatu] = useState('');
    const [merek, setMerek] = useState('');
    const [diskon, setDiskon] = useState('');
    const [harga, setHarga] = useState('');
    const [deskripsi, setDeskripsi] = useState('');

    const addData = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('nama', nmSepatu);
        formData.append('merek', merek);
        formData.append('diskon', parseInt(diskon));
        formData.append('harga', parseInt(harga));
        formData.append('deskripsi', deskripsi);
        for (let i = 0; i < gambar.length; i++) {
            const element = gambar[i];
            formData.append('gambar', element);
        }
        try {
            const apiUrl = "http://localhost:4000/api/sepatu";
            const apiKey = "e164ffd0fcd73917c1a969feae2c51d2fbd45d06f49da3872be06758cc8f6cc5";
            const res = await axios.post(apiUrl, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "x-api-key": apiKey,
                    "Access-Control-Allow-Origin": "*"
                }
            })
            Swal.fire(
                'Selamat',
                'Tambah Data Berhasil',
                'success'
              )
            Router.push("/admin/daftarProduct");
        } catch (error) {
            console.error(error);
        }
    };

    const handleImageChange = (e) => {
        setGambar(e.target.files);
        const previews = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
        setPreview(previews);
    };
    return (
        <>
            <form>
                <div className="mb-3">
                    <label htmlFor="formFileMultiple" className="mr-1 form-label">Masukan Beberapa Gambar Dari Product</label>\<br></br>
                    {preview.map((imageUrl, index) => (
                        <img
                            key={index}
                            src={imageUrl}
                            className="card-img-top"
                            alt="..."
                            style={{ width: 150 }}
                        />
                    ))}
                    <input className="form-control" type="file" id="formFileMultiple" multiple onChange={handleImageChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="input-nama-product" className="form-label">Nama Product</label>
                    <input type="text" className="form-control" id="input-nama-product" placeholder="Masukan Nama Product" value={nmSepatu} onChange={(e) => setNmSepatu(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="input-merk-product" className="form-label">Merk Product</label>
                    <input type="text" className="form-control" id="input-merk-product" placeholder="Masukan Merk Product" value={merek} onChange={(e) => setMerek(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="input-diskon-product" className="form-label">Diskon Product</label>
                    <input type="text" className="form-control" id="input-diskon-product" placeholder="Masukan Diskon Product" value={diskon} onChange={(e) => setDiskon(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="input-harga-product" className="form-label">Harga Product</label>
                    <input type="text" className="form-control" id="input-harga-product" placeholder="Masukan Harga Product" value={harga} onChange={(e) => setHarga(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="input-keterangan-product" className="form-label">Keterangan Product</label>
                    <textarea type="text" className="form-control" id="input-keterangan-product" placeholder="Masukan Keterangan Product" rows={3} value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)} />
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary" onClick={addData}>Submit</button>
            </form>
        </>
    )
}
