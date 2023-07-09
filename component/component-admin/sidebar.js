import Link from "next/link";

export default function Sidebar() {
    return (
        <>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink" />
                    </div>
                    <div className="sidebar-brand-text mx-3">Admin Moro Senneng</div>
                </a>
                <hr className="sidebar-divider my-0" />
                <li className="nav-item active">
                    <Link className="nav-link" href="/admin/dashboard">
                        <i className="fas fa-fw fa-tachometer-alt" />
                        <span>Dashboard</span></Link>
                </li>
                <hr className="sidebar-divider" />
                <li className="nav-item">
                    <Link className="nav-link collapsed" href="/admin/daftarProduct" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                        <span>Product List</span>
                    </Link>
                </li>
                <hr className="sidebar-divider" />
            </ul>
        </>
    )
}