/* eslint-disable no-unused-vars */
import React from 'react'
import {BrowserRouter  as Router, Routes, Route} from 'react-router-dom';
import Home from './Home'
import Blog from './Blog'
import Layanan from './Layanan';
import Informasi from './informasi';
import FAQ from './FAQ';
import TentangKami from './TentangKami';
const App = () => {
  return (
    <Router>
      <Routes>
        {/* kalo ada eror yang ga keliatan pagenya itu krn /homenya ygn belum ke isi/ atau ke refresh :( */}
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Blog' element={<Blog/>}></Route>
        <Route path='/Informasi' element={<Informasi/>}></Route>
        <Route path='/FAQ' element={<FAQ/>}></Route>
        <Route path='/Layanan' element={<Layanan/>}></Route>
        <Route path='/TentangKami' element={<TentangKami/>}></Route>
      </Routes>
    </Router>
  );
};
export default App;