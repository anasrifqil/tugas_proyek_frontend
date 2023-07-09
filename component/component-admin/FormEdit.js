import { useEffect, useState } from "react";
import Router, { useRouter } from 'next/router';
import axios from "axios";
import Swal from "sweetalert2";

export default function FormEdit() {

    const [preview, setPreview] = useState('https://fakeimg.pl/300x300/');
    const [_gambar, setGambar] = useState("");
    const [_nmSepatu, setNmSepatu] = useState('');
    const [_merek, setMerek] = useState('');
    const [_diskon, setDiskon] = useState('');
    const [_harga, setHarga] = useState('');
    const [_deskripsi, setDeskripsi] = useState('');

    const router = useRouter();
    const { id, gambar, nmSepatu, merek, diskon, harga, deskripsi } = router.query;
    useEffect(() => {

        if (typeof gambar == "string") {
            setPreview(gambar);
        }
        if (typeof nmSepatu == 'string') {
            setNmSepatu(nmSepatu)
        }
        if (typeof merek == 'string') {
            setMerek(merek)
        }
        if (typeof diskon == 'string') {
            setDiskon(diskon)
        }
        if (typeof harga == 'string') {
            setHarga(harga)
        }
        if (typeof deskripsi == 'string') {
            setDeskripsi(deskripsi)
        }
    }, [id, gambar, nmSepatu, merek, diskon, harga, deskripsi])

    const editData = async (e) => {
        e.preventDefault();
        try {
            const apiUrl = `http://localhost:4000/api/sepatu/${id}`;
            const apiKey = "e164ffd0fcd73917c1a969feae2c51d2fbd45d06f49da3872be06758cc8f6cc5";
            const formData = new FormData();
            formData.append('nama', _nmSepatu);
            formData.append('merek', _merek);
            formData.append('diskon', parseInt(_diskon));
            formData.append('harga', parseInt(_harga));
            formData.append('deskripsi', _deskripsi);
            for (let i = 0; i < _gambar.length; i++) {
                const element = _gambar[i];
                formData.append('gambar', element);
            }

            const res = await axios.put(apiUrl, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'x-api-key': apiKey,
                },
            });

            Swal.fire(
                'Selamat!',
                'Edit Data Product Berhasil',
                'success'
            )
            Router.push("/admin/daftarProduct");
        } catch (error) {
            console.error('Terjadi kesalahan dalam mengambil data dari form', error);
        }
    };

    return (
        <>
            <form>
                <div className="mb-3">
                    {
                        preview.split(",").slice(0, -1).map((img) => {
                            return (
                                <img src={img} classname="card-img-top" alt="..." style={{ width: 150 }} />
                            )
                        })
                    }
                    <br></br>
                    <label htmlFor="formFileMultiple" className="form-label">Masukan Beberapa Gambar Dari Product</label>
                    <input className="form-control" type="file" id="formFileMultiple" multiple onChange={(e) => { setGambar(e.target.files) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="input-nama-product" className="form-label">Nama Product</label>
                    <input type="text" className="form-control" id="input-nama-product" placeholder="Masukan Nama Product" value={_nmSepatu} onChange={(e) => setNmSepatu(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="input-merk-product" className="form-label">Merk Product</label>
                    <input type="text" className="form-control" id="input-merk-product" placeholder="Masukan Merk Product" value={_merek} onChange={(e) => setMerek(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="input-diskon-product" className="form-label">Diskon Product</label>
                    <input type="text" className="form-control" id="input-diskon-product" placeholder="Masukan Diskon Product" value={_diskon} onChange={(e) => setDiskon(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="input-harga-product" className="form-label">Harga Product</label>
                    <input type="text" className="form-control" id="input-harga-product" placeholder="Masukan Harga Product" value={_harga} onChange={(e) => setHarga(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="input-keterangan-product" className="form-label">Keterangan Product</label>
                    <textarea type="text" className="form-control" id="input-keterangan-product" placeholder="Masukan Keterangan Product" rows={3} value={_deskripsi} onChange={(e) => setDeskripsi(e.target.value)} />
                </div>
                <br></br>
                <button type="button" className="btn btn-primary" onClick={editData} >Submit</button>
            </form>

        </>
    )
}