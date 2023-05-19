import axiosHttpClient from './http-client';

class SectionsSingleton {
  static instance;

  sections = [];

  async initialize() {
    try {
      const data = await axiosHttpClient.get('/get-sections');
      console.log('SECTIONS DATA: ', data);
      // if (data.status === 200 && data.statusText.toLowerCase() === 'ok') {
      if (data.status === 200) {
        const res = data.data.sections;
        const sections = res;
        this.sections = sections.map((rawSection, i) => {
          return {
            what_we_do: rawSection.what_we_do,
            our_vision: rawSection.our_vision,
            contact_us: rawSection.contact_us,
            slogan1: rawSection.slogan1,
            slogan2: rawSection.slogan2,
            services_description: rawSection.services_description,
            about_description: rawSection.about_description,
            directives_description: rawSection.directives_description,
            team_description: rawSection.team_description,
            slogan3: rawSection.slogan3,
            articles_description: rawSection.articles_description,
            jobs_description: rawSection.jobs_description,
            contact_description: rawSection.contact_description,
            contact_adresse: rawSection.contact_adresse,
            contact_email: rawSection.contact_email,
            contact_number: rawSection.contact_number,
            slogan4: rawSection.slogan4
          };
        });
      }
    } catch (error) {
      console.log('ERROR: ', error);
    }
  }

  static getInstance() {
    if (!SectionsSingleton.instance) {
        SectionsSingleton.instance = new SectionsSingleton();
    }
    return SectionsSingleton.instance;
  }
}

const sectionsSingleton = SectionsSingleton.getInstance();

export default sectionsSingleton;
