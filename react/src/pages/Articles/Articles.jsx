import React from 'react';
import Article from '../../components/Article/Article';
import './Articles.css'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const articlesData = [
  {
    id: 1,
    title: 'How to Learn ReactJS',
    slug: 'how-to-learn-reactjs',
    publishDate: '2022-01-01',
    thumbnail: 'https://picsum.photos/id/1015/300/200',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    suggestedArticlesIds: [2, 3],
    tags: ['AI', 'Tech', 'Consulting', 'Dev']
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
  {
    id: 4,
    title: 'How to Learn ReactJS',
    slug: 'how-to-learn-reactjs',
    publishDate: '2022-01-01',
    thumbnail: 'https://picsum.photos/id/1015/300/200',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    suggestedArticlesIds: [2, 3],
  },
  {
    id: 5,
    title: 'Why ReactJS is Awesome',
    slug: 'why-reactjs-is-awesome',
    publishDate: '2022-01-02',
    thumbnail: 'https://picsum.photos/id/1025/300/200',
    content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    suggestedArticlesIds: [1, 3],
  },
  {
    id: 6,
    title: 'ReactJS vs AngularJS',
    slug: 'reactjs-vs-angularjs',
    publishDate: '2022-01-03',
    thumbnail: 'https://picsum.photos/id/1035/300/200',
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    suggestedArticlesIds: [1, 2],
  },
];

export default function Articles({limit}) {
  return (
    <div id="Articles-page">
        <ArticlesGrid articlesLimit={limit} />
    </div>
  )
}

const ArticlesGrid = ({articlesLimit}) => {
  const theArticles = articlesLimit ? articlesData.slice(0, articlesLimit) : articlesData;
  return (
    <section id='articles-grid'>
        <div className="container-fluid py-5">
            <SectionTitle title={"Articles"} subTitle={"Yes we write as well, check out our latest written pieces now."}/>
            <Article article={theArticles[0]} horizontal={true}/>
            <div className="row justify-content-center">
                {theArticles.slice(1, theArticles.length).map((article, index) => (
                    <div key={article.id} className={`col-md-5 mb-5`} >
                        <Article article={article} />
                    </div>
                ))}
                {
                  ((theArticles.length - 1) % 2 !== 0) && (
                    <div key={theArticles.length} className={`col-md-5 mb-5`} ></div>
                  )
                }
            </div>
        </div>
    </section>
  )
}

