import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Home from './pages/AIPedia/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          {/* <ScrollProgressBar/> */}
          {/* <Navbar /> */}
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/Serach/:name" element={<Home/>}/>
            {/* <Route path="*" element={<Abort404/>} /> */}
          </Routes>
          {/* <ScrollToTopButton/> */}
          {/* <Footer />  */}
      </BrowserRouter>
    </div>
  )
}

export default App
