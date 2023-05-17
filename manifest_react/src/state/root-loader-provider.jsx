import React, { createContext, useEffect, useState } from 'react'
import SplashLoader from '../view/components/SplashLoader/SplashLoader';
import articlesSingleton from '../services/articles-client';
import servicesSingleton from '../services/services-client';
import jobOffersSingleton from '../services/job-offers-client';

const RootLoaderContext = createContext({
    appLoaded: false,
})

export function RootLoaderProvider({children}) {  
  const [appLoaded, setAppLoaded] = useState(false);
  
  const initializeApp = async () => {
    await articlesSingleton.initialize();
    await servicesSingleton.initialize();
    await jobOffersSingleton.initialize();
  }

  useEffect(() => {
    initializeApp().then(() => {
        setAppLoaded(true)
    })
  }, [])

  if (!appLoaded) {
    return <SplashLoader/>
  }

  return (
    <RootLoaderContext value={{appLoaded}}>
        {children}
    </RootLoaderContext>
  )
}



