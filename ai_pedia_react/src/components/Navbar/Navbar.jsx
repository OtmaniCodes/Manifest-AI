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
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">
                        <p className='nav-logo'>Sponsored By Manifest</p>
                    </a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto mt-4 mt-md-0"> {/* Add mx-auto class to center align the menu buttons */}
                            <li className="nav-item">
                                <a className="nav-link active-nav" onClick={handleSubmitTool} href="#">SUBMIT A TOOL</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">JOIN THE MOMVEMENT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}






 
export default Navbar;
