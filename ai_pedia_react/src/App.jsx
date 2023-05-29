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
import PediaCategories from './pages/PediaCategories/PediaCategories';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Signup/Signup';
import SearchCategory from './pages/SearchAiPedia/SearchCategory/SearchCategory';
import SearchQuery from './pages/SearchAiPedia/SearchQuery/SearchQuery';


function App() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data.data);

  //TODO: fetch user from server here


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
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/register" element={<Register/>}/>
            <Route exact path="/categories" element={<PediaCategories/>}/>
            <Route exact path="/categories/:category" element={<SearchCategory/>}/>
            <Route exact path="/search/:query" element={<SearchQuery/>}/>
            <Route exact path="/tool/:name" element={<AIToolPage/>}/>
            {/* <Route path="/favourites" element={<ProtectedRoute><FavouriteToolsPage /></ProtectedRoute>} /> */}

            {/* <Route path="*" element={<Abort404/>} /> */}
          </Routes>
          {/* <ScrollToTopButton/> */}
          <Footer /> 
      </BrowserRouter>
    </div>
  )
}

const ProtectedRoute = ({ children }) => {
  const authState = useSelector((state) => state.auth);

  if (!authState.loggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};




export default App
