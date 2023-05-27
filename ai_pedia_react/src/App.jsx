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
import AIToolPage from './pages/AIToolPage/AIToolPage';
import Footer from './components/Footer/Footer';
import 'react-toastify/dist/ReactToastify.css';
import SearchCategory from './pages/SearchAiPedia/SearchCategory';
import PediaCategories from './pages/PediaCategories/PediaCategories';


function App() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data.data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/get-ai-pedia-tools`);
        const data = await response.json();
        dispatch(setData(data));
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
            <Route exact path="/tools" element={<Home/>}/>
            <Route exact path="/categories" element={<PediaCategories/>}/>
            <Route exact path="/categories/:category" element={<SearchCategory/>}/>
            <Route exact path="/tool/:name" element={<AIToolPage/>}/>
            {/* <Route path="*" element={<Abort404/>} /> */}
          </Routes>
          {/* <ScrollToTopButton/> */}
          <Footer /> 
      </BrowserRouter>
    </div>
  )
}

export default App
