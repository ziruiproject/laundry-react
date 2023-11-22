/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cards from './components/Cards'

const Layanan = () => {
  return (
    <div>
      <Navbar />
      <div className='Search' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '70px' }}>
        <h1>Layanan Laundry yang Tersedia</h1>
      </div>
      <Cards />
      <Footer />
    </div>
  );
};

export default Layanan;