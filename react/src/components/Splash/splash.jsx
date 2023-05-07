import './Splash.css'
import React from 'react'
import PuffLoader from "react-spinners/PuffLoader";


export default function SplashLoading() {
  return (
    <div className="spalsh-loading">
      {/* <PuffLoader color={"#36d7b7"} /> */}
      
    <PuffLoader
      color="#28db64"
      cssOverride={{
        	backgroundImage: 'linear-gradient(to right, #22B4D7, #28db64)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
      }}
      size={154}
    />
    </div>
  )
}
