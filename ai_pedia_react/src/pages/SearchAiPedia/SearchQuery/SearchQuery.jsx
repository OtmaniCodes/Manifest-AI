import { useParams } from 'react-router-dom';
import './SearchQuery.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../../components/Header/Header';
import AIPediaCards from '../../../components/AIPediaCards/AIPediaCards';
import DataLoader from '../../../components/Loader/DataLoader/DataLoader';
import Pagination from '../../../components/Pagination/Pagination';
import { FuncHelper } from '../../../utils/func-helper';
const SearchQuery = () => {
    // alert('in')
    const [tools,setTools]=useState(null)
    const {query}=useParams()
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage,setLastPage] = useState(null); 

    useEffect(() => {
      window.scrollTo({'behavior': 'instant', top: 0})
      setTools(null)
      const fetchData = async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/get-tools-by-query`, {
            params: {
              name: query
            }
          });
          const data = response.data;
          setTools(
            {
              ...data,
              data: data.data.map(e => ({
                ...e,
                image: FuncHelper.getCleanServerImageUrl(e.image),
              })),
            }
          );
            
          setLastPage(data.last_page)
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      };

      fetchData();
    }, [query]);
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    useEffect(() => {
      setTools(null)
      const fetchData = async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/get-tools-by-query?page=${currentPage}`, {
            params: {
              name: query
            }
          });
          const data = response.data;
          setTools(
            {
              ...data,
              data: data.data.map(e => ({
                ...e,
                image: FuncHelper.getCleanServerImageUrl(e.image),
              })),
            }
          );
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      };
      fetchData();
    }, [currentPage]);

    return (
      <div className='container mb-5'> 
          <div className='pedia-container'>
            <Header />
            {
            tools?
            tools.data.length>0?
            <>
            <div className='pedia-items-title'>
            <code>({tools.total})</code>{tools.total>1?"Tools":'Tool'} for <span style={{ textDecoration: 'underline' }} >{query}</span> On fire 🔥
            </div>
            <AIPediaCards tools={tools.data}/>
            <Pagination
              currentPage={currentPage}
              lastPage={lastPage}
              onPageChange={handlePageChange}
            />
            </>
            :
            <div className='tools-results-area'>
              No Tool was Found 
            </div>
            :
            <div className='tools-results-area'>
              <DataLoader/>
            </div>
          }
          </div>
      </div>
    );
  };
 
export default SearchQuery;