import React, { createContext, useContext, useEffect, useState } from "react";
import SplashLoader from "../view/components/SplashLoader/SplashLoader";
import servicesSingleton from "../services/services-client";

const ServicesContext = createContext(
    {loading: false, services: []}
);

export function ServicesProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchservices() {
      // if (!services) {
        await servicesSingleton.initialize();
        setServices(servicesSingleton.services);
        setLoading(false)
      // }else{
        // setLoading(false);
      // }
    }
    fetchservices();
  }, []);

  if (loading) {
    return <SplashLoader/>
  }

  return (
    <ServicesContext.Provider value={{services, loading}}>
      {children}
    </ServicesContext.Provider>
  );
}

export function useServices() {
  const context = useContext(ServicesContext);
  if (context === undefined) {
    throw new Error("useServices must be used within a ServicesProvider");
  }
  return context;
}
