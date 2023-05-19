// dataContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import articlesSingleton from '../services/articles-client';
import jobOffersSingleton from '../services/job-offers-client';
import servicesSingleton from '../services/services-client';
import sectionsSingleton from '../services/sections-client';
import SplashLoader from '../view/components/SplashLoader/SplashLoader';
import directivesSingleton from '../services/directive-client';
import teamsSingleton from '../services/teams-client';
import aboutSingleton from '../services/about-client';
import aboutContentSingleton from '../services/about-content-client';
const DataContext = createContext(
    {
        loading: false,
        articles: [],
        services: [],
        jobOffers: [],
        sections: [],
        directives: [],
        teams: [],
        about: [],
        aboutContent: [],

    }
);

export const DataProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [jobOffers, setJobOffers] = useState([]);
  const [services, setServices] = useState([]);
  const [sections, setSections] = useState([]);
  const [directives, setDirectives] = useState([]);
  const [about, setAbout] = useState([]);
  const [teams, setTeams] = useState([]);
  const [aboutContent, setAboutContent] = useState([]);

  useEffect(() => {
    Promise.all([
      articlesSingleton.initialize(),
      jobOffersSingleton.initialize(),
      servicesSingleton.initialize(),
      sectionsSingleton.initialize(),
      directivesSingleton.initialize(),
      teamsSingleton.initialize(),
      aboutSingleton.initialize(),
      aboutContentSingleton.initialize(),
    ])
    .then(() => {
      setArticles(articlesSingleton.articles);
      setJobOffers(jobOffersSingleton.jobsOffers);
      setServices(servicesSingleton.services);
      setSections(sectionsSingleton.sections);
      setDirectives(directivesSingleton.directives);
      setTeams(teamsSingleton.teams);
      setAbout(aboutSingleton.about);
      setAboutContent(aboutContentSingleton.aboutContent);
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
    <DataContext.Provider value={{ loading, articles, jobOffers, services,sections,directives ,teams ,about,aboutContent}}>
      {children}
    </DataContext.Provider>
  );
};


export const useDataSource = () => useContext(DataContext);
