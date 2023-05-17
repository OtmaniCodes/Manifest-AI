import axios from 'axios';

const mediumUserName = 'manifestai';
// const mediumUserName = "francescahedges";
const axiosHttpClient = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL + '/api',
});

class ServicesSingleton {
  static instance;

  services = [];

  async initialize() {
    try {
      const data = await axiosHttpClient.get('/get-services');
      console.log('SERVICES DATA: ', data);
      if (data.status === 200 && data.statusText.toLowerCase() === 'ok') {
        const res = data.data.services;
        const services = res;
        this.services = services.map((rawService, i) => {
          return {
            title: rawService.title,
            slug: rawService.title.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-'),
            smallDescription: rawService.smallDescription,
            icon: `${import.meta.env.VITE_SERVER_URL}/storage/${
              rawService.icon
            }`,
            image: `${import.meta.env.VITE_SERVER_URL}/storage/${
              rawService.image
            }`,
            bigDescription: rawService.bigDescription,
            list: rawService.list.split(','),
          };
        });
      }
    } catch (error) {
      console.log('ERROR: ', error);
    }
  }

  static getInstance() {
    if (!ServicesSingleton.instance) {
      ServicesSingleton.instance = new ServicesSingleton();
    }
    return ServicesSingleton.instance;
  }
}

const servicesSingleton = ServicesSingleton.getInstance();
// ServicesSingleton.initialize();

export default servicesSingleton;
