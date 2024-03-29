import { useParams } from 'react-router-dom';
import './SearchCategory.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../../components/Header/Header';
import AIPediaCards from '../../../components/AIPediaCards/AIPediaCards';
import DataLoader from '../../../components/Loader/DataLoader/DataLoader';
import Pagination from '../../../components/Pagination/Pagination';
import { FuncHelper } from '../../../utils/func-helper';

const SearchCategory = () => {
    const [tools,setTools]=useState(null)
    const {category}=useParams()
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage,setLastPage] = useState(null); 
    useEffect(() => {
      window.scrollTo({'behavior': 'instant', top: 0})
      setTools(null)
      const fetchData = async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/get-tools-by-category`, {
            params: {
              name: category
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
    }, [category]);
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    useEffect(() => {
      setTools(null)
      const fetchData = async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/get-tools-by-category?page=${currentPage}`, {
            params: {
              name: category
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
            <Header  category={category}/>
            {
            tools?
            tools.data.length>0?
            <>
            <div className='pedia-items-title'>
            <code>({tools.total})</code>{tools.total>1?"Tools":'Tool'} On fire 🔥
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
              No Tool was Found for 
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
 
export default SearchCategory;