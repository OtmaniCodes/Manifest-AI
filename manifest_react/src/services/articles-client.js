import axios from "axios";

const mediumUserName = "manifestai";
// const mediumUserName = "francescahedges";
const axiosHttpClient = axios.create({
    // baseURL: `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUserName}`,
    baseURL: `http://127.0.0.1:8000/api`,
});

class ArticlesSingleton {
    static instance;

    articles = [];

    async initialize() {
        try {
            const data = await axiosHttpClient.get('/get-articles');
            // console.log(data,'test')
            if (data.status === 200 && data.statusText === "OK") {
                const res = data.data.articles;
                // const articles = res.filter(
                //     (item) => item.categories.length > 0
                // );
                const articles = res
                this.articles = articles.map((rawArticle, i) => {
                    
                    return {
                        id: rawArticle.id,
                        title: rawArticle.title,
                        publishDate: rawArticle.created_at,
                        categories: ['rawArticle.categories'],
                        content: rawArticle.body,
                        excerpt:rawArticle.excerpt,
                        thumbnail: 'http://127.0.0.1:8000/storage/'+rawArticle.image,
                        suggestedArticlesIds: this.getSuggestedArticlesIds(
                            articles,
                            3
                        ),
                        slug: rawArticle.slug
                            .toLowerCase()
                            // .replace(/[^a-zA-Z0-9]+/g, "-"),
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

// class ArticlesSingleton {
//     static instance;
//     baseUrl = `https://api.medium.com/v1/users/${mediumUserName}/publications`;

//     articles = [];

//     async initialize() {
//         const response = await fetch(`${this.baseUrl}/latest`, {
//             headers: {
//                 Authorization: `Bearer 22c3951bb6f7960fd7a12338ccb9ece38efe789a71900b49e4d9743c92290bfd2`, // replace with your own access token
//             },
//         });
//         const data = await response.json();
//         this.articles = data.data.map((rawArticle, i) => {
//             return {
//                 id: i + 1,
//                 title: rawArticle.title,
//                 publishDate: rawArticle.latestPublishedAt,
//                 categories: [], // Medium API doesn't provide categories
//                 content: rawArticle.content.subtitle,
//                 thumbnail: rawArticle.virtuals.previewImage.imageId,
//                 suggestedArticlesIds: [], // no need to generate suggested articles ids
//                 slug: rawArticle.slug,
//             };
//         });
//     }

//     static getInstance() {
//         if (!ArticlesSingleton.instance) {
//             ArticlesSingleton.instance = new ArticlesSingleton();
//         }
//         return ArticlesSingleton.instance;
//     }

//     getSuggestedArticlesIds(articles, length) {
//         const suggestedArticlesIds = [];

//         if (articles.length >= length) {
//             const min = 1;
//             const max = articles.length;

//             // Generate unique random article ids
//             while (suggestedArticlesIds.length < length) {
//                 const id = Math.floor(Math.random() * (max - min + 1)) + min;
//                 if (!suggestedArticlesIds.includes(id)) {
//                     suggestedArticlesIds.push(id);
//                 }
//             }
//         }

//         return suggestedArticlesIds;
//     }
// }

const articlesSingleton = ArticlesSingleton.getInstance();
// articlesSingleton.initialize();

export default articlesSingleton;
