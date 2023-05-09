import TeamSection from '../../components/TeamSection/TeamSection';
import HeroSection from '../../components/HeroSection/HeroSectoin';
import AboutSection from '../../components/AboutSection/AboutSection';
import Services from '../../pages/Services/Services'
import Contact from '../../pages/Contact/Contact'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom';



// assets ----------------------
import './Home.css'
import videoIntro from "../../assets/video-intro.mp4"
import Articles from '../Articles/Articles';
import JobOffers from '../JobOffers/JobOffers';
import { useEffect, useRef } from 'react';
import manifestBrain from '../../assets/manifest_logo.png'
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';
import useScrollToTop from '../../hooks/useScrollToTop';
import { Helmet } from 'react-helmet';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Manifesto from '../Manifesto/Manifesto';


const Home = () => {
    useScrollToTop();
    const videoRef = useRef();
    useEffect(() => {
        if (videoRef.current) {
        videoRef.current.play();
        }
    }, []);
    return ( 
        <div id="home">
            <HeroSection/>
            <Fade delay={200}>
                    <section className="video-section">
                        <div className="container py-5">
                            <SectionTitle title={"Introducing MANIFEST AI"} />
                            <div className="row">
                            <div className="col-12">
                            <Zoom duration={1200}>
                                <video ref={videoRef} className="video" width="100%" height="auto" autoplay={true} preload loop muted playsinline controls>
                                <source src={videoIntro} type="video/mp4" />
                                Your browser does not support the video tag.
                                </video>
                            </Zoom>
                            </div>
                            </div>
                        </div>
                    </section>
            </Fade>
            <Services/>
            <AboutSection/>






            <TeamSection/>
            <Articles limit={4}/>
            <JobOffers/>
            <div className='take-action'>
                <div className="content container-fluid h-100">
                <div className="row justify-content-center align-items-center h-100">
                        <div className="col-md-10 text-center">
                            <img src={manifestBrain} alt={"Manifest AI Logo"}/>
                            <p className="h2">&ldquo;ALWAYS INNOVATING WITH ETHICS&rdquo;</p>
                        </div>
                    </div>
                </div>
            </div>
            <Contact/>
            <ScrollToTopButton/>
            <Helmet>
                <title>HOME - MANIFEST AI</title>
            </Helmet>
        </div>
     );
}
 
export default Home;