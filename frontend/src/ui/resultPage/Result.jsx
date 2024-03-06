import React from 'react';
import Navbar from '../Navbar/Navbar';
import e1 from '../../imgs/endo1.jpg'
import e2 from '../../imgs/endo2.jpg'
import e3 from '../../imgs/endo3.jpg'
import e4 from '../../imgs/endo4.jpg'
import '../AnalysisPage/Analysis.scss'
import './Result.scss'

const Result = () => {
    return (
        <div>
            <Navbar />
            <h1>IMAGE PROCESSING ANALYSIS</h1>
            <div className='nameNdDetails'>
                <h4>Name: adil </h4>
                <h4>Patient No.: 9465645 </h4>
            </div>
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
        </div>
    );
};

export default Result;

