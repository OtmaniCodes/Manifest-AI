import "./ArticlesSection.css"
import React from 'react';
import ArticleCard from '../../ArticleCard/ArticleCard';
import { Link } from 'react-router-dom';
import MainTitle from '../../MainTitle/MainTitle';
import { Fade } from "react-reveal";
import { useDataSource } from "../../../../state/data-provider";

export default function ArticlesSection() {
  var {articles, loading,sections} = useDataSource();
  sections=sections[0]
  const displayAmount = 6;

  return (
    <section id="articles-section">
        <div className="container">
            <MainTitle title={!loading&&sections.articles_title} subTitle={!loading && sections.articles_description} splitMargin={20}/>
            {
             loading
                ? (<div className="row justify-content-center py-5">
                        <div className="col-md-10 text-center">
                            <p>Loading articles...</p>
                        </div>
                    </div>)
                : (
                    <Fade bottom cascade duration={300}>
                        <div className="row justify-content-center align-items-start pt-5">
                            {
                                articles.slice(0, displayAmount).map((article, index) => (
                                    <div key={index} className="col-md-4 d-flex align-items-center mb-5">
                                        <ArticleCard article={article}/>
                                    </div>
                                ))   
                            }
                        </div>
                    </Fade>
                )
            }
            {
                (articles.length > displayAmount) && (
                    <div className="d-flex justify-content-center m-0">
                        <Link to={'/articles'} className="btn btn-text">See more</Link>
                    </div>
                )
            }
        </div>
    </section>
  )
}
