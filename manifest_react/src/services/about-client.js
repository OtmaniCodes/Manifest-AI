import axiosHttpClient from './http-client';

class AboutSingleton {
  static instance;

  about = [];

  async initialize() {
    try {
      const data = await axiosHttpClient.get('/get-about');
      // console.log('ABOUT DATA: ', data);
      // if (data.status === 200 && data.statusText.toLowerCase() === 'ok') {
      if (data.status === 200) {
        const res = data.data.about;
        const about = res;
        this.about = about.map((rawAbout, i) => {
          return {
            title: rawAbout.title,
            body: rawAbout.body.split('_')
            .map((r) => r.toString().trim()),
            image:`${import.meta.env.VITE_SERVER_URL}/storage/${rawAbout.image}` ,
          };
        });
      }
    } catch (error) {
      console.log('ERROR: ', error);
    }
  }

  static getInstance() {
    if (!AboutSingleton.instance) {
      AboutSingleton.instance = new AboutSingleton();
    }
    return AboutSingleton.instance;
  }
}

const aboutSingleton = AboutSingleton.getInstance();

export default aboutSingleton;
