import axios from 'axios';

const mediumUserName = 'manifestai';
// const mediumUserName = "francescahedges";
const axiosHttpClient = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL + '/api',
});

class JobOffersSingleton {
  static instance;

  jobsOffers = [];

  async initialize() {
    try {
      const data = await axiosHttpClient.get('/get-jobs');
      console.log('OFFERS DATA: ', data);
      if (data.status === 200 && data.statusText.toLowerCase() === 'ok') {
        const res = data.data.jobs;
        // const articles = res.filter(
        //     (item) => item.categories.length > 0
        // );
        const jobs = res;
        this.jobsOffers = jobs.map((rawJob, i) => {
          return {
            id: rawJob.id,
            title: rawJob.title,
            location: rawJob.location,
            icon: `${import.meta.env.VITE_SERVER_URL}/storage/${rawJob.icon}`,
            // icon: `${import.meta.env.VITE_SERVER_URL}/storage/${rawJob.icon}`,
            date: rawJob.date,
            description: rawJob.description,
            requirements: rawJob.requirements.split(','),
            responsibilities: rawJob.responsibilities.split(','),
          };
        });
      }
    } catch (error) {
      console.log('ERROR: ', error);
    }
  }

  static getInstance() {
    if (!JobOffersSingleton.instance) {
      JobOffersSingleton.instance = new JobOffersSingleton();
    }
    return JobOffersSingleton.instance;
  }
}

const jobOffersSingleton = JobOffersSingleton.getInstance();
// articlesSingleton.initialize();

export default jobOffersSingleton;