import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import chatfast from '../../assets/pedia/chatfast.webp.png'
// import Pagination from '../../pages/AIPedia/Pagination/Pagination';
import './AIPediaCards.css'
import { Link } from 'react-router-dom';
import VersionStateChip from '../VersionStateChip/VersionStateChip';
const AIPediaCards = (props) => {
    
    // const fetchData = async () => {
    //     try {
    //       const result = await axios.get('/get-search');
    //       setItems(result.data);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   };
    
    // const [currentPage, setCurrentPage] = useState(1);

    // var search=props.search
    // if(props.search.length>0){
    //     // axios. get the searched items
    //     // setItems(resulets with pagination)
    //     fetchData();
    // }
    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const result = await axios.get('/get-search');
    //         setItems(result.data);
    //       } catch (error) {
    //         console.error('Error fetching data:', error);
    //       }
    //     };
    
    //     fetchData();
    // }, [props.search]);

    // useEffect(() => {
    //     const fetchNextPage = async () => {
    //     //   const response = await axios.get(`http://localhost:8000/api/get-search?page=${currentPage}`);
    //     //   setItems(response.data.data);

    //     try {
    //         const result = await axios.get(`http://localhost:8000/api/get-search?page=${currentPage}`);
    //         setItems(result.data);
    //       } catch (error) {
    //         console.error('Error fetching data:', error);
    //       }
    //     }
    //     console.log(currentPage)
    //     fetchNextPage();
    //   }, [currentPage]);

    const data = useSelector(state => state.data.data);
    // const {AIPediaTools,AIPediaCollections,AIPediaToolsCategories} = useSelector(state => state.data.data);
    // console.log(AIPediaTools)
    // console.log(AIPediaCollections)
    // console.log(AIPediaToolsCategories)
    // console.log('AIPediaToolsCategories','AIPediaCollections,AIPediaTools')
    console.log(data)
    const allItems =[
        {id: 2, name: "item2", version: 0, description: "This is item 2 Chatfast is a platform that allows users to create GPT chatbots to answer questions on their website...", tags: ["cat1", "cat3"]},
        {id: 3, name: "item3", version: 1, description: "This is item 3 Chatfast is a platform that allows users to create GPT chatbots to answer questions on their website...", tags: ["cat2", "cat3"]},
        {id: 4, name: "item4", version: 0, description: "This is item 4 Chatfast is a platform that allows users to create GPT chatbots to answer questions on their website...", tags: ["cat1", "cat2"]},
        {id: 5, name: "item5", version: 1, description: "This is item 5 Chatfast is a platform that allows users to create GPT chatbots to answer questions on their website...", tags: ["cat2", "cat3"]},
        {id: 6, name: "item6", version: 0, description: "This is item 6 Chatfast is a platform that allows users to create GPT chatbots to answer questions on their website...", tags: ["cat1", "cat3"]},
        {id: 7, name: "item7", version: 1, description: "This is item 7 Chatfast is a platform that allows users to create GPT chatbots to answer questions on their website...", tags: ["cat2", "cat3"]},
        {id: 8, name: "item8", version: 0, description: "This is item 8 Chatfast is a platform that allows users to create GPT chatbots to answer questions on their website...", tags: ["cat1", "cat2"]},
        {id: 9, name: "item9", version: 1, description: "This is item 9 Chatfast is a platform that allows users to create GPT chatbots to answer questions on their website...", tags: ["cat2", "cat3"]},
        {id: 1, name: "item1", version: 1, description: "This is item 1 Chatfast is a platform that allows users to create GPT chatbots to answer questions on their website...", tags: ["cat1", "cat2"]},
    ];
    const [items, setItems] = useState(allItems);
    const filteredItems = items.filter((item) => {
    return item.name.toLowerCase().includes(props.search.toLowerCase());
    });
    // const [data, setData] = useState({data: [], current_page: 1, last_page: 8});


    return ( 
        <div className='pedia-items-container'> 
            {data && filteredItems.map((e,i)=>(
                <div key={i} className='pedia-item'>
                <Link to={`/tool/${e.name}`}>
                    <img src={chatfast} alt="" />
                </Link>
                <div className='pedia-item-top'>
                    
                    <Link to={`/tool/${e.name}`}>
                        <div className='pedia-chatfast'>{e.name} <i class="bi bi-box-arrow-up-right"></i></div>
                    </Link>
                    <VersionStateChip state={e.version==1?'Freemuim':'Premuim'}/>
                </div>
                <Link to={`/tool/${e.name}`}>
                    <p className='pedia-item-description'>
                        {e.description}
                    </p>
                </Link>
                <div className='pedia-item-bottom'>
                    <div className='pedia-item-catigorie'>
                        {e.tags.map((e,i)=>(
                            <div key={i}>{e}</div>
                        ))}
                    </div>
                    <div className='pedia-item-heart'>
                        <i class="bi bi-heart"></i>
                        {/* <i class="bi bi-heart-fill"></i> */}
                    </div>
                </div>
                <div className='pedia-item-label'>
                    🔥 Popular
                </div>
                </div>
            ))}
            {
                props.search.length>0&&
                <button onClick={() => setCurrentPage(currentPage + 1)}>
                    Next Page
                </button>
            }
           
            
        </div>
     );
}
 
export default AIPediaCards;