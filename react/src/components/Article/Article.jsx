import React from 'react';
import './Article.css';
import { Link } from 'react-router-dom';
import FuncHelpers from '../../utils/func-helpers';

// const Article = ({article}) => {
//   return (
//     <Link to={`/articles/${article.slug}`}>
//       <div className="article-card card w-100 m-0 p-0">
//         <img src={article.thumbnail} className="card-img-top" alt="Article Thumbnail" />
//         <div className="card-body">
//           <h5 className="card-title">{article.title}</h5>
//           <p className="card-text">{article.excerpt}</p>
//           <a href="#" className="global-btn">Read More</a>
//         </div>
//       </div>
//     </Link>
//   )
// }



const Article = ({article, horizontal, givenStyle}) => {
  return (
    <Link to={`/articles/${article.slug}`}>
      <div style={givenStyle} className={`container ${horizontal ? 'article-compo-horizontal' : 'article-compo card p-0 pb-3'}`}>
        <div className={`row justify-content-center${horizontal ? '' : ' flex-column'}`}>
          <div className={`col-md-${horizontal ? '7' : '12'}`}>
            <img src={article.thumbnail} className="article-card-img" alt="Article Thumbnail" />
          </div>
          <div className={`col-md-${horizontal ? '5' : '12'} px-${horizontal ? '' : '4'} text-start`}>
            <p className={`publish-date text-muted mb-3 pt-${horizontal ? '2' : '3'}`}>{FuncHelpers.formatDate(article.publishDate)}</p>
            <h3 className='title'>{article.title}</h3>
            {/* <p className="excerpt">{`${article.content.substring(0, 150)}...`}</p> */}
            { (
              <>
                <div className="d-flex" style={{ flexWrap: "wrap" }}>
                  {
                    article.categories.map(
                      (c, i) => (<div key={i} className="chip">{c}</div>)
                    )
                  }
                </div>
                <Link to={`/articles/${article.slug}`} className="my-3"><p className='read-more btn btn-text'>Read Mor</p></Link>
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Article;
