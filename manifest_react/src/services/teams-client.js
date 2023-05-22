import axiosHttpClient from './http-client';

class TeamsSingleton {
  static instance;

  teams = [];

  async initialize() {
    try {
      const data = await axiosHttpClient.get('/get-teams');
      // console.log('TEAMS DATA: ', data);
      // if (data.status === 200 && data.statusText.toLowerCase() === 'ok') {
      if (data.status === 200) {
        const res = data.data.teams;
        const teams = res;
        this.teams = teams.map((rawTeam, i) => {
          return {
            name: rawTeam.name,
            image:`${import.meta.env.VITE_SERVER_URL}/storage/${rawTeam.image}` ,
            position: rawTeam.position,
            description: rawTeam.description,
          };
        });
      }
    } catch (error) {
      console.log('ERROR: ', error);
    }
  }

  static getInstance() {
    if (!TeamsSingleton.instance) {
        TeamsSingleton.instance = new TeamsSingleton();
    }
    return TeamsSingleton.instance;
  }
}

const teamsSingleton = TeamsSingleton.getInstance();

export default teamsSingleton;
