import React from 'react';
import './SplashLoader.css';
import brain from '../../../assets/images/ma_blue_brain_logo.svg'

const SplashLoader = () => {
    return (
        <div className="loading-screen">
            <div className="loader"></div>
            <img src={brain} className="brain-img"/>
        </div>
    );
};

export default SplashLoader;
