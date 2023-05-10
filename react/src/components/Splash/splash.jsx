import './Splash.css'
import React from 'react'


export default function SplashLoading() {
  return (
    <div className="spalsh-loading">
      <div className="splash-main">
        <div className='loader-container d-flex flex-column'>
          <div className="loader"></div>
          <h2 className='mt-3 text-info lead'>Manifest AI</h2>
        </div>
      </div>
    </div>
  )
}
