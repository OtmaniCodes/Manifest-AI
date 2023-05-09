import './Splash.css'
import React from 'react'


export default function SplashLoading() {
  return (
    <div className="spalsh-loading">
      <div className="splash-main">
        <div className='loader-container'>
          <div className="loader"></div>
          <h2 className='ms-2'>Manifest AI</h2>
        </div>
      </div>
    </div>
  )
}
