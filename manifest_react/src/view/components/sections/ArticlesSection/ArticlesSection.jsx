import "./ArticlesSection.css"
import React from 'react';
import { useArticles } from '../../../../state/aricles-provider'
import ArticleCard from '../../ArticleCard/ArticleCard';
import { Link } from 'react-router-dom';
import MainTitle from '../../MainTitle/MainTitle';
import { Fade } from "react-reveal";

export default function ArticlesSection() {
  const {articles, loading} = useArticles();
  const displayAmount = 6;

  return (
    <section id="articles-section">
        <div className="container">
            <MainTitle title={"READ OUR ARTICLES"} subTitle={"Check out the latest Articles posted on our blog."} color={"#22B4D7"} splitMargin={20}/>
            {
             loading
                ? (<div className="row justify-content-center py-5">
                        <div className="col-md-10 text-center">
                            <p>Loading articles...</p>
                        </div>
                    </div>)
                : (
                    <Fade bottom cascade duration={500}>
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