import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import chatfast from '../../assets/pedia/chatfast.webp.png'
// import Pagination from '../../pages/AIPedia/Pagination/Pagination';
import './AIPediaCards.css'
import { Link } from 'react-router-dom';
import VersionStateChip from '../VersionStateChip/VersionStateChip';
const AIPediaCards = (props) => {
    const tools=props.tools
    // const allItems =[
    //     {id: 2, name: "item2", version: 0, description: "This is item 2 Chatfast is a platform that allows users to create GPT chatbots to answer questions on their website...", tags: ["cat1", "cat3"]},
    //     {id: 3, name: "item3", version: 1, description: "This is item 3 Chatfast is a platform that allows users to create GPT chatbots to answer questions on their website...", tags: ["cat2", "cat3"]},
    //     {id: 4, name: "item4", version: 0, description: "This is item 4 Chatfast is a platform that allows users to create GPT chatbots to answer questions on their website...", tags: ["cat1", "cat2"]},
    //     {id: 5, name: "item5", version: 1, description: "This is item 5 Chatfast is a platform that allows users to create GPT chatbots to answer questions on their website...", tags: ["cat2", "cat3"]},
    //     {id: 6, name: "item6", version: 0, description: "This is item 6 Chatfast is a platform that allows users to create GPT chatbots to answer questions on their website...", tags: ["cat1", "cat3"]},
    //     {id: 7, name: "item7", version: 1, description: "This is item 7 Chatfast is a platform that allows users to create GPT chatbots to answer questions on their website...", tags: ["cat2", "cat3"]},
    //     {id: 8, name: "item8", version: 0, description: "This is item 8 Chatfast is a platform that allows users to create GPT chatbots to answer questions on their website...", tags: ["cat1", "cat2"]},
    //     {id: 9, name: "item9", version: 1, description: "This is item 9 Chatfast is a platform that allows users to create GPT chatbots to answer questions on their website...", tags: ["cat2", "cat3"]},
    //     {id: 1, name: "item1", version: 1, description: "This is item 1 Chatfast is a platform that allows users to create GPT chatbots to answer questions on their website...", tags: ["cat1", "cat2"]},
    // ];
    return ( 
        <div className='pedia-items-container'> 
            {tools && tools.map((e,i)=>(
                <div key={i} className='pedia-item'>
                <Link to={`/tool/${e.name}`}>
                    <img src={chatfast} alt={e.name+'-image'} />
                </Link>
                <div className='pedia-item-top'>
                    <Link to={`/tool/${e.name}`}>
                        <div className='pedia-chatfast'>{e.name} <i className="bi bi-box-arrow-up-right"></i></div>
                    </Link>
                    <VersionStateChip state={e.version_state}/>
                </div>
                <Link to={`/tool/${e.name}`}>
                    <p className='pedia-item-description'>
                        {e.description}
                    </p>
                </Link>
                <div className='pedia-item-bottom'>
                    <div className='pedia-item-catigorie'>
                        {e.category.name}
                    </div>
                    <div className='pedia-item-heart'>
                        <i className="bi bi-heart"></i>
                        {/* <i class="bi bi-heart-fill"></i> */}
                    </div>
                </div>
                {e.is_popular===1&&
                <div className='pedia-item-label'>
                    🔥 Popular
                </div>
                }
                </div>
            ))}   
        </div>
     );
}
 
export default AIPediaCards;