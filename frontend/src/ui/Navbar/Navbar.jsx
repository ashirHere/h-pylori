import React from 'react'
import logo from '../../imgs/iqralogo.png'
import './Navbar.scss'
import i1 from '../../imgs/1.jpg'
import i2 from '../../imgs/2.jpg'
import i3 from '../../imgs/3.jpg'
import i4 from '../../imgs/4.jpg'
import i5 from '../../imgs/5.jpg'
import i6 from '../../imgs/6.jpg'


function Navbar() {

  return (
    <div>
      <img className='logo' src={logo} alt="not found" />
      <div className='img-container-nav'>
        <img src={i1} alt="not found" className='carousel-image' />
        <img src={i2} alt="not found" className='carousel-image' />
        <img src={i3} alt="not found" className='carousel-image' />
        <img src={i4} alt="not found" className='carousel-image' />
        <img src={i5} alt="not found" className='carousel-image' />
        <img src={i6} alt="not found" className='carousel-image' />
        <img src={i3} alt="not found" className='carousel-image' />
        <img src={i4} alt="not found" className='carousel-image' />
      </div>
    </div>
  )
}

export default Navbar



