import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../../components/Footer/Footer';
import Navbar from '../../../components/Navbar/Navbar';
import './ArticlePage.css'


const articlesData = [
  {
    id: 1,
    title: 'How to Learn ReactJS',
    slug: 'how-to-learn-reactjs',
    publishDate: '2022-01-01',
    thumbnail: 'https://picsum.photos/id/1015/300/200',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    suggestedArticlesIds: [2, 3],
  },
  {
    id: 2,
    title: 'Why ReactJS is Awesome',
    slug: 'why-reactjs-is-awesome',
    publishDate: '2022-01-02',
    thumbnail: 'https://picsum.photos/id/1025/300/200',
    content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    suggestedArticlesIds: [1, 3],
  },
  {
    id: 3,
    title: 'ReactJS vs AngularJS',
    slug: 'reactjs-vs-angularjs',
    publishDate: '2022-01-03',
    thumbnail: 'https://picsum.photos/id/1035/300/200',
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    suggestedArticlesIds: [1, 2],
  },
];



const ArticlePage = () => {
  const { slug } = useParams();
  const article = articlesData.find(article => article.slug === slug);

  const renderBreadCrumbs = () => {
    return (
      <div className="d-flex article-breadcrums ms-4 mt-2">
        <Link className='breadcrumb-btn' to={'/'}>Home</Link>
        <p className="breadcrumb-divider">/</p>
        <Link className='breadcrumb-btn' to={'/articles'}>ARTICLES</Link>
        <p className="breadcrumb-divider">/</p>
        <p className="breadcrumb-slug">{article.title.trim()}</p>
      </div>
    );
  }

  return (
    <div id='article-page'>
        <img className='article-thumbnail shadow-lg' src={article.thumbnail} alt="Article Thumbnail" />
        {renderBreadCrumbs()}
        <div className="container-fluid mt-2" style={{marginTop: '55px'}}>
            <div className="row justify-content-center mt-5">
                <div className="col-md-10 text-start">
                    <article>
                      {/* <h1>{article.title}</h1> */}
                      <h1 className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, veniam!</h1>
                      {/* <p  className='article-content'>{article.content}</p> */}
                      <p className='article-content mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore placeat nostrum ea adipisci eius cum fuga, minima natus sint doloribus repudiandae est assumenda rem quaerat tempore quasi illum. Animi itaque, asperiores adipisci, nulla deserunt doloremque vitae omnis pariatur fuga aliquam dicta earum sapiente iure odit debitis. Facilis nisi quod, explicabo odit magni quis sed dolorem placeat modi, nesciunt fugiat quam labore similique dignissimos necessitatibus laboriosam quae suscipit assumenda? Dicta et corrupti ducimus. Debitis aspernatur perferendis, vero recusandae dolorum a nemo rerum dicta sequi neque ratione nulla. Nesciunt voluptatibus adipisci odit sit vel est asperiores nam deserunt, rem repellat velit aliquam nisi repellendus qui harum accusamus similique aut porro alias sequi. Explicabo quam, expedita debitis blanditiis reiciendis incidunt iure dolores, pariatur rem quis animi repellat numquam nostrum magnam maxime! Eum voluptatum, reprehenderit quos quisquam doloremque laboriosam voluptate nemo temporibus atque accusantium labore debitis sapiente eveniet hic mollitia dolore obcaecati accusamus officiis optio illo ipsa rem! Nam saepe, dignissimos rem reiciendis dolor asperiores labore maxime autem adipisci repellendus libero hic expedita, id ut similique quod odio ex magni soluta repellat! Accusantium vitae mollitia deleniti quaerat nostrum quos sit quisquam adipisci sed a ipsa, maxime veniam molestias nobis libero laudantium! Ducimus, quae ea.</p>
                      <div className="article-social-links text-end my-3 ">
                        <a href="#" className="facebook"><i className="bu bi-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bu bi-instagram"></i></a>
                        <a href="#" className="twitter"><i className="bu bi-twitter"></i></a>
                      </div>
                    </article>
                </div>
            </div>
        </div>
        <div className="suggested-articles d-flex justify-content-around pb-5 pt-4">
          {
            article.suggestedArticlesIds.map((id) => {
              const suggestedArticle = articlesData.find(article => article.id === parseInt(id));
              return (
                // <SuggestedArticleCard suggestedArticle={suggestedArticle}/>
                <div className="card suggested-card">
                  <img src={suggestedArticle.thumbnail} className="card-img-top h-50" alt="Article Thumbnail" />
                  <div className="card-body">
                    <h5 className="h5">{suggestedArticle.title}</h5>
                  </div>
                </div>
              );
            })
          }
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