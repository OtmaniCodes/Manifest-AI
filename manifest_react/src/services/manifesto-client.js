import axiosHttpClient from './http-client';

class ManifestoSingleton {
  static instance;

  manifesto = [];

  async initialize() {
    try {
      const data = await axiosHttpClient.get('/get-manifesto');
      // console.log('MANIFESTO DATA: ', data);
      // if (data.status === 200 && data.statusText.toLowerCase() === 'ok') {
      if (data.status === 200) {
        const res = data.data.manifesto;
        const manifesto = res;
        this.manifesto = manifesto.map((rawManifesto, i) => {
          return {
            title: rawManifesto.title,
            body: rawManifesto.body.split('_')
            .map((r) => r.toString().trim()),
          };
        });
      }
    } catch (error) {
      console.log('ERROR: ', error);
    }
  }

  static getInstance() {
    if (!ManifestoSingleton.instance) {
      ManifestoSingleton.instance = new ManifestoSingleton();
    }
    return ManifestoSingleton.instance;
  }
}

const manifestoSingleton = ManifestoSingleton.getInstance();

export default manifestoSingleton;
