import './Articles.css'
import React, { useState } from 'react'
import MainTitle from '../../components/MainTitle/MainTitle';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import useScrollToTop from '../../../utils/custom-hooks/useScrollToTop';
import { Helmet } from 'react-helmet';
import { Fade } from 'react-reveal';
import { useDataSource } from '../../../state/data-provider';

export default function Articles() {
  useScrollToTop() 
  // const {articles, loading} = useArticles();
  const {articles, loading} = useDataSource();
  // const {sections, loading} = useDataSource();
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredArticles = articles.length > 0 ? articles.filter(article => {
    const { title, categories, content } = article;
    const query = searchQuery.toLowerCase();

    return query ? (title.toLowerCase().includes(query)
      || categories.some(c => c.toLowerCase().includes(query))
      || content.toLowerCase().includes(query)) : true;
  }) : [];

  return (
    <div className="articles-page pt-5">
        <Helmet>
          <title>ARTICLES - MANIFEST AI</title>
        </Helmet>
        <div className="container">
            <MainTitle title={"READ OUR BLOG"} subTitle={"Here you can find our written pieces regarding AI, sustaiable developement & agriculture and much more interesting topics."} color={"#22B4D7"} splitMargin={20}/>
            {/* <div className="d-flex justify-content-center">
                <a href="https://medium.com/@manifestai" className="medium-link">Check out our blogs on Medium</a>
            </div> */}
            <div className="row search-portion justify-content-between align-items-center my-5 py-3 px-md-5">
                <div className='col-md-6 text-start mb-2 mb-md-0'>
                    <div className="search-chips d-flex justify-content-start" style={{flexWrap: "wrap"}}>
                    {
                        ["AI", "Tech", "Consulting"].map((sc, i) => (
                         <div key={i} onClick={() => setSearchQuery(sc)} className="search-chip">{sc}</div>
                        ))
                    }
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <div className="input-group">
                        <input type="search" className="form-control" placeholder="Search articles" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                    </div>
                </div>
            </div>
            {/* {loading ?'hi':'no'} */}
            {/* {console.log(loading)} */}
            {
              loading
                ? <div className="row justify-content-center">
                  <div className="col-md-10 text-center">
                    <p>Loading articles...</p>
                  </div>
                </div>
                : !searchQuery.trim() ? (
                  filteredArticles.length > 0
                    ? 
                        (
                          <Fade cascade bottom duration={500}>
                            <div className="row justify-content-center align-items-start">             
                              {filteredArticles.map((article) => (
                                  <div key={article.id} className="col-md-4 d-flex align-items-center mb-5">
                                      <ArticleCard article={article} />
                                  </div>
                              ))}
                            </div>
                          </Fade>
                        )
                    : 
                    <div className="row justify-content-center">
                      <div className="col-md-10 text-center">
                        <p className='article-not-found h1'>...</p>
                      </div>
                    </div>
                )
                : (filteredArticles.length > 0) ?
                (
                  <div className="row justify-content-center align-items-start">             
                      {filteredArticles.map((article) => (
                          <div key={article.id} className="col-md-4 d-flex align-items-center mb-5">
                              <ArticleCard article={article} />
                          </div>
                      ))}
                      {/* {
                        ((filteredArticles.length - 1) % 2 !== 0) && (
                          <div key={filteredArticles.length} className={`col-md-4 mb-5`} ></div>
                        )
                      } */}
                  </div>
                )
                : (
                  <div className="row justify-content-center">
                    <div className="col-md-10 text-center">
                      <p className='article-not-found h1'>No article found</p>
                    </div>
                  </div>
                )
            }
        </div>
    </div>
  )
}
