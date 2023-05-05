import './Home.css'
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

// assets ----------------------
import videoIntro from "../../assets/video-intro.mp4"
import TeamSection from '../../components/TeamSection/TeamSection';
import HeroSection from '../../components/HeroSection/HeroSectoin';
import AboutSection from '../../components/AboutSection/AboutSection';
import Services from '../../pages/Services/Services'
import Contact from '../../pages/Contact/Contact'

const Home = () => {
    return ( 
        <div id="home">
            <Navbar/>
            {/* ====================================== */}
            <HeroSection/>

            <section className="video-section">
                <div className="container py-5">
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
            <AboutSection/>
            <TeamSection/>
            <Contact/>

            
            


            {/* ====================================== */}
            <Footer/>
        </div>
     );
}
 
export default Home;