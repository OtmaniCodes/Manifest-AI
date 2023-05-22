import axiosHttpClient from './http-client';

class JobOffersSingleton {
  static instance;

  jobsOffers = [];

  async initialize() {
    try {
      const data = await axiosHttpClient.get('/get-jobs');
      // console.log('OFFERS DATA: ', data);
      // if (data.status === 200 && data.statusText.toLowerCase() === 'ok') {
      if (data.status === 200) {
        const res = data.data.jobs;
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
            requirements: rawJob.requirements
              .split('_')
              .map((r) => r.toString().trim()),
            responsibilities: rawJob.responsibilities
              .split('_')
              .map((r) => r.toString().trim()),
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

export default jobOffersSingleton;
