import './Home.css'
import React, { useEffect, useState } from 'react';
// import chatfast from '../../../assets/pedia/chatfast.webp.png'
import chatfast from '../../assets/pedia/chatfast.webp.png'
import AIPediaCards from '../../components/AIPediaCards/AIPediaCards';
import {Link, useLocation} from 'react-router-dom'
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import Header from '../../components/Header/Header'
import { ToastContainer, toast } from 'react-toastify';


function Home(){
    const data = useSelector(state => state.data.data);
    const authState = useSelector((state) => state.auth);
    const location = useLocation();
    const [name, setName] = useState('tools');
    const [category, setCategory ] = useState(null);
    const [newTools,setNewTools]=useState(null)
    const [collections,setCollections]=useState(null)
    // const filterTools = () => {
    //     const currentDate = new Date();
    //     const filtered = data.tools.filter((tool) => {
    //       const toolCreatedAt = new Date(tool.created_at);
    //       return toolCreatedAt < currentDate;
    //     }).slice(0, 6);
    //     const filteredTools = data.tools.filter(tool => tool.is_manifest_collection === 1);
    //     setNewTools(filtered)
    //     setCollections(filteredTools)
    //   };
  useEffect(() => {
    if (location.state ? location.state.afterLogin : false) {
      toast.success(`Hey ${authState.user['name'] ?? 'there'}! Welcome to AI Pedia.`, {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
      });
      location.state.afterLogin = false;
    }
  }, []);

    useEffect(()=>{
        window.scrollTo({'behavior': 'instant', top: 0})
        if(data){
            // filterTools()
            setCollections(data.manifest_collections.map(e => ({
                ...e,
                image: e.image ? `${import.meta.env.VITE_SERVER_URL}/storage/${e.image}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj1UU-9fy5fPAMrlsO9QmqcuAV5i65SBRDD4dTHS8kG9zD6U6piqsZFm7wyTC399RljYI&usqp=CAU"
            })));
            setNewTools(data.tools.map(e => ({
            ...e,
            image: e.image ? `${import.meta.env.VITE_SERVER_URL}/storage/${e.image}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj1UU-9fy5fPAMrlsO9QmqcuAV5i65SBRDD4dTHS8kG9zD6U6piqsZFm7wyTC399RljYI&usqp=CAU"
            })));
        }
    },[data])

    const url = category ? `/search/${name}/${category}` : `/search/${name}`;
    
    // useEffect(()=>{
    //     // console.log(category)
    // },[category])

    const renderDiscordAdCard = () => {
        return (
            <div className='pedia-discord'>  
                <div>
                    <h1>Grow your AI talent !</h1>
                    <div className='pedia-discord-first'>Join our Discord community and win a free subscription of the most popular AI tool!</div>
                    <div className='pedia-discord-second'>Level up your skills with daily games and competitions</div>
                </div>
                <div className='pedia-discord-button'>
                    JOIN DISCORD 👌
                </div>
            </div>
        )
    }

    return (    
        <div className='container mb-5'> 
            {   
            data
                ? <div className='pedia-container'>
                    {/* contains search bar/category chips */}
                    <Header/>
                    
                    <div className='pedia-items-title'>🔥 Just Arrives</div>
                    <AIPediaCards tools={newTools}/>
                    
                    {renderDiscordAdCard()}
                    
                    <div className='pedia-items-title'>🙌 Manifest AI selection</div>
                    <AIPediaCards tools={collections}/>
                </div> 
                : <Loader/>
            }
            <ToastContainer/>
        </div>
    );
}

export default Home;