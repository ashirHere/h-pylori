import React from 'react';
import Navbar from '../Navbar/Slider';
import i1 from '../../imgs/1.jpg'
import i2 from '../../imgs/2.jpg'
import i3 from '../../imgs/3.jpg'
import i4 from '../../imgs/4.jpg'
import './Analysis.scss'

const Analysis = () => {
  return (
    <div>
      <Navbar />
      <div >
        <div className='mainImg'>
          <img src={i1} alt="Image 1" />
        </div>
        <div className='sideImages'>
          <img src={i2} alt="Image 2" />
          <img src={i3} alt="Image 3" />
          <img src={i4} alt="Image 4" />
        </div>
      </div>
    </div>
  );
};

export default Analysis;

