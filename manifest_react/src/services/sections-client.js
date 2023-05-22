import axiosHttpClient from './http-client';

class SectionsSingleton {
  static instance;

  sections = [];

  async initialize() {
    try {
      const data = await axiosHttpClient.get('/get-sections');
      // console.log('SECTIONS DATA: ', data);
      // if (data.status === 200 && data.statusText.toLowerCase() === 'ok') {
      if (data.status === 200) {
        const res = data.data.sections;
        const sections = res;
        this.sections = sections.map((rawSection, i) => {
          return {
            what_we_do: rawSection.what_we_do,
            our_vision: rawSection.our_vision,
            contact_us: rawSection.contact_us,

            logo_menu:`${import.meta.env.VITE_SERVER_URL}/storage/${ rawSection.logo_menu}` ,
            logo_home:`${import.meta.env.VITE_SERVER_URL}/storage/${ rawSection.logo_home}`,
            facebook: rawSection.facebook,
            linkedin: rawSection.linkedin,
            tiktok: rawSection.tiktok,
            instagram: rawSection.instagram,
            twitter: rawSection.twitter,

            video_title: rawSection.video_title,
            aboutus_title: rawSection.aboutus_title,
            our_services_title: rawSection.our_services_title,
            the_directives_title: rawSection.the_directives_title,
            team_title: rawSection.team_title,
            articles_title: rawSection.articles_title,
            job_offers_title: rawSection.job_offers_title,
            contact_us_title: rawSection.contact_us_title,

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
