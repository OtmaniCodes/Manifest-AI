import { useState } from 'react';
import './Header.css'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
const Header = (props) => {
    const navigate=useNavigate()
    const data = useSelector(state => state.data.data);
    const [query,setQuery]=useState(null)
    const url = 'hello'
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            navigate(`/search/${query?query:'empty-search'}`)
        }
      };

    return ( 
        <>
        <div className='pedia-header'>
                <h3>AI <span>PEDIA</span></h3>
                <div className='pedia-title'>
                    AI Pedia -Ready to take your productivity to the next level?
                </div>
                <div className='pedia-subtitle'>
                    Find & Save the best AI tools every day for 10X results!
                </div>
                <div className='pedia-explore-button'>
                    <Link to={'/categories'}>
                        <button >
                            EXPLORE ALL CATEGORIES
                        </button>
                    </Link>
                </div>
        </div>
        <div className='pedia-search'>
            <input type="text" placeholder='I Am Looking For ...'
            value={query}
            onChange={(e) => setQuery(e.target.value)} 
            onKeyDown={handleKeyDown}
            />
            <div>
                {/* <AiOutlineSearch/> */}
                {/* <Link to={`/search/${search}`}><i class="bi bi-search"></i></Link> */}
                <Link to={`/search/${query?query:'empty-search'}`}><i className="bi bi-search"></i></Link>
            </div>
        </div>
        <div className='pedia-catigories'>
            {data&&data.catigories.map((e,i)=>(
                <div key={i}
                className={props.category == e.name ? 'active-category' : ''}
                // onClick={()=>{setCategory(e.name)}}
                >
                    <Link to={`/categories/${e.name}`}>{e.name}</Link>
                </div>
            ))}
        </div>
        </>
        
     );
}
 
export default Header;