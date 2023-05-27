import Swal from 'sweetalert2';
import './Navbar.css'
import React, { useState } from 'react'

function Navbar(){

    const handleSubmitTool = () => {
        Swal.fire({
            title: 'SUBMIT YOUR AI TOOL TO MANIFEST AI PEDIA',
            html: `
                <h5>AI PEDIA is an AI tools directory supported by <a href="https://www.manifest-ai.com" target='_blank'>Manifest AI</a> that gets over 800K+ monthly visitors.</h5>
                <p>We only allow AI tools. Please do not submit an AI newsletter or another directory - it will get rejected.</p>
            `,
            icon: 'info',
            iconColor: '#52D094',
            confirmButtonText: 'SUBMIT NOW!',
            confirmButtonColor: '#52D094',
            onClick: () => {
                console.log("HI")
            }
        }).then((result) => {
            if (result.isConfirmed) {
                window.open("https://hadoudkawtarai.gumroad.com/l/submit-tool")
            }
        });
    }

return (
  <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <div className="container">
        <a className="navbar-brand" href="/">
            <p className='nav-logo'>AI <span>PEDIA</span></p>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mt-4 mt-md-0">
            {/* Add mx-auto class to center align the menu buttons */}
            <li className="nav-item">
              <a className="nav-link active-nav" href="#" onClick={handleSubmitTool}>
                SUBMIT A TOOL
              </a>
            </li>
            {/* <li className="nav-item dropdown">
              <div className="nav-link">
                <a className="dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                  JOIN THE MOVEMENT
                </a>
                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                  <li><a className="dropdown-item" href="#">AI FOR GOOD</a></li>
                  <li><a className="dropdown-item" href="#">AI FOR IMPACT</a></li>
                  <li><a className="dropdown-item" href="#">AI UNITED</a></li>
                </ul>
              </div>
            </li> */}
          </ul>

            <div className="header-social-links" >
                <a href="#" target='_blank' className="discord"><i className="bi bi-discord"></i></a>
                <a href="https://twitter.com/Manifest_AI" target='_blank' className="twitter"><i className="bu bi-twitter"></i></a>
                <a href="https://web.facebook.com/people/Manifest-AI/100092676223614" target='_blank' className="facebook"><i className="bu bi-facebook"></i></a>
                <a href="https://www.instagram.com/manifest_a.i" target='_blank' className="instagram"><i className="bu bi-instagram"></i></a>
                <a href="https://www.linkedin.com/company/manifest-ai" target='_blank' className="linkedin"><i className="bu bi-linkedin"></i></a>
            </div>
        </div>

      </div>
    </nav>
  </header>
);

}






 
export default Navbar;
