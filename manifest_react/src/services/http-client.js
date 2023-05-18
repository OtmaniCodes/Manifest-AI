import axios from 'axios';

const axiosHttpClient = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL + '/api',
});

export default axiosHttpClient;
