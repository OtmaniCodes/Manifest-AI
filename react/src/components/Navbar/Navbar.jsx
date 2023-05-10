import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../../assets/manifest_logo.png'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useScrollToTop from '../../hooks/useScrollToTop';

const Navbar = () => { 
  const [Isopen,setIsOpen]=useState(false)
    function navToggle(){
        setIsOpen(!Isopen)
        document.getElementById('mobile-nav-toggle').classList.toggle('bi-list')
        document.getElementById('mobile-nav-toggle').classList.toggle('bi-x')
    }
    const [activeItem,setactiveItem]=useState('home')


  const [scrollPosition, setScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    function handleScroll() {
      const currentPosition = window.pageYOffset;
      setVisible(scrollPosition > currentPosition);
      setScrollPosition(currentPosition);

      console.log(currentPosition>scrollPosition)
    }
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition])
    return ( 
        <header id="header" className={visible ? '' : 'hidden-navbar' }>
        <div className="navbar-container px-2 d-flex align-items-center">

          <Link to={"/"} className="logo mx-2 me-auto me-lg-0">
            <img src={logo} alt="" className="img-fluid"/>
          </Link>
    
          <nav id="navbar" className="navbar order-last order-lg-0 ">
            <ul>
              <li><Link to={'/'} 
              className={activeItem === 'home' ? 'active' : ''}
              onClick={() => setactiveItem('home')}            
              >Home</Link></li>
              <li><Link to={'/services'} 
              className={activeItem === 'services' ? 'active' : ''}
              onClick={() => setactiveItem('services')}
              >Services</Link></li>
              <li><Link to="/about"
              className={activeItem === 'about' ? 'active' : ''}
              onClick={() => setactiveItem('about')}
              >About</Link></li>
              <li><Link to="/team"
              className={activeItem === 'team' ? 'active' : ''}
              onClick={() => setactiveItem('team')}
              >Team</Link></li>
              <li><Link to="/articles"
              className={activeItem === 'articles' ? 'active' : ''}
              onClick={() => setactiveItem('articles')}
              >Articles</Link></li>
              <li><Link to="/job-offers"
              className={activeItem === 'job-offers' ? 'active' : ''}
              onClick={() => setactiveItem('job-offers')}
              >Job Offers</Link></li>
              <li><Link to="/contact"
              className={activeItem === 'contact' ? 'active' : ''}
              onClick={() => setactiveItem('contact')}
              >Contact</Link></li>
              <li className="dropdown"><Link to="#"><span>Community</span> <i className="bi bi-chevron-down"></i></Link>
                <ul>
                  <li><a href="team.html">Discord</a></li>
                  {/* <li className="dropdown"><a href="#"><span>More</span> <i className="bi bi-chevron-right"></i></a>
                    <ul>
                      <li><a href="#">page 1</a></li>
                      <li><a href="#">page 2</a></li>
                    </ul>
                  </li> */}
                </ul>
              </li>
            </ul>
            <i id='mobile-nav-toggle' className="bi bi-list mobile-nav-toggle" onClick={navToggle} ></i>
          </nav>
          
    
          <div className="header-social-links d-flex">
            {/* <a href="#" className="twitter"><i className="bu bi-twitter"></i></a> */}
            {/* <a href="#" className="facebook"><i className="bu bi-facebook"></i></a> */}
            <a href="https://www.instagram.com/manifest_a.i/" className="instagram"><i className="bu bi-instagram"></i></a>
            <a href="https://www.linkedin.com/company/manifest-ai/" className="linkedin"><i className="bu bi-linkedin"></i></a>
          </div>
    
        </div>
        <nav className='nav-mobile' style={{display:!Isopen?'none':''}}>
        <ul>
              <li><Link to={'/'}  
              className={activeItem === 'home'?'active':''}
              onClick={() => {setactiveItem('home');navToggle()}}>Home</Link></li>
              <li><Link to={'/services'}  
              className={activeItem === 'services'?'active':''}
              onClick={() => {setactiveItem('services');navToggle()}}>Services</Link></li>
              <li><Link to="/about" 
              className={activeItem === 'about'?'active':''}
              onClick={() => {setactiveItem('about');navToggle()}}>About</Link></li>
              <li><Link to="/team" 
              className={activeItem === 'team'?'active':''}
              onClick={() => {setactiveItem('team');navToggle()}}>Team</Link></li>
              <li><Link to="/articles" 
              className={activeItem === 'articles'?'active':''}
              onClick={() => {setactiveItem('articles');navToggle()}}>Articles</Link></li>
              <li><Link to="/job-offers" 
              className={activeItem === 'job-offers'?'active':''}
              onClick={() => {setactiveItem('job-offers');navToggle()}}>Job Offers</Link></li>
              <li><Link to="/contact" 
              className={activeItem === 'contact'?'active':''}
              onClick={() => {setactiveItem('contact');navToggle()}}>Contact</Link></li>
              <li className="dropdown"><Link to="#"><span>Community</span> <i className="bi bi-chevron-down"></i></Link>
                <ul>
                  <li><a href="team.html" onClick={navToggle}>Discord</a></li>
                  <li className="dropdown"><a href="#"><span>More</span> <i className="bi bi-chevron-right"></i></a>
                    <ul>
                      <li><a href="#" onClick={navToggle}>page 1</a></li>
                      <li><a href="#" onClick={navToggle}>page 2</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
        </nav>
        </header>
     );
}
 
export default Navbar;