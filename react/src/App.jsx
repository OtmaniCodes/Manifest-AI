// //assets ----------------------------
// // import parallaxBg from  './assets/images/all-bg.jpg';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import './App.css';

// // other ---------------------------
// import React from 'react';
// import {BrowserRouter,Routes,Route,} from "react-router-dom";
// import Home from './pages/Home/Home';
// import About from './pages/About/About';
// import Team from './pages/Team/Team';
// import Articles from './pages/Articles/Articles';
// import ArticlePage from './pages/Articles/ArticlePage/ArticlePage';
// import Contact from './pages/Contact/Contact';
// import Services from './pages/Services/Services';
// import Footer from './components/Footer/Footer';
// import Navbar from './components/Navbar/Navbar';
// import JobOffers from './pages/JobOffers/JobOffers';
// import ScrollProgressBar from "./components/ScrollProgressBar/ScrollProgressBar";
// import Manifesto from './pages/Manifesto/Manifesto';
// import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
// import Abort404 from './pages/abort-404/Abort404';



// function App() {
//   return (
//       <div className="App">
//         <BrowserRouter>
//           <ScrollProgressBar/>
//           <Navbar />
//           <Routes>
//             {/* <Route exact path="/" element={<Suspense><Home/></Suspense>}/> */}
//             <Route exact path="/" element={<Home/>}/>
//             <Route exact path="/about" element={<About/>}/>
//             <Route exact path="/team" element={<Team/>}/>
//             <Route exact path="/contact" element={<Contact full={true}/>}/>
//             <Route exact path="/services" element={<Services full={true}/>}/>
//             <Route exact path="/job-offers" element={<JobOffers full={true}/>} />
//             <Route exact path="/articles" element={<Articles showSearch={true}/>}/>
//             <Route path="/articles/:slug" element={<ArticlePage/>} />
//             <Route path="/manifest" element={<Manifesto/>} />
//             <Route path="*" element={<Abort404/>} />
//           </Routes>
//           <ScrollToTopButton/>
//           <Footer />
//         </BrowserRouter>
//       </div>
//   )
// }

// export default App;




import React, { Suspense } from 'react';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SplashLoading from './components/Splash/splash';
import useAxios from './hooks/useAxios';
import Page from './hooks/Page';

const Home = React.lazy(() => import('./pages/Home/Home'));
const About = React.lazy(() => import('./pages/About/About'));
const Team = React.lazy(() => import('./pages/Team/Team'));
const Articles = React.lazy(() => import('./pages/Articles/Articles'));
const ArticlePage = React.lazy(() => import('./pages/Articles/ArticlePage/ArticlePage'));
const Contact = React.lazy(() => import('./pages/Contact/Contact'));
const Services = React.lazy(() => import('./pages/Services/Services'));
const Footer = React.lazy(() => import('./components/Footer/Footer'));
const Navbar = React.lazy(() => import('./components/Navbar/Navbar'));
const JobOffers = React.lazy(() => import('./pages/JobOffers/JobOffers'));
const ScrollProgressBar = React.lazy(() => import("./components/ScrollProgressBar/ScrollProgressBar"));
const Manifesto = React.lazy(() => import('./pages/Manifesto/Manifesto'));
const ScrollToTopButton = React.lazy(() => import('./components/ScrollToTopButton/ScrollToTopButton'));
const Abort404 = React.lazy(() => import('./pages/abort-404/Abort404'));

function App() {

  return (
      <div className="App">
        <BrowserRouter>
          <Suspense fallback={<SplashLoading/>}>
            <ScrollProgressBar/>
            <Navbar />
            <Routes>
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
              <Route path="/page" element={<Page/>} />
            </Routes>
            <ScrollToTopButton/>
            <Footer />
          </Suspense>
        </BrowserRouter>
      </div>
  )
}

export default App;


