import './Home.css'
import React, { useEffect, useState } from 'react';
// import chatfast from '../../../assets/pedia/chatfast.webp.png'
import chatfast from '../../assets/pedia/chatfast.webp.png'
import AIPediaCards from '../../components/AIPediaCards/AIPediaCards';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import Header from '../../components/Header/Header'


function Home(){
    const data = useSelector(state => state.data.data);
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
      useEffect(()=>{
        if(data){
            // filterTools()
            setCollections(data.manifest_collections)
            setNewTools(data.tools)
        }
      },[data])
    const url = category ? `/search/${name}/${category}` : `/search/${name}`;
useEffect(()=>{
    console.log(category)
},[category])

    return (    
        <div className='container mb-5'> 
            {data?
            <div className='pedia-container'>
            <Header/>
            <div className='pedia-items-title'>
                🔥 Just Arrives
            </div>
            <AIPediaCards tools={newTools}/>
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
            <div className='pedia-items-title'>
                🙌 Manifest AI selection
            </div>
            <AIPediaCards tools={collections}/>
            </div> 
            :
            <Loader/>
            }
        </div>
    );
}

export default Home;
