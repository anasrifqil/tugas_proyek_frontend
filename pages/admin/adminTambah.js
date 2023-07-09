import AdminFooter from "../../component/component-admin/AdminFooter";
import FormTambah from "../../component/component-admin/FormTambah";
import HeaderAdmin from "../../component/component-admin/HeaderAdmin";
import Sidebar from "../../component/component-admin/sidebar";

export default function adminTambah () {
    return (
        <>
            <div id="wrapper">
                <Sidebar/>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <HeaderAdmin/>
                        <div className="container-fluid">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Tambah Data Product</h1>
                            </div>
                            <div className="row">
                                <FormTambah/>
                                    <div className="row">
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 mb-4">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <AdminFooter/>
                        </div>
                    </div>
                    </div>
            </>
            )
}