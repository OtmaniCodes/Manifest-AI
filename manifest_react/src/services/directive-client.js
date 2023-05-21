import axiosHttpClient from './http-client';

class DirectivesSingleton {
  static instance;

  directives = [];

  async initialize() {
    try {
      const data = await axiosHttpClient.get('/get-directives');
      // console.log('DIRECTIVES DATA: ', data);
      // if (data.status === 200 && data.statusText.toLowerCase() === 'ok') {
      if (data.status === 200) {
        const res = data.data.directives;
        const directives = res;
        this.directives = directives.map((rawDirective, i) => {
          return {
            title: rawDirective.title,
            description: rawDirective.description
          };
        });
      }
    } catch (error) {
      console.log('ERROR: ', error);
    }
  }

  static getInstance() {
    if (!DirectivesSingleton.instance) {
        DirectivesSingleton.instance = new DirectivesSingleton();
    }
    return DirectivesSingleton.instance;
  }
}

const directivesSingleton = DirectivesSingleton.getInstance();

export default directivesSingleton;
