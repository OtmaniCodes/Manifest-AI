import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../../assets/manifest_logo.png'

const Navbar = () => {

    function test(){
        document.getElementById('navbar').classNameList.toggle('navbar-mobile')
        // e.classNameList.toggle('bi-list')
        // e.classNameList.toggle('bi-x')
        document.getElementById('mobile-nav-toggle').classNameList.toggle('bi-list')
        document.getElementById('mobile-nav-toggle').classNameList.toggle('bi-x')
    }
    function dude(){
        // e.nextElementSibling.classNameList.toggle('dropdown-active')
    }
    return ( 
        <header id="header" className="fixed-top">
        <div className="navbar-container d-flex align-items-center">

          <a href="index.html" className="logo me-auto me-lg-0">
            <img src={logo} alt="" className="img-fluid"/>
          </a>
    
          <nav id="navbar" className="navbar test order-last order-lg-0 navbar-mobile">
            <ul>
              <li><a href="/" className="active">Home</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="portfolio.html">About</a></li>
              <li><a href="pricing.html">Team</a></li>
              <li><a href="blog.html">Articles</a></li>
              <li><a href="contact.html">Job Offers</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li className="dropdown"><a href="#"><span>Community</span> <i className="bi bi-chevron-down"></i></a>
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