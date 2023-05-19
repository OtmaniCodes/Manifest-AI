import { Link } from 'react-router-dom';
import './ArticleCard.css';
import React from 'react'

export default function ArticleCard({article}) {
  const {thumbnail, title, categories, slug} = article;
  var excerpt = (article.excerpt ?? '').toString();
  excerpt = (excerpt.length > 75 ? excerpt.slice(0, 75) : excerpt) + '...'

  return (
    <div id="article-card">
      <Link to={`/articles/${slug}`}>
        <img src={thumbnail} className='thumbnail' alt="article thumbnail image" />
      </Link>
      <div className="articles-body d-flex">
        <div className="triangler"></div>
        <div className="content">
          <h3>{title}</h3>
          <p className='excerpt'>{excerpt}</p>
          <Link to={`/articles/${slug}`} className='read-more d-flex align-items-center'>
            <p className='m-0 me-2'>read more</p>
            <i className='fa-solid fa-arrow-right-long'></i>
          </Link>
        </div>
          <div className="triangler" style={{transform: 'rotateX(180deg)'}}></div>
      </div>
    </div>
  )
}
