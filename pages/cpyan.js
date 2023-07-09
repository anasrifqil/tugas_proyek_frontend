import { useState } from "react";
import axios from "axios";
import Router from 'next/router';

export default function FormTambah() {
    const [gambar, setGambar] = useState(null);
    const [nmSepatu, setNmSepatu] = useState('');
    const [merek, setMerek] = useState('');
    const [diskon, setDiskon] = useState('');
    const [harga, setHarga] = useState('');
    const [deskripsi, setDeskripsi] = useState('');

    const addData = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('gambar', gambar);
            formData.append('nmSepatu', nmSepatu);
            formData.append('merek', merek);
            formData.append('diskon', diskon);
            formData.append('harga', harga);
            formData.append('deskripsi', deskripsi);

            const apiUrl = "http://localhost:4000/api/sepatu";
            const apiKey = "e164ffd0fcd73917c1a969feae2c51d2fbd45d06f49da3872be06758cc8f6cc5";
            await axios.post(apiUrl, formData, {
                headers: {
                    'x-api-key': apiKey,
                    'Content-Type': 'multipart/form-data'
                },
            });

            alert("Penambahan Data Sukses");
            Router.push("/admin/admin/daftarProduct");
            clearInput();
        } catch (error) {
            console.error(error);
        }
    };

    const clearInput = () => {
        setGambar(null);
        setNmSepatu('');
        setMerek('');
        setDiskon('');
        setHarga('');
        setDeskripsi('');
    };

    const handleImageChange = (e) => {
        setGambar(e.target.files[0]);
    };

    return (
        <>
            <form>
                <div className="mb-3">
                <img src="..." className="card-img-top" alt="..." />
                    <label htmlFor="formFileMultiple" className="form-label">Masukan Beberapa Gambar Dari Product</label>
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
