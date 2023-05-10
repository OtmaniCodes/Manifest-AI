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
import lottieAsset from '../../assets/55638-sustainability.json';
import Lottie from "react-lottie";
import CommendmentsSlider from '../Manifesto/CommendmentsSlider';


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
            <section className="video-section">
                <div className="px-5 py-5">
                    <SectionTitle title={"Introducing MANIFEST AI"} />
                    <div className="row">
                    <div className="col-12">
                    <Fade duration={900}>
                    {/* <Zoom duration={900}> */}
                        <video ref={videoRef} className="video" width="100%" height="auto" autoPlay preload loop muted playsinline controls>
                        <source src={videoIntro} type="video/mp4" />
                        Your browser does not support the video tag.
                        </video>
                    {/* </Zoom > */}
                    </Fade>
                    </div>
                    </div>
                </div>
            </section>
            <Services/>
            <div id='About-section'>
                <AboutSection/>
            </div>            
            <div className='py-5' style={{backgroundColor:"#EBEDF0"}}>
                <SectionTitle title={"The 10 Commendments"} subTitle={""}/>
                <CommendmentsSlider/>
            </div>
            
            <TeamSection/>
            <Articles limit={4}/>
            <JobOffers/>
            <div className='take-action'>
                <div className="content container-fluid h-100">
                <div className="row justify-content-center align-items-center h-100">
                        <div className="col-md-10 text-center">
                            <Zoom>
                                <img src={manifestBrain} alt={"Manifest AI Logo"}/>
                            </Zoom>
                            <Fade bottom>
                                <p className="h2">&ldquo;ALWAYS INNOVATING WITH ETHICS&rdquo;</p>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            <Contact/>
            
            <CityLottie/>
            <Helmet>
                <title>HOME - MANIFEST AI</title>
            </Helmet>
        </div>
     );
}
 
export default Home;


function CityLottie() {
  const lottieRef = useRef();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieAsset,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="city-lottie">
        <Lottie options={defaultOptions} ref={lottieRef} />
    </div>
  )
}
