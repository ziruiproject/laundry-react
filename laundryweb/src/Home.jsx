import Navbar from './components/Navbar'
import Home1 from './components/Home1';
import Placeholder from './components/Placeholder'
import LayananKami from './components/LayananKami';
import Promobulan from './components/Promobulan';
import Review from './components/Riew'
import Footer from './components/Footer'
const Home = () => {
  return (
    <>
    <div id='Home' className='h-auto px-10 lg:px-[200px] flex items-center'>
      <div className="h-screen max-w-[700px] flex flex-col justify-center gap-y-5">
        <h1 className="font-bold text-[20px]" style={{ color: '#4784A8' }}>GET BETTER SERVICE</h1>
        <h1 className="font-bold text-5xl" style={{ color: '#4784A8' }}>Laundry Berkualitas Hidup Tanpa Beban</h1>
        <p className="text-text max-w-[600px]" style={{ fontSize: '14pt', fontWeight: 'normal' }}>Kami menyediakan layanan pengambilan dan pengantaran laundry secara gratis demi mempermudah Anda, dengan jaminan waktu tepat.</p>
        <div>
          <button className="px-6 lg:px-8 py-3 text-white rounded-full mt-4 bg-sky-700 hover:bg-cyan-300 transition duration-500" >
            Laundry Sekarang
          </button>
        </div>
      </div>
    </div>
    <Navbar />
    <Home/>
    <Home1/>
    <Placeholder/>
    <LayananKami/>
    <Promobulan/>
    <Review/>
    <Footer/>
    </>
  );
};

export default Home;

