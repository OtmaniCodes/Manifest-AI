import './PediaCategories.css'
import React, { useEffect, useState } from 'react'
import Loader from '../../components/Loader/Loader';
import { Link } from 'react-router-dom';
import { FuncHelper } from '../../utils/func-helper';

export default function PediaCategories() {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    window.scrollTo({'behavior': 'instant', top: 0})
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/get-tools-categories`);
        const res = await response.json();
        setCategories(res.data)
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  if (!categories) {
    return <Loader/>
  }

  console.log(categories);
  // renders the navigation breadcrumbs at the very top
  const renderNavigationBreadcrumbs = () => {
    return (
      <div className="navigation-breadcrumbs">
        <div className="navigation-breadcrumbs-item">
          <Link to="/">Home</Link>
        </div>
        <i class="fa-solid fa-angle-right"></i>
        <div className="navigation-breadcrumbs-item">
          <p>Categories</p>
        </div>
      </div>
    );
  }

  return (
    <div className="categories-page">
        <div className="container">
            {renderNavigationBreadcrumbs()}
            <h1 className='mt-5'>All Categories</h1>
            <h5>Browse and explore all available categories</h5>

            <div className="row justify-content-center mt-5 w-100 m-0">
                    {
                        categories.filter(category => category.tools_count > 0).map((category, i) => {
                            return (
                                <div className="col-lg-3 col-md-4 col-6 text-center mb-5" key={i}>
                                    <Link to={`${category.name}`}>
                                        <div className="category-item">
                                            <div className="category-item-image">
                                                <img src={FuncHelper.getCleanServerImageUrl(category.image)} alt={`${category.name} image`}/>
                                            </div>
                                            <div className="category-item-name">
                                                <p>{category.name}</p>
                                                <p className='tools-count'>{category.tools_count} tools</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
            </div>
        </div>
    </div>
  )
}
