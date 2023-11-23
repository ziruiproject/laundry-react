/* eslint-disable no-unused-vars */
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Slickreview.css'; 
import { dataReview } from '../data/Review';

import {Link} from 'react-router-dom';



function Informasi() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 660,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  
    // Tambahkan style untuk ukuran slider dan kartu di dalamnya
    const sliderStyle = {
      width: '100%', // Lebar slider 100%
      height: 'auto', // Tinggi slider menyesuaikan konten
    };
  
    const cardStyle = {
      width: '50px', // Lebar kartu 50px
      height: '100px', // Tinggi kartu 100px
    };
   
 
  return (
    <>
      <div className='Headline' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '120px' }}>
        <h1 style={{ fontWeight: 'bold', fontSize:'24pt' }}>Review Pelanggan Kami</h1>
      </div>
      <div className='Review'>
      <Slider {...settings}>
      {dataReview.map((item) => (
    <div className='card' key={item.id}>
      <div className='card-top'>
        <img src={item.Img} alt={item.name}/>
        <div className='name'>
        <h1>{item.name}</h1>
        </div>
      </div>
      <div className='card-bottom'>
        <h3>{item.capt}</h3>
    </div>
    </div>
  ))}
</Slider>
      </div>
    </>
  );
}

export default Informasi;
