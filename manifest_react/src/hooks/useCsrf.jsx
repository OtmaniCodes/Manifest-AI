import { useState, useEffect } from 'react';

const useCsrf = () => {
  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await fetch('/csrf-token'); // Replace with your Laravel route to retrieve the CSRF token
        const { csrfToken } = await response.json();
        setCsrfToken(csrfToken);
      } catch (error) {
        console.error('Failed to fetch CSRF token:', error);
      }
    };

    fetchCsrfToken();
  }, []);

  return csrfToken;
};

export default useCsrf;
