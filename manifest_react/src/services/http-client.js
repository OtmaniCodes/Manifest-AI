import axios from 'axios';

const axiosHttpClient = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL + '/api',
});
// axiosHttpClient.interceptors.response.use(
//   response => response.data,
//   error => {
//     if (error.response) {
//       const statusCode = error.response.status;
//       const responseData = error.response.data;
      
//       let errorMessage = '';
      
//       if (statusCode === 419) {
//         errorMessage = 'Error: Authentication session has expired.';
//       } else if (statusCode === 422) {
//         errorMessage = 'Error: The request was well-formed but unable to process.';
//       } else {
//         errorMessage = `Error: HTTP status ${statusCode}`;
//       }
      
//       console.error(errorMessage);
//       console.error('Response Data:', responseData);
      
//       return Promise.reject(error);
//     } else if (error.request) {
//       console.error('Request Error:', error.request);
//     } else {
//       console.error('Error:', error.message);
//     }
    
//     return Promise.reject(error);
//   }
// );

export default axiosHttpClient;
