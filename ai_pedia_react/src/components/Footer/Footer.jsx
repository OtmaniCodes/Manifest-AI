import './Footer.css'
import React from 'react'

export default function Footer() {
  return (
    <footer>
        <div className="container-fluid">
            <div className="d-flex flex-column justify-content-center align-items-center w-100">
              <a href="/">
                <h3>AI <span>PEDIA</span></h3>
              </a>
              <h6>Sponsered by <a href="https://www.manifest-ai.com" target='_blank'>Manifest AI</a></h6>
            </div>
        </div>
    </footer>
  )
}
