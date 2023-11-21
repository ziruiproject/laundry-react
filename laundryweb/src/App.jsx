/* eslint-disable no-unused-vars */
import React from 'react'
import {BrowserRouter  as Router, Routes, Route} from 'react-router-dom';
import AboutUs from './AboutUS'
import Home from './Home'
import Blog from './Blog'
import Layanan from './Layanan';
import AboutUS from './AboutUS';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Layanan" element={<Layanan/>} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};
export default App;