import CardProduct from "../component/CardProduct";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Navigasi from "../component/Navigasi";
import { useEffect, useState } from 'react';
export default function Product({data}) {
  return (
    <>
      <Header />
      <Navigasi />
      <section class="produk">
      <div class="container-fluid d-flex flex-wrap produk">
            <CardProduct  data = {data} />
        </div>
      </section>
      <Footer />
    </>
  )
}
export async function getServerSideProps() {
  const apiKey = "e164ffd0fcd73917c1a969feae2c51d2fbd45d06f49da3872be06758cc8f6cc5";
  const response = await fetch('http://localhost:4000/api/sepatu', {
    headers: {
      'x-api-key': apiKey,
    },
  });
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}
