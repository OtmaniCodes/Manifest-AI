import React from 'react';
import './Article.css';

const Article = ({title, thumbnail, excerpt}) => {
  return (
    <div className="article-card card w-100 m-0 p-0">
      <img src={thumbnail} className="card-img-top" alt="Article Thumbnail" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{excerpt}</p>
        <a href="#" className="global-btn">Read More</a>
      </div>
    </div>
  )
}

export default Article;
