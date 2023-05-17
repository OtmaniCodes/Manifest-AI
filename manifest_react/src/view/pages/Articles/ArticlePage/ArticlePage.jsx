import './ArticlePage.css'
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { Helmet } from 'react-helmet';
import { useArticles } from '../../../../state/aricles-provider';
import ArticleCard from '../../../components/ArticleCard/ArticleCard';


const ArticlePage = () => {

  const {articles} = useArticles();
  const { slug } = useParams();
  const article = articles.find(article => article.slug === slug);

  const renderBreadCrumbs = () => {
    return (
      <div className="article-breadcrumbs d-flex ms-4">
        <Helmet>
          <title>ARTICLES | {slug} - MANIFEST AI</title>
        </Helmet>
        <Link className='breadcrumb-btn' to={'/'}>Home</Link>
        <p className="breadcrumb-divider">/</p>
        <Link className='breadcrumb-btn' to={'/articles'}>ARTICLES</Link>
        <p className="breadcrumb-divider">/</p>
        <p className="breadcrumb-slug">{article.title.trim()}</p>
      </div>
    );
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [slug])

  return (
    <div id='article-page'>
        {renderBreadCrumbs()}
        <img className='article-thumbnail shadow-lg' src={article.thumbnail} alt="Article Thumbnail" />
        <div className="container-fluid" style={{marginTop: '55px'}}>
            <div className="row justify-content-center mt-5">
                <div className="col-md-10 text-start">
                    <article>
                      <h1 className='mb-4'>{article.title}</h1>
                      {/* {article.content} */}
                      <div className='article-content'  dangerouslySetInnerHTML={{ __html: article.content }}></div>

                      <div className="article-social-links text-end my-3 ">
                           <FacebookShareButton url={window.location.href} title={article.title}>
                            <a className="facebook"><i className="bu bi-facebook"></i></a>
                          </FacebookShareButton >
                          {/* <InstagramShareButton url={window.location.href} title={article.title}>
                            <a className="instagram"><i className="bu bi-instagram"></i></a>
                          </InstagramShareButton> */}
                          <TwitterShareButton  url={window.location.href} title={article.title}>
                            <a className="twitter"><i className="bu bi-twitter"></i></a>
                          </TwitterShareButton>
                      </div>
                    </article>
                </div>
            </div>
        </div>
        {
          //! write if checks for suggested articles ids
        }
        <div className="suggested-articles pb-5 pt-4">
          <h3 className='section-title h1 mb-5'>Articles you might like</h3>
          <div className="container">

          <div className="row justify-content-center align-items-start">             
            {
              article.suggestedArticlesIds.map((id) => {
                const suggestedArticle = articles.find(article => article.id === parseInt(id));
                return (
                  <div key={suggestedArticle.id} className="col-md-4 d-flex align-items-center mb-5">
                    <ArticleCard article={suggestedArticle} />
                  </div>
                );
              })
            }
          </div>
          </div>
        </div>
    </div>
  )
}



// const SuggestedArticleCard = ({ suggestedArticle }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   const imageStyle = {
//     transform: isHovered ? 'scale(1.1)' : 'scale(1)',
//     transition: 'transform 0.3s ease-in-out',
//     maxHeight: '100%'
//   };

//   return (
//     // <div className="card" style={{overflow: 'hidden'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//     <div className="card">
//       <img src={suggestedArticle.thumbnail} className="card-img-top h-50" alt="Article Thumbnail" style={imageStyle} />
//       <div className="card-body">
//         <h5 className="card-title">{suggestedArticle.title}</h5>
//       </div>
//     </div>
//   );
// };

export default ArticlePage;