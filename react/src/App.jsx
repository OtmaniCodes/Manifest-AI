import { useState } from 'react'
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import Team from './pages/Team/Team';
import Articles from './pages/Articles/Articles';
import ArticlePage from './pages/Articles/ArticlePage/ArticlePage';
import Contact from './pages/Contact/Contact';
import Services from './pages/Services/Services';
import ServicePage from './pages/Services/ServicePage/ServicePage';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import JobOffers from './pages/JobOffers/JobOffers';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/team" element={<Team/>}/>
          <Route exact path="/articles" element={<Articles/>}/>
          <Route path="/articles/:id" element={<ArticlePage/>} />

          <Route exact path="/contact" element={<Contact full={true}/>}/>
          <Route exact path="/services" element={<Services full={true}/>}/>
          <Route exact path="/service/:id" element={<ServicePage full={true}/>} />
          <Route exact path="/job-offers" element={<JobOffers/>} />

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
