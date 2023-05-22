import axios from 'axios';

const axiosHttpClient = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL + '/api',
});

axiosHttpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Error handling logic
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Response Error:', error.response.data);
      console.error('Status:', error.response.status);
      console.error('Headers:', error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Request Error:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error:', error.message);
    }

    return Promise.reject(error); // Pass the error to the caller
  }
);

export default axiosHttpClient;
