import React, { createContext, useContext, useEffect, useState } from "react";
import SplashLoader from "../view/components/SplashLoader/SplashLoader";
import jobOffersSingleton from "../services/job-offers-client";

const jobOffersContext = createContext(
    {loading: false, jobOffers: []}
);

export function JobOffersProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [jobOffers, setjobOffers] = useState([]);

  useEffect(() => {
    // let timeoutId;
    async function fetchjobOffers() {
      // if (!jobOffers) {
        await jobOffersSingleton.initialize();
        setjobOffers(jobOffersSingleton.jobsOffers);
        setLoading(false)
      // }else{
      //   setLoading(false)
      // }
      // timeoutId = setTimeout(()=>setLoading(false), 2000);
    }
    fetchjobOffers();
    // return () => {
    //   clearTimeout(timeoutId);
    // }
  }, []);


  if (loading) {
    return <SplashLoader/>
  }

  return (
    <jobOffersContext.Provider value={{jobOffers, loading}}>
      {children}
    </jobOffersContext.Provider>
  );
}

export function useJobOffers() {
  const context = useContext(jobOffersContext);
  if (context === undefined) {
    throw new Error("usejobOffers must be used within a JobOffersProvider");
  }
  return context;
}
