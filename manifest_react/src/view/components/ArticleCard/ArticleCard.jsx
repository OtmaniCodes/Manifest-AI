import { Link } from 'react-router-dom';
import './ArticleCard.css';
import React from 'react'

export default function ArticleCard({article}) {
  const {thumbnail, title, categories, slug} = article;
  const excerpt = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis natus accusantium possimus...";
  return (
    <div id="article-card">
      <Link to={`/articles/${slug}`}>
        <img src={thumbnail} className='thumbnail' alt="article thumbnail image" />
      </Link>
      <h3>{title}</h3>
      <p className='excerpt'>{excerpt}</p>
      {/* <div className="chips d-flex justify-content-start w-100" style={{ flexWrap: "wrap" }}>
        {
          categories.map(
            (c, i) => (<div key={i} className="chip">{c}</div>)
          )
        }
      </div> */}
      <Link to={`/articles/${slug}`} className='read-more'>read more</Link>
    </div>
  )
}
