// /* eslint-disable no-unused-vars */
import Navbar from "./components/Navbar";
import Home1 from "./components/Home1";
import LayananKami from "./components/LayananKami";
import Promobulan from "./components/Promobulan";
import Slickreview from "./components/Slickreview";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <div id="Home" className="h-auto px-10 lg:px-[200px] flex items-center">
        <div className="h-screen max-w-[700px] flex flex-col justify-center gap-y-5">
          <h1 className="font-bold text-[20px]" style={{ color: "#4784A8" }}>
            GET BETTER SERVICE
          </h1>
          <h1
            className="font-bold text-5xl transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);transition-duration: 150ms;"
            style={{ color: "#4784A8" }}
          >
            Laundry Berkualitas Hidup Tanpa Beban
          </h1>
          <p
            className="text-text max-w-[600px]"
            style={{ fontSize: "14pt", fontWeight: "normal" }}
          >
            Kami menyediakan layanan pengambilan dan pengantaran laundry secara
            gratis demi mempermudah Anda, dengan jaminan waktu tepat.
          </p>
          <div>
            <button className="px-6 lg:px-8 py-3 text-white rounded-full mt-4 bg-sky-700 hover:bg-cyan-300 transition duration-500">
              <Link
                to="/layanan"
                style={{ textDecoration: "none", color: "white" }}>
                Laundry Sekarang
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div>
        <Home1 />
      </div>
      <div>
        <LayananKami />
      </div>
      <div>
        <Promobulan />
      </div>
      <div>
        <Slickreview/>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
