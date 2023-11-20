/* eslint-disable no-unused-vars */
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './Home';
import Home1 from './components/Home1';
import Placeholder from './components/Placeholder'
import LayananKami from './components/LayananKami';
import Promobulan from './components/Promobulan';
import Review from './components/Riew'
import Footer from './components/Footer'
// import SlickReview from './components/SlickReview';


const App = () => {
  return (
    <>
    <Navbar />
    <Home/>
    <Home1/>
    <Placeholder/>
    <LayananKami/>
    <Promobulan/>
    <Review/>
    <Footer/>
    
    {/* <SlickReview/> */}
     </>
  )
}

export default App;