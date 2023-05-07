import './Splash.css'
import React from 'react'
import PuffLoader from "react-spinners/PuffLoader";
import maBrain from '../../assets/images/ma-brain.png';


export default function SplashLoading() {
  return (
    <div className="spalsh-loading">
      {/* <PuffLoader color={"#36d7b7"} /> */}
    <div className="splash-main">

    <PuffLoader
      color="#28db64"
      cssOverride={{
        	backgroundImage: 'linear-gradient(to right, #22B4D7, #28db64)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          position: 'relative',
      }}
      size={154}
    />
    <img className='brain' src={maBrain} alt={""} />
    </div>
    </div>
  )
}
