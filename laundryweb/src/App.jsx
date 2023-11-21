/* eslint-disable no-unused-vars */
import React from 'react'
import {BrowserRouter  as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Blog from './components/BlogInformasi';
import Layanan from './Layanan';
import AboutUS from './AboutUS';
import BlogInformasi from './components/BlogInformasi';


// import SlickReview from './components/SlickReview';


const App = () => {
  return (
   <Router>
    <Routes>
      <Route path="/Home" element={<Home/>} />
      <Route path="/BlogInformasi" element={<BlogInformasi/>} />
      <Route path="/Layanan" element={<Layanan/>} />
      <Route path="/AboutUS" element={<AboutUS/>} />
    </Routes>
   </Router>
  )
}

export default App;