import { useState } from 'react';
import './Header.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Header = (props) => {
    const data = useSelector(state => state.data.data);
    // const url = category ? `/search/${name}/${category}` : `/search/${name}`;
    const url = 'hello'

    return ( 
        <>
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
            // value={name}
            // onChange={(e) => setName(e.target.value)} 
            />
            <div>
                {/* <AiOutlineSearch/> */}
                {/* <Link to={`/search/${search}`}><i class="bi bi-search"></i></Link> */}
                <Link to={url}><i className="bi bi-search"></i></Link>
            </div>
        </div>
        <div className='pedia-catigories'>
            {data&&data.catigories.map((e,i)=>(
                <div key={i}
                className={props.category == e.name ? 'active-category' : ''}
                // onClick={()=>{setCategory(e.name)}}
                >
                    <Link to={`/search-category/${e.name}`}>{e.name}</Link>
                </div>
            ))}
        </div>
        </>
        
     );
}
 
export default Header;