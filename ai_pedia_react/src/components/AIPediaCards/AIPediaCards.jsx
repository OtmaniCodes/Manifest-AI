import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import chatfast from '../../assets/pedia/chatfast.webp.png'
import './AIPediaCards.css'
import { Link } from 'react-router-dom';
import VersionStateChip from '../VersionStateChip/VersionStateChip';
            

const AIPediaCards = (props) => {
    const tools = props.tools

    return ( 
        <div className='pedia-items-container'> 
            {tools && tools.map((e,i)=>(
                <div key={i} className='pedia-item'>
                <Link to={`/tool/${e.name}`} state={e}>
                    <img src={e.image} alt={e.name+'-image'} />
                </Link>
                <div className='pedia-item-top'>
                    <Link to={`/tool/${e.name}`} state={e}>
                        <div className='pedia-chatfast'>{e.name} <i className="bi bi-box-arrow-up-right"></i></div>
                    </Link>
                    <VersionStateChip state={e.version_state}/>
                </div>
                <Link to={`/tool/${e.name}`} state={e}>
                    <p className='pedia-item-description'>
                        {e.description}
                    </p>
                </Link>
                <div className='pedia-item-bottom'>
                    <div className='pedia-item-catigorie'>
                        {e.category.name}
                    </div>
                    <div className='pedia-item-heart'>
                        {/* <i className="bi bi-heart"></i> */}
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