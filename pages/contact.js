import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Navigasi from "../component/Navigasi";

export default function ContactPage({ data }) {
  return (
    <>
      <Header />
      <Navigasi />
      <Contact data={data} />
      <Footer />
    </>
  );
}
export async function getServerSideProps() {
  const apiKey = "e164ffd0fcd73917c1a969feae2c51d2fbd45d06f49da3872be06758cc8f6cc5";
  const response = await fetch('http://localhost:4000/api/kontak', {
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
