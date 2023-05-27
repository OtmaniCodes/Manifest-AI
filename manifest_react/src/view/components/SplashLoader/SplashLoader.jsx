import React from 'react';
import './SplashLoader.css';
import brain from '../../../assets/images/ma_blue_brain_logo.png'
import { Zoom } from 'react-reveal';

const SplashLoader = () => {
    return (
        <div className="loading-screen">
            <div className="loader"></div>
            <Zoom>
                <img src={brain} className="brain-img"/>
            </Zoom>
        </div>
    );
};

export default SplashLoader;
