import React, { useState } from 'react';
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../../assets/manifest_logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    function toggleMobileMenu() {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    return (
        <header id="header" className="fixed-top">
            <div className="navbar-container d-flex align-items-center">
                <Link to={"/"} className="logo me-auto me-lg-0">
                    <img src={logo} alt="" className="img-fluid" />
                </Link>

                <nav id="navbar" className={`navbar test order-last order-lg-0 ${isMobileMenuOpen ? 'navbar-mobile' : ''}`}>
                    <ul>
                <li><Link to={'/'} className="active">Home</Link></li>
                <li><Link to={'/services'} >Services</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/team">Team</Link></li>
                <li><Link to="/articles">Articles</Link></li>
                <li><Link to="/job-offers">Job Offers</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li className="dropdown"><Link to="#"><span>Community</span> <i className="bi bi-chevron-down"></i></Link>
                    <ul>
                    <li><a href="team.html">Discord</a></li>
                    <li className="dropdown"><a href="#"><span>More</span> <i className="bi bi-chevron-right"></i></a>
                        <ul>
                        <li><a href="#">page 1</a></li>
                        <li><a href="#">page 2</a></li>
                        </ul>
                    </li>
                    </ul>
                </li>
                    </ul>
                    <i id='mobile-nav-toggle' className="bi bi-list mobile-nav-toggle" onClick={test} ></i>
                </nav>

                <i id='mobile-nav-toggle' className={`bi ${isMobileMenuOpen ? 'bi-x' : 'bi-list'} mobile-nav-toggle`} onClick={toggleMobileMenu}></i>

                <div className="header-social-links d-flex">
                    <a href="#" className="twitter"><i className="bu bi-twitter"></i></a>
                    <a href="#" className="facebook"><i className="bu bi-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bu bi-instagram"></i></a>
                    <a href="#" className="linkedin"><i className="bu bi-linkedin"></i></a>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
