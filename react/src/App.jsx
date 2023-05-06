import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Team from './pages/Team/Team';
import Articles from './pages/Articles/Articles';
import ArticlePage from './pages/Articles/ArticlePage/ArticlePage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/team" element={<Team/>}/>
          <Route exact path="/articles" element={<Articles/>}/>
          <Route path="/articles/:slug" element={<ArticlePage/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
