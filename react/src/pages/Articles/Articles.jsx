import React from 'react';
import Article from '../../components/Article/Article';
import './Articles.css'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const articles = [
  {
    id: 1,
    title: 'How to Learn ReactJS',
    thumbnail: 'https://picsum.photos/id/1015/300/200',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quos eveniet accusantium voluptas similique amet eaque modi, minima voluptate itaque repellendus unde tempore consequatur ipsa libero debitis porro harum? Quo assumenda esse ea rem suscipit quaerat accusamus eos modi, eligendi id hic sed doloremque error delectus cum sapiente adipisci nihil voluptatum beatae facere. Nisi, doloribus? Atque accusantium tempore, asperiores cupiditate doloremque perferendis necessitatibus ipsa, porro vel quas laborum odit deleniti vero iure nostrum harum quisquam voluptatum soluta commodi, incidunt beatae! Architecto nobis possimus cumque deleniti optio expedita earum sit quidem officiis vel corporis sapiente animi maxime placeat, voluptatum laboriosam. Nihil qui illo nisi, possimus suscipit dolore? Alias sapiente dolore distinctio, perspiciatis quisquam facere explicabo doloremque voluptates debitis? Est ab quibusdam, facilis quasi architecto sit amet nostrum perspiciatis molestiae eius temporibus consequuntur laboriosam voluptatibus earum, eveniet eaque necessitatibus? Voluptatem, sint ad quo nostrum excepturi provident eveniet temporibus nisi ut qui quidem dolorem ullam ducimus nam vero fuga repellat libero iusto sit. Laudantium consequatur aspernatur numquam ea vitae fuga aliquid consectetur veritatis, sit corrupti at esse officiis distinctio eaque, tempore similique illum itaque, sequi exercitationem praesentium. Dignissimos facilis ratione aliquam inventore neque aut recusandae blanditiis. Consequatur, sapiente accusantium. Omnis laboriosam quia qui!',
  },
  {
    id: 2,
    title: 'Why ReactJS is Awesome',
    thumbnail: 'https://picsum.photos/id/1025/300/200',
    content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 3,
    title: 'How to Learn ReactJS',
    thumbnail: 'https://picsum.photos/id/1015/300/200',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 4,
    title: 'Why ReactJS is Awesome',
    thumbnail: 'https://picsum.photos/id/1025/300/200',
    content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 5,
    title: 'How to Learn ReactJS',
    thumbnail: 'https://picsum.photos/id/1015/300/200',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 6,
    title: 'Why ReactJS is Awesome',
    thumbnail: 'https://picsum.photos/id/1025/300/200',
    content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

export default function Articles() {
  return (
    <div id="Articles-page">
        <Navbar/>
        <ArticlesGrid/>
        <Footer/>
    </div>
  )
}

const ArticlesGrid = () => {
  return (
    <section id='articles-grid'>
        <div className="container py-5">
            <SectionTitle title={"Articles"}/>
            <div className="row justify-content-center align-items-start">
                {articles.map((article) => (
                    <div key={article.id} className="col-md-6 m-auto p-2 text-center" >
                        <Article
                            title={article.title}
                            thumbnail={article.thumbnail}
                            excerpt={article.content.substring(0, 200)+' ...'}
                        />
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

