export default function Footer () {
    return (
        <footer className="mt-2">
    <div className="container container-top p-4">
      <div className="row">
        <div className="col-md-7">
          <h1 className="title-footer text-white">WORO SENNENG</h1>
          <p className="text-white">description singkat</p>
        </div>
        <div className="col-md-5">
          <div className="row">
            <div className="col-md-6 text-white">
              <span className="iconify" data-icon="ph:instagram-logo" data-width={26} data-height={26} />
              Woro Senneng
            </div>
            <div className="col-md-6 text-white">
              <span className="iconify" data-icon="ic:outline-whatsapp" data-width={26} data-height={26} />
              082128957188
            </div>
          </div>
          <div className="row mt-2">
            <p className="text-white">
              Jl. Imam Bonjol, No.02 Desa Banyuwangi Kelurahan Banyuwangi
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="d-flex justify-content-end container mt-1">
      <p>Copyright 2023 @ Studio</p>
    </div>
  </footer>
    )
}