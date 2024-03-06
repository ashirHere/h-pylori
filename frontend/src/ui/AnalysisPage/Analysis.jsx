import React from 'react';
import Navbar from '../Navbar/Navbar';
import e1 from '../../imgs/endo1.jpg'
import e2 from '../../imgs/endo2.jpg'
import e3 from '../../imgs/endo3.jpg'
import e4 from '../../imgs/endo4.jpg'
import './Analysis.scss'
import { useNavigate } from 'react-router-dom';




const Analysis = () => {

  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className='seeAllImages'>
        <div className='mainImg'>
          <img src={e1} alt="Image 1" />
        </div>
        <div className='sideImages'>
          <img src={e2} alt="Image 2" />
          <img src={e3} alt="Image 3" />
          <img src={e4} alt="Image 4" />
          <img src={e3} alt="Image 3" />
        </div>
      </div>
      <div className='negativeAcc'>
        <p>NEGATIVE: 78%</p>
        <p className='p2'>ACCURACY: 0.82</p>
      </div>
      <div>
        <button type="button" class="btn btn-primary">RE-EVALUATE</button>
        <button onClick={() => navigate('/result')} type="button" class="btn btn-success">SHOW ANALYSIS</button>
      </div>
    </div>
  );
};

export default Analysis;

