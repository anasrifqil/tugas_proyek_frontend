import Link from "next/link";
import AdminFooter from "../../component/component-admin/AdminFooter";
import AdminProduct from "../../component/component-admin/AdminProduct";
import HeaderAdmin from "../../component/component-admin/HeaderAdmin";
import Sidebar from "../../component/component-admin/sidebar";

export default function Dashboard({ dataadmin }) {
    return (
        <>
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <HeaderAdmin />
                        <div className="container-fluid">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">DAFTAR PRODUK</h1>
                                <Link href="/admin/adminTambah" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                                    Tambahkan Product Baru
                                </Link>
                            </div>
                            <div className="row">
                                <AdminProduct dataadmin={dataadmin} />
                                <div className="row">
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 mb-4">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <AdminFooter />
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const apiKey = "e164ffd0fcd73917c1a969feae2c51d2fbd45d06f49da3872be06758cc8f6cc5";
    const response = await fetch('http://localhost:4000/api/sepatu', {
        method : "GET",
      headers: {
        'x-api-key': apiKey,
      },
    });
    const dataadmin = await response.json();
    return {
      props: {
        dataadmin,
      },
    };
  }