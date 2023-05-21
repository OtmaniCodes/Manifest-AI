import axiosHttpClient from './http-client';

class ManifestoContentSingleton {
  static instance;

  manifestoContent = [];

  async initialize() {
    try {
      const data = await axiosHttpClient.get('/get-manifesto-contents');
      // console.log('MANIFESTO-CONTENT DATA: ', data);
      // if (data.status === 200 && data.statusText.toLowerCase() === 'ok') {
      if (data.status === 200) {
        const res = data.data.manifestoContent;
        const manifestoContent = res;
        this.manifestoContent = manifestoContent.map((rawManifestoContent, i) => {
          return { 
            title: rawManifestoContent.title,
            body: rawManifestoContent.body.split('_')
            .map((r) => r.toString().trim()),
            image: `${import.meta.env.VITE_SERVER_URL}/storage/${rawManifestoContent.image}` ,
          };
        });
      }
    } catch (error) {
      console.log('ERROR: ', error);
    }
  }

  static getInstance() {
    if (!ManifestoContentSingleton.instance) {
      ManifestoContentSingleton.instance = new ManifestoContentSingleton();
    }
    return ManifestoContentSingleton.instance;
  }
}

const manifestoContentSingleton = ManifestoContentSingleton.getInstance();

export default manifestoContentSingleton;
