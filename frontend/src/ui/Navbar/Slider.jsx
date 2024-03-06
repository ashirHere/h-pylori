import React from 'react'
import logo from '../../imgs/iqralogo.png'
import { useEffect } from 'react';
// import './Navbar.scss'
import './NavStyle.scss'
import Navbar from './Navbar';
import i1 from '../../imgs/1.jpg'
import i2 from '../../imgs/2.jpg'
import i3 from '../../imgs/3.jpg'
import i4 from '../../imgs/4.jpg'
import i5 from '../../imgs/5.jpg'
import i6 from '../../imgs/6.jpg'
import i7 from '../../imgs/7.jpg'
import i8 from '../../imgs/8.jpg'
import i9 from '../../imgs/9.jpg'

function Slider() {
    useEffect(() => {
      const root = document.documentElement;
      const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
      const marqueeContent = document.querySelector("ul.marquee-content");
  
      root.style.setProperty("--marquee-elements", marqueeContent.children.length);
  
      for (let i = 0; i < marqueeElementsDisplayed; i++) {
        marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
      }
    }, []); 
  
  return (
    <div className='ash'>
      <Navbar />
      <div className='marquee'>
        <ul className='marquee-content'>
          <li><img src={i1} alt="not found" className='carousel-image' /></li>
          <li><img src={i2} alt="not found" className='carousel-image' /></li>
          <li><img src={i3} alt="not found" className='carousel-image' /></li>
          <li><img src={i4} alt="not found" className='carousel-image' /></li>
          {/* <li><img src={i5} alt="not found" className='carousel-image' /></li>
          <li><img src={i6} alt="not found" className='carousel-image' /></li>
          <li><img src={i7} alt="not found" className='carousel-image' /></li>
          <li><img src={i8} alt="not found" className='carousel-image' /></li>
          <li><img src={i9} alt="not found" className='carousel-image' /></li> */}
        </ul>
      </div>
    </div>
  )
}


export default Slider



