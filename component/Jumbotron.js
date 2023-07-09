export default function Jumbotron() {
  return (
  <div className="container-fluid branding">
    <div className="row p-5">
      <div className="col-lg-6 col-md-6 col-sm-7 images">
        <div className="star">
          <img src="images/star.png" alt />
          <p className="star-new">new</p>
        </div>
        <div className="produk-new">
          <img className="image" src="images/produks.png" alt />
        </div>
      </div>
      <div className="col-lg-6 col-md-6 branding-about">
        <h2>CASUAL <span>BRAND</span> LOCAL</h2>
        <p>The You-niform. Sportswear born on the pitcH</p>
        <p className="about-produk">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ullam
          asperiores totam magnam qui aut ut itaque minima voluptas assumenda?
        </p>
        <p className="price">RP.260.000</p>
      </div>
    </div>
  </div>
  )
}