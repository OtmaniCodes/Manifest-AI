import axios from "axios";

// const mediumUserName = "manifestai";
const mediumUserName = "francescahedges";
const axiosHttpClient = axios.create({
    baseURL: `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUserName}`,
});

class ArticlesSingleton {
    static instance;

    articles = [];

    async initialize() {
        try {
            const data = await axiosHttpClient.get();
            if (data.status === 200 && data.data.status === "ok") {
                const res = data.data.items;
                const articles = res.filter(
                    (item) => item.categories.length > 0
                );
                this.articles = articles.map((rawArticle, i) => {
                    return {
                        id: i + 1,
                        title: rawArticle.title,
                        publishDate: rawArticle.pubDate,
                        categories: rawArticle.categories,
                        content: rawArticle.content,
                        thumbnail: rawArticle.thumbnail,
                        suggestedArticlesIds: this.getSuggestedArticlesIds(
                            articles,
                            3
                        ),
                        slug: rawArticle.title
                            .toLowerCase()
                            .replace(/[^a-zA-Z0-9]+/g, "-"),
                    };
                });
            }
        } catch (error) {
            console.log("ERROR: ", error);
        }
    }

    static getInstance() {
        if (!ArticlesSingleton.instance) {
            ArticlesSingleton.instance = new ArticlesSingleton();
        }
        return ArticlesSingleton.instance;
    }

    getSuggestedArticlesIds(articles, length) {
        const suggestedArticlesIds = [];

        if (articles.length >= length) {
            const min = 1;
            const max = articles.length;

            // Generate unique random article ids
            while (suggestedArticlesIds.length < length) {
                const id = Math.floor(Math.random() * (max - min + 1)) + min;
                if (!suggestedArticlesIds.includes(id)) {
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
