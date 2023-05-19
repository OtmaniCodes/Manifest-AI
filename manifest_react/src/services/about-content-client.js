import axiosHttpClient from './http-client';

class AboutContentSingleton {
  static instance;

  aboutContent = [];

  async initialize() {
    try {
      const data = await axiosHttpClient.get('/get-about-contents');
      console.log('ABOUT-CONTENT DATA: ', data);
      // if (data.status === 200 && data.statusText.toLowerCase() === 'ok') {
      if (data.status === 200) {
        const res = data.data.aboutContents;
        const aboutContent = res;
        this.aboutContent = aboutContent.map((rawAboutContent, i) => {
          return { 
            title: rawAboutContent.title,
            body: rawAboutContent.body.split('_')
            .map((r) => r.toString().trim()),
            image: `${import.meta.env.VITE_SERVER_URL}/storage/${rawAboutContent.image}` ,
          };
        });
      }
    } catch (error) {
      console.log('ERROR: ', error);
    }
  }

  static getInstance() {
    if (!AboutContentSingleton.instance) {
      AboutContentSingleton.instance = new AboutContentSingleton();
    }
    return AboutContentSingleton.instance;
  }
}

const aboutContentSingleton = AboutContentSingleton.getInstance();

export default aboutContentSingleton;
