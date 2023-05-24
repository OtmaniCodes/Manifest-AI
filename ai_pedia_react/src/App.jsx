import { useEffect, useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Home from './pages/AIPedia/Home';
import {setData } from './redux/dataSlice';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './components/Navbar/Navbar';

function App() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data.data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/get-ai-pedia-tools');
        const data = await response.json();
        dispatch(setData(data));
        console.log(data)
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    fetchData();
  }, [dispatch]);

 

  return (
    <div className="App">
      <BrowserRouter>
          {/* <ScrollProgressBar/> */}
          <Navbar />
          {/* <div>{content}</div> */}
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/serach/:name" element={<Home/>}/>
            {/* <Route path="*" element={<Abort404/>} /> */}
          </Routes>
          {/* <ScrollToTopButton/> */}
          {/* <Footer />  */}
      </BrowserRouter>
    </div>
  )
}

export default App
