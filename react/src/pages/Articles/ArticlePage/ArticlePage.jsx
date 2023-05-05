import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../../components/Footer/Footer';
import Navbar from '../../../components/Navbar/Navbar';


const articlesData = [
  {
    id: 1,
    title: 'How to Learn ReactJS',
    thumbnail: 'https://picsum.photos/id/1015/300/200',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    title: 'Why ReactJS is Awesome',
    thumbnail: 'https://picsum.photos/id/1025/300/200',
    content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 3,
    title: 'ReactJS vs AngularJS',
    thumbnail: 'https://picsum.photos/id/1035/300/200',
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
];


const ArticlePage = () => {
  const { id } = useParams();
  const article = articlesData.find(article => article.id === parseInt(id));

  return (
    <div id='article-page'>
        <Navbar/>
        <div className="container" style={{marginTop: '100px'}}>
            <div className="row justify-content-center">
                <div className="col-md-10 text-center">
                    <h1>{article.title}</h1>
                    <img src={article.thumbnail} alt="Article Thumbnail" />
                    <p>{article.content}</p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ArticlePage;
