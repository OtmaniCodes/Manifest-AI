import TeamSection from '../../components/TeamSection/TeamSection';
import HeroSection from '../../components/HeroSection/HeroSectoin';
import AboutSection from '../../components/AboutSection/AboutSection';
import Services from '../../pages/Services/Services'
import Contact from '../../pages/Contact/Contact'

// assets ----------------------
import './Home.css'
import videoIntro from "../../assets/video-intro.mp4"
import Articles from '../Articles/Articles';
import JobOffers from '../JobOffers/JobOffers';
import { useEffect, useRef } from 'react';


const Home = () => {
    const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
    return ( 
        <div id="home">
            <HeroSection/>
            <section className="video-section">
                <div className="container py-5">
                    <div className="row">
                    <div className="col-12">
                        <video ref={videoRef} className="video" width="100%" height="auto" autoplay={true} preload loop muted playsinline controls>
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
            <Articles limit={5}/>
            <JobOffers/>
            <Contact/>
        </div>
     );
}
 
export default Home;