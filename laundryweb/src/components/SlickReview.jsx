import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {LayananKami} from './data/LayananKami';

function SlickReview() {
  return (
    <div className="App">
      <Slider>
        {LayananKami.map((item, index) => (
          <div className='card' key={index}>
            <div className='card-top'>
              <img src={item.image} alt={item.title} />
              <h1>{item.title}</h1>
            </div>
            <div className='card-bottom'>
              <h3>{item.review}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SlickReview;
