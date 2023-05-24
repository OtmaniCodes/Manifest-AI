import './Home.css'
import React, { useState } from 'react';
// import chatfast from '../../../assets/pedia/chatfast.webp.png'
import chatfast from '../../assets/pedia/chatfast.webp.png'
import AIPediaCards from '../../components/AIPediaCards/AIPediaCards';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
function Home(){
    const data = useSelector(state => state.data.data);
    // const {AIPediaTools,AIPediaCollections,AIPediaToolsCategories} = useSelector(state => state.data.data);
    // console.log(AIPediaTools)
    // console.log(AIPediaCollections)
    // console.log(AIPediaToolsCategories)
    // console.log('AIPediaToolsCategories','AIPediaCollections,AIPediaTools')

    const catigories=[
        'AI Detection','Art','Audio','Avatars','Business','Chat','Coaching','Data Analysis','Design','Development',
        'Education','Email','Prodcasting','Productivity','Prompt Guides','SEO'
    ]
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("");
    // const handleSearch = (e) => {
    //     e.preventDefault();
    //     history.push(`/search?query=${search}`);
    // };

    return (
        
        <>
        {data?
        <div className='pedia-container'>
        <div className='pedia-header'>
            <div className='pedia-title'>
                AI Pedia -Ready to take your productivity to the next level?
            </div>
            <div className='pedia-subtitle'>
                Find & Save the best AI tools every day for 10X results!
            </div>
            <div className='pedia-explore-button'>
                <button >
                    EXPLORE ALL CATEGORIES
                </button>
            </div>
        </div>
        <div className='pedia-search'>
            <input type="text" placeholder='I Am Looking For ...'
            onChange={(e) => setSearch(e.target.value)} 
            />
            <div onClick={()=>setFilter(search)}>
                {/* <AiOutlineSearch/> */}
                <Link to={`/search/${search}`}>search</Link>
            </div>
        </div>
        <div className='pedia-catigories'>
            {data.AIPediaToolsCategories.map((e,i)=>(
                <div key={i}>
                    {e.name}
                </div>
            ))}
        </div>
        <div className='pedia-items-title'>
            🔥 Just Arrives
        </div>
        <AIPediaCards search={filter}/>
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
        <AIPediaCards search={filter}/>
        </div> 
        :
        <Loader/>
        }
        </>
    );
}

export default Home;
