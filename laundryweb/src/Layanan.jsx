/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Button from 'react-bootstrap/Button';
import Cards from './components/Cards'

const Layanan = () => {
  const [text, setText] = useState('');
  return (
    <div>
      <Navbar />
      ini layanan
      <Footer />
    </div>
  );
};

export default Layanan;