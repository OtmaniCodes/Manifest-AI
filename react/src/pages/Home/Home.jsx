import './Home.css'
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

// assets ----------------------
import whiteBgLogo from "../../assets/images/white-logo.png";
import dotsWeb from "../../assets/images/dots-web.jpg";
import videoIntro from "../../assets/video-intro.mp4"
import Services from '../Services/Services';
import Contact from '../Contact/Contact';


const Home = () => {
    return ( 
        <div id="home">
            <Navbar/>
            {/* ====================================== */}
            <HeroSection/>

            <section className="video-section">
                <div className="container">
                    <div className="row">
                    <div className="col-12">
                        <video className="video" width="100%" height="auto" controls>
                        <source src={videoIntro} type="video/mp4" />
                        Your browser does not support the video tag.
                        </video>
                    </div>
                    </div>
                </div>
            </section>

            <Services/>
            <Contact/>









            {/* ====================================== */}
            {/* <Footer/> */}
        </div>
     );
}
 
export default Home;

function HeroSection() {
  return (
    <section id='hero'>
        <div className="d-flex justify-content-end">
            <img className='dots-web' src={dotsWeb} />
        </div>
        <div className="container h-100">
            <div className="row h-100 justify-content-between align-items-center order-2 order-md-1">
                <div className="col-md-6 text-center text-md-start order-2 order-md-1">
                    <h6>Consulting, Sustainabiliy, AI TECH.</h6>
                    <h1>INNOVATING SOLUTIONS FOR A BETTER WORLD</h1>
                    <div className="d-flex justify-content-center justify-content-md-start mt-5">
                        <button class="global-btn">Join our journey</button>
                    </div>

                </div>
                <div className="col-md-4 text-center order-1 order-md-2 mb-5 mb-md-0">
                    <img className='white-logo' src={whiteBgLogo} alt="logo"/>
                </div>
            </div>
        </div>
    </section>
  );
}
