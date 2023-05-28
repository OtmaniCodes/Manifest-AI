import './Navbar.css'
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDataSource } from '../../../state/data-provider';


const Navbar = () => { 
    var {loading,sections} = useDataSource();
    sections=sections[0]
    const [Isopen, setIsOpen] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0);
    const [visible, setVisible] = useState(true);
    const [activeItem, setactiveItem] = useState('home')
    const location = useLocation();

    //TODO: add checks for pages that have no transparent bg
    var isHomePage = location.pathname.trim() == '/' || !location.pathname.trim();
    var keepTransBg = isHomePage && !Isopen &&  scrollPosition < 500;

    const transBg = {
        background: 'unset',
        boxShadow: 'unset',
        borderBottom: '1px #D9D9D9 solid',
        color: 'white'
    }

    function navToggle(){
        setIsOpen(!Isopen)
        document.getElementById('mobile-nav-toggle').classList.toggle('bi-list')
        document.getElementById('mobile-nav-toggle').classList.toggle('bi-x')
        document.getElementById('mobile-nav-toggle').classList.toggle('text-dark')
    }
  
    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.pageYOffset;
            setVisible(scrollPosition > currentPosition);
            setScrollPosition(currentPosition);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollPosition])

    return ( 
        <header id="header" className={visible ? '' : 'hidden-navbar'} style={keepTransBg ? transBg : {background: Isopen ? 'white' : null}}>
            <div className="navbar-container px-2 d-flex w-100 justify-content-around align-items-center">

                <Link to={"/"} className="logo mx-2 me-auto me-lg-0">
                    {/* <img src={keepTransBg ? whiteLogo : blueLogo} alt="" className="img-fluid"/> */}
                    <img src={!loading && sections.logo_menu} alt="" className="img-fluid"/>
                </Link>
        
                <nav id="navbar" className="navbar order-last order-lg-0 ">
                    <ul>
                        <li>
                            <Link to={'/'} 
                            className={`${activeItem === 'home' ? 'active' : ''} ${keepTransBg ? 'trans-bg' : ''}`}
                            onClick={() => setactiveItem('home')}>Home</Link>
                        </li>
                        <li><Link to={'/services'} 
                        // className={activeItem === 'services' ? 'active' : '' }
                        className={`${activeItem === 'services' ? 'active' : ''} ${keepTransBg ? 'trans-bg' : ''}`}
                        onClick={() => setactiveItem('services')}
                        >Services</Link></li>
                        <li><Link to="/about" style={{color: keepTransBg ? 'white' : 'white'}} 
                        className={activeItem === 'about' ? 'active' : ''}
                        onClick={() => setactiveItem('about')}
                        >About</Link></li>
                        <li><Link to="/team" style={{color: keepTransBg ? 'white' : 'white'}} 
                        className={activeItem === 'team' ? 'active' : ''}
                        onClick={() => setactiveItem('team')}
                        >Team</Link></li>
                        <li><Link to="/articles" style={{color: keepTransBg ? 'white' : 'white'}} 
                        className={activeItem === 'articles' ? 'active' : ''}
                        onClick={() => setactiveItem('articles')}
                        >Articles</Link></li>
                        <li><Link to="/job-offers" style={{color: keepTransBg ? 'white' : 'white'}} 
                        className={activeItem === 'job-offers' ? 'active' : ''}
                        onClick={() => setactiveItem('job-offers')}
                        >Job Offers</Link></li>
                        <li><Link to="/contact" style={{color: keepTransBg ? 'white' : 'white'}} 
                        className={activeItem === 'contact' ? 'active' : ''}
                        onClick={() => setactiveItem('contact')}
                        >Contact</Link></li>
                        <li className="dropdown">
                            <Link to="#" style={{color: keepTransBg ? 'white' : 'white'}} >
                                <span>Community</span> <i className="bi bi-chevron-down"></i></Link>
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
                    <i id='mobile-nav-toggle' style={{color: keepTransBg ? 'white' : 'white'}} className="bi bi-list mobile-nav-toggle" onClick={navToggle} ></i>
                </nav>
                
            
        
                <div className="header-social-links d-flex" style={{borderLeftColor: keepTransBg ? 'white' : 'white'}} >
                    {/* <a href="#" target='_blank' className="twitter"><i className="bu bi-twitter"></i></a> */}
                    {/* <a href="#" target='_blank' className="facebook"><i className="bu bi-facebook"></i></a> */}
                    <a href={!loading && sections.instagram} target='_blank' className="instagram"><i style={{color: keepTransBg ? 'white' : 'white'}}  className="bu bi-instagram"></i></a>
                    <a href={!loading && sections.linkedin} target='_blank' className="linkedin"><i style={{color: keepTransBg ? 'white' : 'white'}}  className="bu bi-linkedin"></i></a>
                    <a href={!loading && sections.tiktok} target='_blank' className="linkedin"><i style={{color: keepTransBg ? 'white' : 'white'}}  className="bi bi-tiktok"></i></a>
                    <a href={!loading && sections.twitter} target='_blank' className="linkedin"><i style={{color: keepTransBg ? 'white' : 'white'}}  className="bu bi-twitter"></i></a>
                    <a href={!loading && sections.facebook} target='_blank' className="linkedin"><i style={{color: keepTransBg ? 'white' : 'white'}}  className="bu bi-facebook"></i></a>
                </dive
    
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
                        {/*
                            <li className="dropdown"><a href="#"><span>More</span> <i className="bi bi-chevron-right"></i></a>
                                <ul>
                                    <li><a href="#" onClick={navToggle}>page 1</a></li>
                                    <li><a href="#" onClick={navToggle}>page 2</a></li>
                                </ul>
                            </li>
                        */}
                        </ul>
                    </li>
                    </ul>
                </nav>
        </header>
     );
}
 
export default Navbar;
