//assets ----------------------------
// import parallaxBg from  './assets/images/all-bg.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

// other ---------------------------
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
import Commendments from './pages/TenCommendments/Commendments';
// import { Parallax, Background } from 'react-parallax';


function App() {
  return (

    // <Parallax
    //     blur={{ min: -15, max: 15 }}
    //     bgImage={parallaxBg}
    //     bgImageStyle={{height: '100%', width: '100vw'}}
    //     bgImageAlt="background ima"
    //     strength={-500}
    // >
      <div className="App" style={{backgroundColor: '#ffffffaa'}}>
        <BrowserRouter>
          <ScrollProgressBar/>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/team" element={<Team/>}/>
            <Route exact path="/contact" element={<Contact full={true}/>}/>
            <Route exact path="/services" element={<Services full={true}/>}/>
            {/* <Route exact path="/service/:slug" element={<ServicePage full={true}/>} /> */}
            <Route exact path="/job-offers" element={<JobOffers full={true}/>} />
            <Route exact path="/articles" element={<Articles showSearch={true}/>}/>
            <Route path="/articles/:slug" element={<ArticlePage/>} />

            <Route path="/test" element={<FileUpload/>} /> {/*remove it*/}
            <Route path="/commendment" element={<Commendments/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
      // <div />
    // {/* </Parallax> */}
  )
}

export default App
