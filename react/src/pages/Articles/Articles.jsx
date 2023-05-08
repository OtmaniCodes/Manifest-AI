import React, { useState } from 'react';
import Article from '../../components/Article/Article';
import './Articles.css'
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { useArticles } from '../../state/aricles-provider';
import { Link } from 'react-router-dom';
import useScrollToTop from '../../hooks/useScrollToTop';
import Fade from 'react-reveal/Fade'
import { Helmet } from 'react-helmet';

export default function Articles({limit, showSearch}) {
  useScrollToTop();
  return (
    <div id="Articles-page">
        <Helmet>
          <title>ARTICLES - MANIFEST AI</title>
        </Helmet>
        <ArticlesGrid articlesLimit={limit} showSearch={showSearch} />
    </div>
  )
}

const ArticlesGrid = ({articlesLimit, showSearch}) => {
  const {articles, loading} = useArticles();
  const theArticles = articlesLimit ? articles.slice(0, articlesLimit) : articles;
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = theArticles.filter(article => {
    const { title, categories, content } = article;
    const query = searchQuery.toLowerCase();

    return query ? (title.toLowerCase().includes(query)
      || categories.some(c => c.toLowerCase().includes(query))
      || content.toLowerCase().includes(query)) : true;
  });

  return (
    <section id='articles-grid'>
        <div className="container-fluid py-5">
            <SectionTitle title={"Articles"} subTitle={"Check out our last Articles posted on our blog."}/>
            { showSearch && (
              <div className="row search-portion justify-content-between align-items-center mb-5 py-3 px-md-5">
                <div className='col-md-6 text-start mb-2 mb-md-0'>
                  <div className="search-chips d-flex justify-content-start" style={{flexWrap: "wrap"}}>
                    {
                      ["AI", "Tech", "Consulting"].map((sc) => (
                        <div onClick={() => setSearchQuery(sc)} className="search-chip">{sc}</div>
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
            )}
            {
              loading
                ? <div className="row justify-content-center">
                  <div className="col-md-10 text-center">
                    <p>Loading articles...</p>
                  </div>
                </div>
                : !searchQuery.trim() ? (
                  <>
                    <Fade bottom duration={800}>
                      <Article article={filteredArticles[0]} horizontal={true}/>
                    </Fade>
                    <Fade bottom cascade duration={1000}>
                      <div className="row justify-content-center">             
                          {filteredArticles.slice(1, filteredArticles.length).map((article) => (
                              <div key={article.id} className={`col-md-5 mb-5`} >
                                  <Article article={article} />
                              </div>
                          ))}
                          {
                            ((filteredArticles.length - 1) % 2 !== 0) && (
                              <div key={filteredArticles.length} className={`col-md-5 mb-5`} ></div>
                            )
                          }
                      </div>
                    </Fade>
                    {
                      (theArticles.length < articles.length) && (
                        <div className="d-flex justify-content-center m-0">
                          <Link to={'/articles'} className="btn btn-text">See more</Link>
                        </div>
                      )
                    }
                  </>
                ) : (filteredArticles.length > 0) ?
                (
                  <div className="row justify-content-center">             
                      {filteredArticles.map((article) => (
                          <div key={article.id} className={`col-md-5 mb-5`} >
                              <Article article={article} />
                          </div>
                      ))}
                      {
                        ((filteredArticles.length - 1) % 2 !== 0) && (
                          <div key={filteredArticles.length} className={`col-md-5 mb-5`} ></div>
                        )
                      }
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
    </section>
  )
}
