import Banner from "../component/Banner"
import CardProductHome from "../component/CardProduct"
import Footer from "../component/Footer"
import Header from "../component/Header"
import Jumbotron from "../component/Jumbotron"
import Navigasi from "../component/Navigasi"
export default function Home({data}) {
  return (
    <div>
      <Header/>
  <div className="container-fluid about">
    <Navigasi/>
    <div className="row">
      <Banner/>
    </div>
  </div>
  <div className="row second-row m-0">
    <h1 className="title-second" style={{ color: "black" }}>ADD YOUR MAGIC TOUCH</h1>
  </div>
  <Jumbotron/>
  <section class="produk p-3">
      <div class="container-fluid">
        <div class="produk d-flex flex-wrap">
        </div>
      </div>
    </section>
  <Footer/>
</div>

  )
}


