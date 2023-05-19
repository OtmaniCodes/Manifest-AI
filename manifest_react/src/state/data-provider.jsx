// dataContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import articlesSingleton from '../services/articles-client';
import jobOffersSingleton from '../services/job-offers-client';
import servicesSingleton from '../services/services-client';
import SplashLoader from '../view/components/SplashLoader/SplashLoader';

const DataContext = createContext(
    {
        loading: false,
        articles: [],
        services: [],
        jobOffers: [],
    }
);

export const DataProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [jobOffers, setJobOffers] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    Promise.all([
      articlesSingleton.initialize(),
      jobOffersSingleton.initialize(),
      servicesSingleton.initialize()
    ])
    .then(() => {
      setArticles(articlesSingleton.articles);
      setJobOffers(jobOffersSingleton.jobsOffers);
      setServices(servicesSingleton.services);
      setLoading(false);
    })
    .catch(error => {
      console.log('Error initializing data', error);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <SplashLoader/>
  }

  return (
    <DataContext.Provider value={{ loading, articles, jobOffers, services }}>
      {children}
    </DataContext.Provider>
  );
};


export const useDataSource = () => useContext(DataContext);
