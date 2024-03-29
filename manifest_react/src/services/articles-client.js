import axiosHttpClient from './http-client';

class ArticlesSingleton {
  static instance;

  articles = [];

  async initialize() {
    try {
      const data = await axiosHttpClient.get('/get-articles');
      // console.log('ARTICLES DATA: ', data);
      // if (data.status === 200 && data.statusText.toLowerCase() === 'ok') {
      if (data.status === 200) {
        const res = data.data.articles;
        const articles = res;
        this.articles = articles.map((rawArticle, i) => {
          return {
            id: rawArticle.id,
            title: rawArticle.title,
            publishDate: rawArticle.created_at,
            categories: [], //rawArticle.categories,
            excerpt: rawArticle.excerpt,
            content: rawArticle.body,
            thumbnail: `${import.meta.env.VITE_SERVER_URL}/storage/${
              rawArticle.image
            }`,
            suggestedArticlesIds: this.getSuggestedArticlesIds(
              articles,
              3,
              rawArticle.id
            ),
            slug: rawArticle.title.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-'),
          };
        });
      }
    } catch (error) {
      console.log('ERROR: ', error);
    }
  }

  static getInstance() {
    if (!ArticlesSingleton.instance) {
      ArticlesSingleton.instance = new ArticlesSingleton();
    }
    return ArticlesSingleton.instance;
  }

  getSuggestedArticlesIds(articles, length, currentId) {
    const suggestedArticlesIds = [];

    if (articles.length >= length) {
      const max = articles.length;

      // Generate unique random article ids
      while (suggestedArticlesIds.length < length) {
        const randomIndex = Math.floor(Math.random() * max);
        const id = articles[randomIndex].id;

        if (id !== currentId && !suggestedArticlesIds.includes(id)) {
          suggestedArticlesIds.push(id);
        }
      }
    }

    return suggestedArticlesIds;
  }
}

const articlesSingleton = ArticlesSingleton.getInstance();
// articlesSingleton.initialize();

export default articlesSingleton;
