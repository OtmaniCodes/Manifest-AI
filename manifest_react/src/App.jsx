import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import React, { Suspense } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SplashLoader from './view/components/SplashLoader/SplashLoader';
import ScrollProgressBar from './view/components/ScrollProgressBar/ScrollProgressBar'
import Navbar from './view/components/Navbar/Navbar';
import Footer from './view/components/Footer/Footer';
import ScrollToTopButton from './view/components/ScrollToTopButton/ScrollToTopButton'

const Home = React.lazy(() => import('./view/pages/Home/Home'));
const About = React.lazy(() => import('./view/pages/About/About'));
const Team = React.lazy(() => import('./view/pages/Team/Team'));
const Articles = React.lazy(() => import('./view/pages/Articles/Articles'));
const JobOffers = React.lazy(() => import('./view/pages/JobOffers/JobOffers'));
const Contact = React.lazy(() => import('./view/pages/Contact/Contact'));
const ArticlePage = React.lazy(() => import('./view/pages/Articles/ArticlePage/ArticlePage'));
const ServicePage = React.lazy(() => import('./view/pages/Services/ServicePage/ServicePage'));
const Services = React.lazy(() => import('./view/pages/Services/Services'));
const Manifesto = React.lazy(() => import('./view/pages/Manifesto/Manifesto'));
const Abort404 = React.lazy(() => import('./view/pages/not-found/Abort404'));
// const Footer = React.lazy(() => import('./components/Footer/Footer'));
// const Navbar = React.lazy(() => import('./components/Navbar/Navbar'));
// const ScrollProgressBar = React.lazy(() => import("./components/ScrollProgressBar/ScrollProgressBar"));
// const ScrollToTopButton = React.lazy(() => import('./components/ScrollToTopButton/ScrollToTopButton'));
// const Abort404 = React.lazy(() => import('./pages/abort-404/Abort404'));

function App() {
  // return <SplashLoader/>
  return (
      <div className="App">
        <BrowserRouter>
          <Suspense fallback={<SplashLoader/>}>
            <ScrollProgressBar/>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/about" element={<About/>}/>
              <Route exact path="/team" element={<Team/>}/>
              <Route exact path="/articles" element={<Articles/>}/>
              <Route exact path="/job-offers" element={<JobOffers />} />
              <Route exact path="/contact" element={<Contact/>}/>
              <Route path="/articles/:slug" element={<ArticlePage/>} />
              <Route exact path="/services" element={<Services/>}/>
              <Route path="/services/:slug" element={<ServicePage/>} />
              <Route path="/manifest" element={<Manifesto/>} />
              <Route path="*" element={<Abort404/>} />
            </Routes>
            <ScrollToTopButton/>
            <Footer /> 
          </Suspense>
        </BrowserRouter>
      </div>
  )
}

export default App;


