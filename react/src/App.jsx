//assets ----------------------------
// import parallaxBg from  './assets/images/all-bg.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

// other ---------------------------
import React from 'react';
import { lazy, Suspense } from "react";
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Team from './pages/Team/Team';
import Articles from './pages/Articles/Articles';
import ArticlePage from './pages/Articles/ArticlePage/ArticlePage';
import Contact from './pages/Contact/Contact';
import Services from './pages/Services/Services';
// import ServicePage from './pages/Services/ServicePage/ServicePage';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import JobOffers from './pages/JobOffers/JobOffers';
import FileUpload from "./pages/JobOffers/FileUpload";
import ScrollProgressBar from "./components/ScrollProgressBar/ScrollProgressBar";
import Manifesto from './pages/Manifesto/Manifesto';
import bgVideo from "./assets/bg-video.mp4"
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import Abort404 from './pages/abort-404/Abort404';


// const Home = lazy(() => import("./pages/Home/Home"));

function App() {


  return (
      <div className="App">
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          left: '50%',
          top: '50%',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
          // opacity: 0.4,
          zIndex: '-2',
          pointerEvents: 'none',
          // filter: 'brightness(50%)',
          filter: 'blur(1px)',
        }}
      >
        {/* <source src={"https://firebasestorage.googleapis.com/v0/b/manifest-ai-aa018.appspot.com/o/bgVideo.mp4?alt=media&token=e39dfb86-6e84-4fb4-a5fe-cc73202ed8a2"} type="video/mp4" /> */}
        <source src={bgVideo} type="video/mp4" />
      </video>
        <BrowserRouter>
          <ScrollProgressBar/>
          <Navbar />
          <Routes>
            {/* <Route exact path="/" element={<Suspense><Home/></Suspense>}/> */}
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/team" element={<Team/>}/>
            <Route exact path="/contact" element={<Contact full={true}/>}/>
            <Route exact path="/services" element={<Services full={true}/>}/>
            <Route exact path="/job-offers" element={<JobOffers full={true}/>} />
            <Route exact path="/articles" element={<Articles showSearch={true}/>}/>
            <Route path="/articles/:slug" element={<ArticlePage/>} />
            <Route path="/manifest" element={<Manifesto/>} />
            <Route path="*" element={<Abort404/>} />
          </Routes>
          <ScrollToTopButton/>
          <Footer />
        </BrowserRouter>
      </div>
  )
}

export default App;





